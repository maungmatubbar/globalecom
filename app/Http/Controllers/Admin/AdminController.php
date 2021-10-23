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

class AdminController extends Controller
{

    // use AuthenticatesUsers;

    // /**
    //  * Where to redirect users after login.
    //  *
    //  * @var string
    //  */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }
    // protected $redirectTo = RouteServiceProvider::HOME;


    public function dashboard()
    {
        //dd(auth('admin')->user());
        //return redirect()->intended(RouteServiceProvider::HOME);
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
                return redirect()->back();
            }
        }
        if (auth('admin')->user()) {
            return redirect('/admin/dashboard');
        } else {
            return view('admin.admin_login');
        }
    }
    public function settings()
    {
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
}