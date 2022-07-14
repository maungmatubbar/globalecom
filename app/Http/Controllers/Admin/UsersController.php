<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Session;
use Carbon\Carbon;
use DB;
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
    public function viewUsersCharts()
    {
        Session::put('page','usersReports');
        $currentMonthUsers = User::whereYear('created_at',Carbon::now()->year)->whereMonth('created_at',Carbon::now()->month)->count();
        $lastMonthUsers = User::whereYear('created_at',Carbon::now()->year)->whereMonth('created_at',Carbon::now()->subMonth(1))->count();
        $lastTwoMonthUsers = User::whereYear('created_at',Carbon::now()->year)->whereMonth('created_at',Carbon::now()->subMonth(2))->count();
        $lastThreeMonthUsers = User::whereYear('created_at',Carbon::now()->year)->whereMonth('created_at',Carbon::now()->subMonth(3))->count();
        $usersCount = [$currentMonthUsers,$lastMonthUsers,$lastTwoMonthUsers,$lastThreeMonthUsers];
        return view('admin.users.view_users_charts')->with(compact('usersCount'));
    }
    public function viewUsersCountriesCharts()
    {
        Session::put('page','usersCounties');
        $getUserCountries = User::select('country',DB::raw('count(country) as count'))->groupBy('country')->get()->toArray();
        return view('admin.users.view_users_countries')->with(compact('getUserCountries'));
    }
}