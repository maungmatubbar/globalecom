<?php

namespace App\Http\Controllers\Admin;

use App\Admin;
use App\Http\Controllers\Controller;
use Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Hash;
use Image;

class AdminController extends Controller
{

    public function dashboard()
    {
        //dd(auth('admin')->user());
        Session::put('page', 'dashboard');
        return view('admin.admin_dashboard');
    }
    public function login(Request $request)
    {

        if ($request->isMethod('post')) {
            $data = $request->all();
            $rules = [
                'email' => 'required|email',
                'password' => 'required',
            ];
            $customMessage = [
                'email.required' => 'Email is required',
                'email.email' => 'Valid email address is required',
                'password.required' => 'Password is required'
            ];
            $this->validate($request, $rules, $customMessage);
            if (Auth::guard('admin')->attempt(['email' => $data['email'], 'password' => $data['password']])) {
                return redirect()->intended('/admin/dashboard');
            } else {
                Session::flash('error_message', 'These credentials do not match our records.');
                return redirect()->back()->withInput($request->only('email','remember'));
            }
        }
        if (auth('admin')->user()) {
            //return redirect('/admin/dashboard');
            return redirect()->back();
        } else {
            return view('admin.admin_login');
        }
    }
    public function settings()
    {
        Session::put('page', 'settings');
        $currentAdmin = Admin::where('email', Auth::guard('admin')->user()->email)->first();
        return view('admin.admin_settings', ['currentAdmin' => $currentAdmin]);
    }
    public function logout()
    {
        Auth::guard('admin')->logout();
        return redirect('/admin');
    }
    public function currentPassCheck(Request $request)
    {
        $data = $request->all();
        // echo Auth::guard('admin')->user()->password;
        if (Hash::check($data['current_password'], Auth::guard('admin')->user()->password)) {
            return true;
        } else {
            return false;
        }
    }
    public function updatePassword(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->all();
            if (Hash::check($data['current_password'], Auth::guard('admin')->user()->password)) {
                if ($data['new_password'] == $data['confirm_password']) {
                    Admin::where('id', Auth::guard('admin')->user()->id)->update([
                        'password' => bcrypt($data['new_password'])
                    ]);
                    Session::flash('success_msg', 'Update password successfully');
                } else {
                    Session::flash('error_msg', 'New password and Confirm password does not match');
                }
            } else {
                Session::flash('error_msg', 'Your password is incorrect');
            }
        }
        return redirect()->back();
    }
    public function updateAdminInfo(Request $request)
    {
        Session::put('page', 'update-admin-info');

        //validation 
        if ($request->isMethod('post')) {
            $data = $request->all();
            $rules = [
                'admin_name' => 'required',
                'mobile' => 'required|numeric',
                'admin_image' => 'image'
            ];
            $customMessages = [
                'admin_name.required' => 'Name is reuired',
                'admin_name.alpha' => 'Valid Name is reuired',
                'mobile.required' => 'Mobile number is reuired',
                'mobile.numeric' => 'Valid Mobile number is reuired',
                'admin_image.image' => 'Valid image is required'
            ];
            $this->validate($request, $rules, $customMessages);

            //Upload image
            if ($request->hasFile('admin_image')) {
                $image_temp = $request->file('admin_image');
                if ($image_temp->isValid()) {
                    if (Auth::guard('admin')->user()->image) {
                        unlink('images/admin_images/admin_photos/' . Auth::guard('admin')->user()->image);
                    }
                    $extension = $image_temp->getClientOriginalExtension();
                    $imageName = rand(111, 9999) . '.' . $extension;
                    $imagePath = 'images/admin_images/admin_photos/' . $imageName;
                    Image::make($image_temp)->resize(300, 300)->save($imagePath);
                } else if (!empty($data['current_admin_image'])) {
                    $imageName = $data['current_admin_image'];
                } else {
                    $imageName = "";
                }
                //Update admin details
                Admin::where('email', Auth::guard('admin')->user()->email)->update([
                    'name' => $data['admin_name'],
                    'mobile' => $data['mobile'],
                    'image' => $imageName
                ]);
            } else {
                //Update admin details
                Admin::where('email', Auth::guard('admin')->user()->email)->update([
                    'name' => $data['admin_name'],
                    'mobile' => $data['mobile'],
                ]);
            }

            Session::flash('success_msg', 'Admin info update successfully.');
            return redirect()->back();
        }


        $adminCurrentInfo = Auth::guard('admin')->user();
        return view('admin.update_admin_info', ['adminCurrentInfo' => $adminCurrentInfo]);
    }
}