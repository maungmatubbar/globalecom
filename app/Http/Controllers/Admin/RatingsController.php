<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Rating;
use Session;
class RatingsController extends Controller
{
    public function ratings()
    {
       
        Session::put('page','ratings');
        $ratings = Rating::with(['user','product'])->get();
        return view('admin.ratings.ratings&reviews')->with(compact('ratings'));
    }
    public function updateRatingStatus(Request $request)
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

            Rating::where('id',$request->record_id)->update(['status'=>$status]);
            return response()->json(['status'=>$status,'record_id'=>$request->record_id]);
        }
    }
    
}