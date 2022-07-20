<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\NewsletterSubscriber;
class NewsletterController extends Controller
{
    public function addSubcriber(Request $request)
    {
        if($request->ajax())
        {
            $subscriberCount = NewsletterSubscriber::where('email',$request->subscriber_email)->count();
            if($subscriberCount>0)
            {
                return 'exists';
            }
            else
            {
                $newsletter = new NewsletterSubscriber();
                $newsletter->email = $request->subscriber_email;
                $newsletter->status = 1;
                $newsletter->save();
                return 'inserted';
            }
        }
    }
}