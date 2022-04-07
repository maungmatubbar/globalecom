<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Country;
use App\User;
use App\Cart;
use App\Sms;
use Session;
use Auth;
class UsersController extends Controller
{
    public function loginRegister(){
        return view('front.users.login_register');
    }
    public function registerUser(Request $request){
        if($request->isMethod('post')){
            Session::forget('error_message');
            Session::forget('success_message');
            $data = $request->all();
            $userCount = User::where(['email'=>$data['email']])->count();
            if($userCount>0){
                $message = "Email already exists!";
                Session::flash('error_message',$message);
                return redirect()->back();
            }
            else
            {
                $user = new User();
                $user->name = $data['name'];
                $user->mobile = $data['mobile'];
                $user->email = $data['email'];
                $user->password =bcrypt($data['password']);
                $user->save();
                //Send Confirmation Email
                $email = $data['email'];
                $messageData = ['name'=>$data['name'],'email'=>$data['email'],'code'=>base64_encode($data['email'])];
                Mail::send('emails.confirmation',$messageData,function($message) use($email){
                    $message->to($email)->subject('Confirm Your Cloth Store Account');
                });
                $message = "Please confirm your email to activate your account";
                Session::put('success_message',$message);
                return redirect()->back();
                /*if(Auth::attempt(['email' => $data['email'], 'password' => $data['password']])){
                    if(!empty(Session::get('session_id'))){
                        $user_id = Auth::user()->id;
                        $session_id = Session::get('session_id');
                        Cart::where('session_id',$session_id)->update(['user_id'=>$user_id]);
                    }
                    // $message = "Dear customer, you have been successfully registered with Cloth store Ecommarce website.Login your account and access your order.";
                    // $mobile = $data['mobile'];
                   // Sms::sendSms($message,$mobile);
                   
                   //Send register mail
                   $email = $data['email'];
                   $messageData = ['name'=>$data['name'],'mobile'=>$data['mobile'],'email'=>$data['email']];
                   Mail::send('emails.register', $messageData, function ($message) use($email) {
                       $message->to($email)->subject('Welcome to Colth Store Ecommarce website');
                   });
                   return redirect('/');
                  
                } 
                */
            }
        }
    }
    public function confirmAccount($email){
        Session::forget('error_message');
        Session::forget('success_message');
        //Decode user Email
        $email = base64_decode($email);
        $userCount = User::where('email',$email)->count();
        if($userCount>0){
            $userDetails = User::where('email',$email)->first();
            if($userDetails->status == 1){
                $message = "Your Email account is already activated.Please login.";
                Session::put('error_message',$message);
                return redirect('/login-register');
            }
            else
            {
                
                //Update user status 1 to activate account.
                User::where('email',$email)->update(['status'=>1]);
                
                // $message = "Dear customer, you have been successfully registered with Cloth store Ecommarce website.Login your account and access your order.";
                    // $mobile = $data['mobile'];
                   // Sms::sendSms($message,$mobile);
                   
                //Send register mail
                $messageData = ['name'=>$userDetails['name'],'mobile'=>$userDetails['mobile'],'email'=>$email];
                Mail::send('emails.register', $messageData, function ($message) use($email) {
                    $message->to($email)->subject('Welcome to Colth Store Ecommarce website');
                });
                $message = "Your Email account is activated.You can login now.";
                Session::put('success_message',$message);
                return redirect('/login-register');
            }
        }
        else
        {
            abort(404);
        }
    }
    //check email
    public function checkEmail(Request $request){
        $data = $request->all();
        $emailCount = User::where(['email'=>$data['email']])->count();
        if($emailCount>0){
            return false;
        }
        else
        {
            return "true";die;
        }
    }
    public function logout(){
        Auth::logout();
        return redirect('/');
    }
    //User Login
    public function login(Request $request){
        if($request->isMethod('post')){
            Session::forget('error_message');
            Session::forget('success_message');
            $data = $request->all();
            //echo "<pre>";print_r($data);die;
            if(Auth::attempt(['email' => $data['email'], 'password' => $data['password']])){

                //Check email is activated or not
                $userStatus = User::where('email',$data['email'])->first();
                if($userStatus->status == 0){
                    Auth::logout();
                    $message = "Your account is not activate yet! Please confirm your email to activate.";
                    Session::put('error_message',$message);
                    return redirect()->back();
                }
                //Update user cart with user_id
                if(!empty(Session::get('session_id'))){

                    $user_id = Auth::user()->id;
                    $session_id = Session::get('session_id');
                    Cart::where('session_id',$session_id)->update(['user_id'=>$user_id]);
                }
               return redirect('/cart');
            }
            else{
                $message = "Email and Password does not match,Please try again!";
                Session::flash('error_message',$message);
                return redirect()->back();
            }
        }
    }
    public function forgotPassword(Request $request){
        if($request->isMethod('post')){
            $data = $request->all();
            $emailCount = User::where('email',$data['email'])->count();
            if($emailCount==0){
                $message = 'Email does not exists.';
                Session::put('error_message',$message);
                Session::forget('success_message');
                return redirect()->back();
            }
            //Generate Random Password
            $rendom_password = str_random(8);
            //Encode / Secure password
            $new_password = bcrypt($rendom_password);
            //Update Password
            User::where('email',$data['email'])->update(['password'=>$new_password]);
            //Get user name 
            $userName = User::select('name')->where('email',$data['email'])->first();
            //Send  forgot password email
            $email = $data['email'];
            $name = $userName->name;
            $messageData = [
                'email' => $email,
                'name' => $name,
                'password' => $rendom_password

            ];
            Mail::send('emails.forgot_password',$messageData,function($message)use($email){
                $message->to($email)->subject('New Password Generate E-Commarce website');
            });
            //Redirect to login register page
            $message = 'Please check your email for new password';
            Session::put('success_message',$message);
            Session::forget('error_message');
            return redirect('login-register');

        }
        return view('front.users.forgot_password');
    }
    //user account validation
    public function validation($request){
        $rules = [
            'name' => 'required|regex:/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/',
            'mobile' => 'required|numeric'
        ];
        $customMessage = [
            'name.required' => 'Name is required',
            'name.regex' => 'Valid name is required',
            'mobile.required' => 'Mobile number is required',
            'mobile.numeric' => 'Valid mobile number is required'
        ];
        $this->validate($request,$rules,$customMessage);

    }
    //User account update
    public function account(Request $request){
        $user_id = Auth::user()->id;
        $userDetails = User::find($user_id)->toArray();
        $countries = Country::where('status',1)->get()->toArray();
        if($request->isMethod('post')){
            $this->validation($request);
            $user = User::find($user_id);
            $user->name = $request->name;
            $user->address = $request->address;
            $user->city = $request->city;
            $user->state = $request->state;
            $user->country = $request->country ;
            $user->pincode = $request->pincode;
            $user->mobile = $request->mobile;
           $user->save();

           
           $message = "Your account details have been upadate successfully.";
           Session::flash('success_message',$message);
           Session::forget('error_message');
           return redirect()->back();
        }
        return view('front.users.account')->with(compact('userDetails','countries'));
    }
    //Check user current password 
    public function chkUserPassword(Request $request){
        if($request->isMethod('post')){
            $data = $request->all();
            $user_id = Auth::user()->id;
            $chkPassword = User::select('password')->where('id',$user_id)->first();
            if(Hash::check($data['current_password'], $chkPassword->password)){
                return 'true';
            }
            else
            {
                return 'false';
            }
        }
    }
    //Update user password
    public function updateUserPassword(Request $request){
        if($request->isMethod('post')){
            $data = $request->all();
            $user_id = Auth::user()->id;
            $chkPassword = User::select('password')->where('id',$user_id)->first();
            if(Hash::check($data['currentPassword'], $chkPassword->password)){
                //Update current password
                $new_password = bcrypt($data['newPassword']);
                User::where('id',$user_id)->update(['password'=>$new_password]);
                $message = "Password update successfully.";
                Session::flash('success_message',$message);
                return redirect()->back();
            }
            else
            {
                $message = "Your current password is incorrect";
                Session::flash('error_message',$message);
                return redirect()->back();
            }
        }
    }
   
}