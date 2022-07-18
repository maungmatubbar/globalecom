<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ReturnRequest;
use App\OrdersProduct;
use Session;
use Mail;
class ReturnRequestController extends Controller
{
    public function returnRequest()
    {
        Session::put('page','return_page');
        $returnRequests = ReturnRequest::all();
        return view('admin.return_requests.return_requests')->with(compact('returnRequests'));
    }
    public function returnRequestUpdate(Request $request)
    {
        if($request->isMethod('post')){
            $returnDetails = ReturnRequest::with('user')->where(['id'=>$request->id])->first()->toArray();
            ReturnRequest::where('id',$request->id)->update(['return_status'=>$request->return_status]);
            OrdersProduct::where([
                'order_id'=>$returnDetails['order_id'],
                'product_code'=>$returnDetails['product_code'],
                'product_size'=>$returnDetails['product_size']])->update(['item_status'=>'Return '.$request->return_status
            ]);
            $email = $returnDetails['user']['email'];
            $return_status = $request->return_status;
            $messageData = ['returnDetails'=>$returnDetails,'return_status'=>$return_status];
            Mail::send('emails.return_request',$messageData,function($message)use($email,$return_status){
                $message->to($email)->subject('Return Request '.$return_status);
            });
            $message = 'Return Request has been '.$return_status.' and email sent to user';
            Session::flash('success_msg',$message);
            return redirect('admin/return-request');
        }
    }
}