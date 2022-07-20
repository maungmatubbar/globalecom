<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\NewsletterSubscriber;
use Session;
class NewsletterController extends Controller
{
    public function newsletterSubscribers()
    {
        Session::put('page','newsletter');
        $subscribers = NewsletterSubscriber::all();
        return view('admin.newsletter.newsletter')->with(compact('subscribers'));
    }
    public function updateNewsletterStatus(Request $request)
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
            NewsletterSubscriber::where('id',$request->record_id)->update(['status'=>$status]);
            return response()->json([
                'status' => $status,
                'record_id' => $request->record_id,
                
            ]);
        }
    }
    public function deleteNewsletter(Request $request)
    {
        if($request->ajax())
        {
            NewsletterSubscriber::find($request->attribute_id)->delete();
            return response()->json([
                'record_id' => $request->attribute_id
            ]);
        }
    }
}