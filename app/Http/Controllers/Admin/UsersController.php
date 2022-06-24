<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Session;
class UsersController extends Controller
{
    public function users()
    {
        Session::put('page','users');
        $users = User::get();
        return view('admin.users.users')->with(compact('users'));
    }
    public function updateUserStatus(Request $request)
    {
        if($request->ajax()){
            $data = $request->all();
            if ($data['status'] == 'Active') {
                $status = 0;
            } else {
                $status = 1;
            }
            User::where('id', $data['record_id'])->update([
                'status' => $status,
            ]);
            return response()->json(['status' => $status, 'record_id' => $data['record_id']]);
        }
    }
}