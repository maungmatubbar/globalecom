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
use App\Product;
use App\ExchangeRequest;
use App\ProductsAttribute;

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
    //order Return and exchange
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
    public function orderReturnExchange(Request $request)
    {
        if($request->isMethod('post'))
        {
           // return $request->all();
            $countUser = Order::where(['id'=>$request->order_id,'user_id'=>Auth::user()->id])->count();
            if($countUser>0){
                if($request->return_exchange == 'Return')
                {
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
                    Session::flash('success_message',$message);
                    return redirect()->back();
                }
                else if($request->return_exchange == 'Exchange')
                {
                    $productArr  = explode('-',$request->product_info);
                    $productCode = $productArr[0];
                    $productSize = $productArr[1];
                    //Update Items Status OrdersProducts Table
                    OrdersProduct::where([
                        'user_id'       =>Auth::user()->id,
                        'order_id'      =>$request->order_id,
                        'product_code'  => $productCode,
                        'product_size'  =>$productSize
                        ])->update(['item_status'=>'Exchange Initiated']);
                    //Add Exchange Request
                    $exchangeRequest = new ExchangeRequest;
                    $exchangeRequest->order_id = $request->order_id;
                    $exchangeRequest->user_id = Auth::user()->id;
                    $exchangeRequest->product_size = $productSize;
                    $exchangeRequest->product_code = $productCode;
                    $exchangeRequest->exchange_reason = $request->reason;
                    $exchangeRequest->exchange_status = 'Pending';
                    $exchangeRequest->required_size = $request->required_size;
                    $exchangeRequest->comment = $request->comment;
                    $exchangeRequest->save();
                    $message = "Exchange request has been placed for the Ordered product!";
                    Session::flash('success_message',$message);
                    return redirect()->back();
                }
                else
                {
                    $message = "Your order request return/exchange is not valid";
                    Session::flash('success_message',$message);
                    return redirect('/orders');
                }


            }
            else
            {
                $message = "Your order request return/exchange is not valid";
                Session::flash('success_message',$message);
                return redirect('/orders');
            }
        }
        
    }
    public function retunOrder()
    {
        
    }
    public function getProductSizes(Request $request)
    {
        if($request->ajax())
        {
            
            $productArr = explode('-',$request->productInfo);
            $product_code = $productArr[0];
            $product_size = $productArr[1];
            $getProductId = Product::select('id')->where('product_code',$product_code)->first();
            $productSizes = ProductsAttribute::select('size')->where('product_id',$getProductId->id)->where('size','!=',$product_size)->where('stock','>',0)->get();
            $productSizes = json_decode(json_encode($productSizes));
           // echo "<pre>"; print_r($productSizes);die;
            $appendSizes = '<option value=""> Select Required Size </option>';
            foreach($productSizes as $size)
            {
                $appendSizes .= '<option value="'.$size->size.'">'.$size->size.'</option>';
            }
            return $appendSizes;
        }
    }   
}