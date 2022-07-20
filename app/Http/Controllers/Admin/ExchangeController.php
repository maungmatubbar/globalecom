<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\OrdersProduct;
use App\ExchangeRequest;
use Session;
use Mail;
class ExchangeController extends Controller
{
    public function exchangeRequest()
    {
        Session::put('page','exchange_page');
        $exchangeRequests = ExchangeRequest::all();
        return view('admin.exchange_requests.exchange_requests')->with(compact('exchangeRequests'));
    }
    public function exchangeRequestUpdate(Request $request)
    {
        if($request->isMethod('post')){
            $exchangeDetails = ExchangeRequest::with('user')->where(['id'=>$request->id])->first()->toArray();
            ExchangeRequest::where('id',$request->id)->update(['exchange_status'=>$request->exchange_status]);
            OrdersProduct::where([
                'order_id'=>$exchangeDetails['order_id'],
                'product_code'=>$exchangeDetails['product_code'],
                'product_size'=>$exchangeDetails['product_size']])->update(['item_status'=>'Exchange '.$request->exchange_status
            ]);
            $email = $exchangeDetails['user']['email'];
            $exchange_status = $request->exchange_status;
            $messageData = ['exchangeDetails'=>$exchangeDetails,'exchange_status'=>$exchange_status];
            Mail::send('emails.exchange_request',$messageData,function($message)use($email,$exchange_status){
                $message->to($email)->subject('Exchange Request '.$exchange_status);
            });
            $message = 'Exchange Request has been '.$exchange_status.' and email sent to user';
            Session::flash('success_msg',$message);
            return redirect('admin/exchange-request');
        }
    }
}