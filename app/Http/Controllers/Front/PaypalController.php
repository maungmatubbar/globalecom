<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Order;
use App\Cart;
use Session;
use Auth;
use App\Sms;
class PaypalController extends Controller
{
    public function paypal()
    {
         //Empty The User Cart
        if (Session::has("order_id")) {
            // Session::forget("couponAmount");
            // Session::forget("couponCode");
            $orderDetails = Order::where('id',Session::has('order_id'))->first()->toArray();
            $nameArr = explode(' ',$orderDetails['name']);
            //Cart::where("user_id", Auth::user()->id)->delete();
            return view("front.paypal.paypal")->with(compact('orderDetails','nameArr'));
        } 
        else
        {
            return redirect("/cart");
        }
    }
    public function success()
    {
         //Empty The User Cart
        if (Session::has("order_id")) {
            Cart::where("user_id", Auth::user()->id)->delete();
            return view("front.paypal.success");
        } 
        else
        {
            return redirect("/cart");
        }
    }
    public function fail()
    {
        return view("front.paypal.fail");
    }
    public function ipn(Request $request)
    {
        $data = $request->all();
        $data['payment_status'] = "Completed";
       
        if($data['payment_status'] == "Completed")
        {
            $order_id = Session::get('order_id');
            Order::where('id',$order_id)->update(['order_status'=>'Paid']);
            $message =
                    "Dear Customer,Your order" .
                    $order_id .
                    "has been successfully placed with Ecom Shop BD. We will intimate you once your order is shipped";
                $mobile = Auth::user()->mobile;
                //Sms::sendSms($message,$mobile);
                $orderDetails = Order::with("orders_products")
                    ->where("id", $order_id)
                    ->first()
                    ->toArray();
                //Reduce Product Stock Management code Start
                foreach($orderDetails as $orders)
                {
                    //Current Stock
                    $getProductStock = ProductsAttribute::where(['product_id'=>$item['product_id'],'size'=>$item['size']])->first()->toArray();
                    //Calculate Stock
                    $newStock = $getProductStock['stock'] - $item['quantity'];
                    //Update Stock
                    ProductsAttribute::where(['product_id'=>$item['product_id'],'size'=>$item['size']])->update(['stock'=>$newStock]);
                }
                //Reduce Product Stock Management code End
                //Send Email
                $email = Auth::user()->email;
                $messageData = [
                    "email" => $email,
                    "name" => Auth::user()->name,
                    "order_id" => $order_id,
                    "orderDetails" => $orderDetails,
                ];
                Mail::send("emails.order", $messageData, function (
                    $message
                ) use ($email) {
                    $message
                        ->to($email)
                        ->subject("Order Placed - EcomShopBD Cloth Store");
                });
        }
    }
}