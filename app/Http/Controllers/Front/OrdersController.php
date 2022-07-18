<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Order;
use App\ReturnRequest;
use App\OrdersProduct;
use Auth;
use App\OrdersLog;
use Session;
class OrdersController extends Controller
{
    public function orders(){
        $orders = Order::with('orders_products')->where('user_id',Auth::user()->id)->orderBy('id','Desc')->get()->toArray();
       return view('front.orders.orders')->with(compact('orders'));
    }
    public function ordersDetails($id){
        $countUser = Order::where(['id'=>$id,'user_id'=>Auth::user()->id])->count();
        if($countUser>0)
        {
            $orderDetails = Order::with('orders_products')->where(['id'=>$id,'user_id'=>Auth::user()->id])->first()->toArray();
            return view('front.orders.orders_details')->with(compact('orderDetails'));
        }
        else if($countUser==0)
        {
            $message = "Your request is not valid";
            Session::flash('error_message',$message);
            return redirect('/orders');
        }
        return redirect('/orders');
       
    }
    public function orderCancel(Request $request)
    {
        $countUser = Order::where(['id'=>$request->order_id,'user_id'=>Auth::user()->id])->count();
        if($countUser>0){
            if($request->isMethod('post'))
            {
                //Update order status to cancelled
                Order::where(['id'=>$request->order_id])->update(['order_status'=>'Cancelled']);
                //Update Orders log
                $log = new OrdersLog();
                $log->order_id = $request->order_id;
                $log->order_status = 'User Cancelled';
                $log->updated_by = 'User';
                $log->reason = $request->reason;
                $log->save();
                $message = 'Order has been cancelled';
                Session::flash('success_message',$message);
                return redirect()->back();
            }
          
        }
        else
        {
            $message = "Your order request cancelletion is not valid";
            Session::flash('error_message',$message);
            return redirect('/orders');
        }
       
        
    }
    public function orderReturn(Request $request)
    {
        if($request->isMethod('post'))
        {
            $countUser = Order::where(['id'=>$request->order_id,'user_id'=>Auth::user()->id])->count();
            if($countUser>0){
                $productArr  = explode('-',$request->product_info);
                $productCode = $productArr[0];
                $productSize = $productArr[1];
                //Update Items Status OrdersProducts Table
                OrdersProduct::where([
                    'user_id'       =>Auth::user()->id,
                    'order_id'      =>$request->order_id,
                    'product_code'  => $productCode,
                    'product_size'  =>$productSize
                    ])->update(['item_status'=>'Return Initiated']);
                //Add Return Request
                $returnRequest = new ReturnRequest;
                $returnRequest->order_id = $request->order_id;
                $returnRequest->user_id = Auth::user()->id;
                $returnRequest->product_size = $productSize;
                $returnRequest->product_code = $productCode;
                $returnRequest->return_reason = $request->reason;
                $returnRequest->return_status = 'Pending';
                $returnRequest->comment = $request->comment;
                $returnRequest->save();
                $message = "Return request has been placed for the Ordered product!";
                Session::flash('message',$message);
                return redirect()->back();
            }
            else
            {
                $message = "Your order request return is not valid";
                Session::flash('success_message',$message);
                return redirect('/orders');
            }
        }
        
    }
}