<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Order;
use App\User;
use App\OrderStatus;
use App\OrdersLog;
use Session;

class OrdersController extends Controller
{
    public function orders(){
        Session::put('page','orders');
        $orders = Order::with('orders_products')->orderBy('id','Desc')->get()->toArray();
        return view('admin.orders.orders')->with(compact('orders'));
    }
    public function orderDetails($id){
        $orderDetails = Order::with('orders_products')->where('id',$id)->first()->toArray();
        $userDetails = User::where('id',$orderDetails['user_id'])->first()->toArray();
        $orderStatuses = OrderStatus::get()->toArray();
        $orderLogs = OrdersLog::where('order_id',$id)->orderBy('id','Desc')->get()->toArray();
        return view('admin.orders.order_details')->with(compact('orderDetails','userDetails','orderStatuses','orderLogs'));
    }
    public function updateOrderStatus(Request $request){
        if($request->isMethod('post'))
        {
            $data = $request->all();
            //Update Order Status
            Order::where('id',$data['order_id'])->update(['order_status'=>$data['order_status']]);
            //Insert Courier Name and Tracking Number when status will be Shipped
            if(!empty($data['courier_name']) && !empty($data['tracking_number'])){
                Order::where('id',$data['order_id'])->update(['courier_name'=>$data['courier_name'],'tracking_number'=>$data['tracking_number']]);
            }
            //Get Order Details
            $orderDetails = Order::with('orders_products')->where('id',$data['order_id'])->first()->toArray();
            //Orders Log
            $log = new OrdersLog();
            $log->order_id = $data['order_id'];
            $log->order_status = $data['order_status'];
            $log->save();
            //Send to message Mobile for update status
            $mobileMessage = "Dear Customer, Your order #".$data['order_id']." status has been updated to '".$data['order_status']."' placed with Ecom Shop BD.";
            $mobile = $orderDetails['mobile'];
            //Sms::sendSms($mobileMessage,$mobile);

            //Order Status Send Email
            $email = $orderDetails['email'];
            $messageData = [
            'email' => $email,
            'name' => $orderDetails['name'],
            'order_id' => $data['order_id'],
            'orderDetails' => $orderDetails
            ];
            Mail::send('emails.order_status',$messageData,function($message) use($email){
            $message->to($email)->subject('Order Status Updated - EcomShopBD Cloth Store');
            });

            
            $message = "Order Status has been updated successfully";
            Session::flash('success_msg',$message);
            return redirect()->back();
        }
    }
    public function viewOrderInvoice($id){
        $orderDetails = Order::with('orders_products')->where('id',$id)->first()->toArray();
        $userDetails = User::where('id',$orderDetails['user_id'])->first()->toArray();
        return view('admin.orders.order_invoice')->with(compact('orderDetails','userDetails'));
    }
}