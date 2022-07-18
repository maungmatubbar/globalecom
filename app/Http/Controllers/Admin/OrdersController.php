<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Order;
use App\User;
use App\OrderStatus;
use App\OrdersLog;
use Dompdf\Dompdf;
use Carbon\Carbon;
use Session;
use Auth;
use App\AdminsRole;
class OrdersController extends Controller
{
    public function orders(){
        Session::put('page','orders');
         //Admin Role And Permission
         $orderModuleCount = AdminsRole::where(['admin_id'=>Auth::guard('admin')->user()->id,'module'=>'orders'])->count();
         if(Auth::guard('admin')->user()->type == 'superadmin')
         {
            $orderModule['view_access'] = 1;
            $orderModule['edit_access'] = 1;
            $orderModule['full_access'] = 1;
          
         }
         else if($orderModuleCount==0)
         {
             $message = 'This feature is restricted for you.';
             Session::flash('error_message',$message);
             return redirect('/admin/dashboard');
         }
         else
         {
     
             $orderModule = AdminsRole::where(['admin_id'=>Auth::guard('admin')->user()->id,'module'=>'orders'])->first();
         }
         //End Admin Role
        $orders = Order::with('orders_products')->orderBy('id','Desc')->get()->toArray();
        return view('admin.orders.orders')->with(compact('orders','orderModule'));
    }
    public function orderDetails($id){
        $orderDetails = Order::with('orders_products')->where('id',$id)->first()->toArray();
        $userDetails = User::where('id',$orderDetails['user_id'])->first()->toArray();
        $orderStatuses = OrderStatus::get()->toArray();
        $orderLogs = OrdersLog::where('order_id',$id)->orderBy('id','Desc')->limit(3)->get()->toArray();
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
            $log->reason = '';
            $log->updated_by = '';
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
    public function printPdfInvoice($id){
        
        $orderDetails = Order::with('orders_products')->where('id',$id)->first()->toArray();
        $userDetails = User::where('id',$orderDetails['user_id'])->first()->toArray();
        $dompdf = new Dompdf();
        $output = '<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Invoice</title>
        <style>
            @font-face {
              font-family: SourceSansPro;
              src: url(SourceSansPro-Regular.ttf);
            }

            .clearfix:after {
              content: "";
              display: table;
              clear: both;
            }

            a {
              color: #0087C3;
              text-decoration: none;
            }

            body {
              position: relative;
              width: 21cm;  
              height: 29.7cm; 
              margin: 0 auto; 
              color: #555555;
              background: #FFFFFF; 
              font-family: Arial, sans-serif; 
              font-size: 14px; 
              font-family: SourceSansPro;
            }

            header {
              padding: 10px 0;
              margin-bottom: 20px;
              border-bottom: 1px solid #AAAAAA;
            }

            #logo {
              float: left;
              margin-top: 8px;
            }

            #logo img {
              height: 70px;
            }

            #company {
              float: right;
              text-align: right;
            }


            #details {
              margin-bottom: 50px;
            }

            #client {
              padding-left: 6px;
              border-left: 6px solid #0087C3;
              float: left;
            }

            #client .to {
              color: #777777;
            }

            h2.name {
              font-size: 1.4em;
              font-weight: normal;
              margin: 0;
            }

            #invoice {
              float: right;
              text-align: right;
            }

            #invoice h1 {
              color: #0087C3;
              font-size: 2.4em;
              line-height: 1em;
              font-weight: normal;
              margin: 0  0 10px 0;
            }

            #invoice .date {
              font-size: 1.1em;
              color: #777777;
            }

            table {
              width: 100%;
              border-collapse: collapse;
              border-spacing: 0;
              margin-bottom: 20px;
            }

            table th,
            table td {
              padding: 20px;
              background: #EEEEEE;
              text-align: center;
              border-bottom: 1px solid #FFFFFF;
            }

            table th {
              white-space: nowrap;        
              font-weight: normal;
            }

            table td {
              text-align: right;
            }

            table td h3{
              color: #57B223;
              font-size: 1.2em;
              font-weight: normal;
              margin: 0 0 0.2em 0;
            }

            table .no {
              color: #FFFFFF;
              font-size: 1.6em;
              background: #57B223;
            }

            table .desc {
              text-align: left;
            }

            table .unit {
              background: #DDDDDD;
            }

            table .qty {
            }

            table .total {
              background: #57B223;
              color: #FFFFFF;
            }

            table td.unit,
            table td.qty,
            table td.total {
              font-size: 1.2em;
            }

            table tbody tr:last-child td {
              border: none;
            }

            table tfoot td {
              padding: 10px 20px;
              background: #FFFFFF;
              border-bottom: none;
              font-size: 1.2em;
              white-space: nowrap; 
              border-top: 1px solid #AAAAAA; 
            }

            table tfoot tr:first-child td {
              border-top: none; 
            }

            table tfoot tr:last-child td {
              color: #57B223;
              font-size: 1.4em;
              border-top: 1px solid #57B223; 

            }

            table tfoot tr td:first-child {
              border: none;
            }

            #thanks{
              font-size: 2em;
              margin-bottom: 50px;
            }

            #notices{
              padding-left: 6px;
              border-left: 6px solid #0087C3;  
            }

            #notices .notice {
              font-size: 1.2em;
            }

            footer {
              color: #777777;
              width: 100%;
              height: 30px;
              position: absolute;
              bottom: 0;
              border-top: 1px solid #AAAAAA;
              padding: 8px 0;
              text-align: center;
            }
        </style>
    </head>
    <body>
        <header class="clearfix">
            <div id="logo"></div>
            <div id="company">
                <h2 class="name">ECOM Shop BD</h2>
                <div>Dhaka,Gulshan-1212 </div>
                <div>(602) 519-0450</div>
                <div><a href="mailto:company@example.com">ecomshopbd@shop.com</a></div>
            </div>
        </header>
        <main>
            <div id="details" class="clearfix">
                <div id="client">
                    <div class="to">INVOICE TO:</div>
                    <h2 class="name">'.$orderDetails['name'].'</h2>
                    <div class="address">'.$orderDetails['address'].', '.$orderDetails['city'].', '.$orderDetails['state'].'('.$orderDetails['pincode'].')
                    </div>
                    <div class="address">'.$orderDetails['country'].'</div>
                    <div class="email">
                        <a href="mailto:'.$orderDetails['email'].'">'.$orderDetails['email'].'</a>
                    </div>
                </div>
                <div id="invoice">
                    <h1>ORDER ID #'.$orderDetails['id'].'</h1>
                    <div class="date">ORDER DATE: '.date("F j, Y",strtotime($orderDetails['created_at'])).'</div>
                    <div class="date">Grand Total: '.$orderDetails['grand_total'].'</div>
                    <div class="date">Order Status: '.$orderDetails['order_status'].'</div>
                    <div class="date">Payment Method: '.$orderDetails['payment_method'].'</div>
                </div>
            </div>
            <table border="0" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th class="desc">PRODUCT CODE</th>
                        <th class="desc">SIZE</th>
                        <th class="desc">COLOR</th>
                        <th class="unit">PRICE</th>
                        <th class="qty">QUANTITY</th>
                        <th class="total">TOTALS</th>
                    </tr>
                </thead>
                <tbody>';
                    $subTotal = 0;
                    foreach($orderDetails['orders_products'] as $product){
                        $output .='<tr>
                            <td class="desc">'.$product['product_code'].'</td>
                            <td class="desc">'.$product['product_size'].'</td>
                            <td class="desc">'.$product['product_color'].'</td>
                            <td class="desc">BDT '.$product['product_price'].'</td>
                            <td class="qty">'.$product['product_qty'].'</td>
                            <td class="total">BDT '.$product['product_price']*$product['product_qty'].'</td>
                        </tr> ';
                        $subTotal = $subTotal +$product['product_price']*$product['product_qty'];
                    }
                    $output .='
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td colspan="2">SUBTOTAL</td>
                        <td>BDT '. $subTotal.'</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td colspan="2">Shipping Charges</td>
                        <td>BDT '.round($orderDetails['shipping_charges']).'</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td colspan="2">Coupon Discount</td>';
                        if($orderDetails['coupon_amount']>0){
                            $output .= '<td>BDT '.round($orderDetails['coupon_amount']).'</td>';
                        }
                        else
                        {
                            $output .= '<td>BDT 0</td>';
                        }   
                        $output .='
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td colspan="2">GRAND TOTAL</td>
                        <td>BDT '.round($orderDetails['grand_total']).'</td>
                    </tr>
                </tfoot>
            </table>
            <div id="thanks">Thank you!</div>
        </main>
        <footer>
        </footer>
    </body>
</html>';
        $dompdf->loadHtml($output);

        // (Optional) Setup the paper size and orientation
        $dompdf->setPaper('A4', 'landscape');

        // Render the HTML as PDF
        $dompdf->render();
        // Output the generated PDF to Browse
        $dompdf->stream();
    }
    public function viewOrdersCharts()
    {
      $currentMonthOrders = Order::whereYear('created_at',Carbon::now()->year)->whereMonth('created_at',Carbon::now()->month)->count();
      $lastMonthOrders = Order::whereYear('created_at',Carbon::now()->year)->whereMonth('created_at',Carbon::now()->subMonth(1))->count();
      $lastTwoMonthOrders= Order::whereYear('created_at',Carbon::now()->year)->whereMonth('created_at',Carbon::now()->subMonth(2))->count();
      $lastThreeMonthOrders= Order::whereYear('created_at',Carbon::now()->year)->whereMonth('created_at',Carbon::now()->subMonth(3))->count();
      $ordersCount = [$currentMonthOrders,$lastMonthOrders,$lastTwoMonthOrders,$lastThreeMonthOrders];
      return view('admin.orders.view_orders_charts')->with(compact('ordersCount'));
    }
}