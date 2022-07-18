<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    public function orders_products(){
        return $this->hasMany('App\OrdersProduct','order_id');
    }
    public static function getOrderStatus($order_id)
    {
        $getOrderStatus = Order::select('order_status')->where('id',$order_id)->first();
        return $getOrderStatus->order_status;
    }
}