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
use App\AdminsRole;
use App\Visitor;
use App\User;
use App\Order;
class AdminController extends Controller
{

    public function dashboard()
    {
        //dd(auth('admin')->user());
        Session::put('page', 'dashboard');
        $visitorsCount = Visitor::get()->count();
        $usersCount = User::get()->count();
        $orderCount = Order::get()->count();
        return view('admin.admin_dashboard')->with(compact('visitorsCount','usersCount','orderCount'));
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
            if (Auth::guard('admin')->attempt(['email' => $data['email'], 'password' => $data['password'],'status'=>1])) {
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
                    if (file_exists(Auth::guard('admin')->user()->image)) {
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
    public function adminsSubadmins()
    {
        if(Auth::guard('admin')->user()->type=='subadmin')
        {
            Session::flash('error_message','This feature is restricted');
            return redirect('/admin/dashboard');
        }
        Session::put('page','admins_subadmins');
        $admins_subadmins = Admin::all();
        return view('admin.admins_subadmins.admins_subadmins')->with(compact('admins_subadmins'));
    }
    public function updateAdminStatus(Request $request)
    {
        if($request->ajax())
        {
           if($request->status == 'Active')
           {
                $status = 0;
           }
           else
           {
                $status = 1;
           }
           Admin::where('id',$request->record_id)->update(['status'=>$status]);  
            return response()->json([
                'status'=> $status,
                'record_id' => $request->record_id
            ]);
        }
    }
    public function deleteAdminSubadmin(Request $request)
    {

        if($request->ajax())
        {
            $admins_subadmins = Admin::find($request->attribute_id);
            if(file_exists('images/admin_images/admin_photos/'.$admins_subadmins->image))
            {
                unlink('images/admin_images/admin_photos/' . $admins_subadmins->image);
            }
            $admins_subadmins->delete();
            return response()->json([
                    'record_id'   => $request->attribute_id,
                    'success_msg' => 'Admin Deleted Successfully.'
            ]);
        }
    }
    public function addEditAdminSubadmin(Request $request,$id = null)
    {
        if($id=='')
        {
            $title = 'Add Admin / Sub-Admin';
            $adminData = new Admin();
            $message = 'Admin/Sub-Admin added successfully.';
        }
        else
        {
            $title = 'Edit Admin / Sub-Admin';
            $adminData = Admin::find($id);
            $message = 'Admin/Sub-Admin updated successfully.';
        }
        
        if($request->isMethod('post'))
        {
            if($id == "")
            {
                $adminCount = Admin::where('email',$request->email)->count();
                if($adminCount>0)
                {
                    Session::flash('error_message','Admin/Sub-Admin already exists');
                    return redirect('/admin/admins-subadmins');
                }
               
            }
            //Validation
            $rules = [
                'name' => 'required|regex:/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/',
                'type' => 'required',
                'email' => 'required|email',
                'image' => 'image'
            ];
            $customMessages = [
                'name.required' => 'Name is reuired',
                'name.regex' => 'Valid Name is reuired',
                'type.required' => 'Type is reuired',
                'email.required' => 'Email is reuired',
                'image.image' => 'Valid image is required'
            ];
            $this->validate($request, $rules, $customMessages);
            //Upload image
            if ($request->hasFile('image')) 
            {
                $image_temp = $request->file('image');
                if ($image_temp->isValid())
                {
                    if (file_exists('images/admin_images/admin_photos/'.$adminData->image)) {
                        unlink('images/admin_images/admin_photos/'.$adminData->image);
                    }
                    $extension = $image_temp->getClientOriginalExtension();
                    $imageName = rand(111, 9999) . '.' . $extension;
                    $imagePath = 'images/admin_images/admin_photos/' . $imageName;
                    Image::make($image_temp)->resize(300, 300)->save($imagePath);
                } 
                else 
                {
                    $imageName = $adminData->image;
                }
                //save data
                $adminData->name    = $request->name;
                $adminData->image   = $imageName;
                $adminData->mobile  = $request->mobile;
                if($id=="")
                {
                    $adminData->email = $request->email; 
                    $adminData->type = $request->type; 
                }
                if($request->password != "")
                {
                    $adminData->password = bcrypt($request->password);
                }
                $adminData->save();
                Session::flash('success_msg',$message);
                return redirect('/admin/admins-subadmins');
            }
            
        }
          

        return view('admin.admins_subadmins.add_edit_admin_subadmin')->with(compact('adminData','title'));
    }
    public function updateRole(Request $request,$id)
    {
        if($request->isMethod('post'))
        {
            $data = $request->all();
            unset($data['_token']);
            AdminsRole::where('admin_id',$id)->delete();
            foreach($data as $key=>$value)
            {
                if(isset($value['view']))
                {
                    $view = $value['view'];
                }
                else
                {
                    $view = 0;
                }
                if(isset($value['edit']))
                {
                    $edit = $value['edit'];
                }
                else
                {
                    $edit = 0;
                }
                if(isset($value['full']))
                {
                    $full = $value['full'];
                }
                else
                {
                    $full = 0;
                }

                AdminsRole::where('admin_id',$id)->insert([
                    'admin_id'      => $id,
                    'module'        => $key,
                    'view_access'   => $view,
                    'edit_access'   => $edit,
                    'full_access'   => $full
                ]);
            }
            $message = 'Roles Updated Successfully. ';
            Session::flash('success_msg',$message);
            return redirect('/admin/admins-subadmins');
        }

        $adminDetails = Admin::find($id);
        $title = 'Update '.$adminDetails['name'].'('.$adminDetails['type'].') Roles & Permissions';
        $adminRoles = AdminsRole::where('admin_id',$id)->get()->toArray();
        return view('admin.admins_subadmins.update_roles')->with(compact('title','adminDetails','adminRoles'));
    }
}