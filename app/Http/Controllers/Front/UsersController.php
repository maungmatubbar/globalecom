<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Session;
use App\User;
use Auth;
use App\Cart;
use App\Sms;
use Illuminate\Support\Facades\Mail;
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
   
}