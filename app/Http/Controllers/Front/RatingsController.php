<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Session;
use App\Rating;
class RatingsController extends Controller
{
    public function addRating(Request $request)
    {
        $request->validate([
            'review' => 'required'
        ]);
        if($request->isMethod('post'))
        {
            if(!Auth::check())
            {
                $message = 'Login to rate this product';
                Session::flash('error_message',$message);
                return redirect()->back();
            }
            if(!isset($request->rating) || empty($request->rating))
            {
                $message = 'Add atleast One star rating for this product.';
                Session::flash('error_message',$message);
                return redirect()->back();
            }
            $ratingCount = Rating::where(['user_id'=>Auth::user()->id,'product_id'=>$request->product_id])->count();
            if($ratingCount>0)
            {
                $message = 'Your rating already exists for this product.';
                Session::flash('error_message',$message);
                return redirect()->back();
            }
            else
            {
               $rating = new Rating();
               $rating->user_id = Auth::user()->id;
               $rating->product_id = $request->product_id;
               $rating->rating = $request->rating;
               $rating->review = $request->review;
               $rating->save();
               $message = 'Thanks for rating and review this product! It will be shown once approved.';
               Session::flash('success_message',$message);
               return redirect()->back();
            }
        }
    }
}