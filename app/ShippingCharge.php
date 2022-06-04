<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShippingCharge extends Model
{
    use HasFactory;
    public static function getShippingCharges($total_weight,$country)
    {
        $shippingDetails = ShippingCharge::where('country',$country)->first()->toArray();
        if($total_weight>0)
        {
            if($total_weight>0 && $total_weight<=500)
            {
                $shippingCharges = $shippingDetails['0_500g'];
            }
            elseif($total_weight>501 && $total_weight<=1000)
            {
                $shippingCharges = $shippingDetails['501_1000g'];
            }
            elseif($total_weight>1001 && $total_weight<=2000)
            {
                $shippingCharges = $shippingDetails['1001_2000g'];
            }
            elseif($total_weight>2001 && $total_weight<=5000)
            {
                $shippingCharges = $shippingDetails['2001_5000g'];
            }
            elseif($total_weight>5001)
            {
                $shippingCharges = $shippingDetails['above_5000g'];
            }
        }
        else
        {
            $shippingCharges = 0;
        }
        
        return $shippingCharges;
    }
}