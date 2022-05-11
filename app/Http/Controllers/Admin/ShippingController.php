<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\ShippingCharge;
use Session;
class ShippingController extends Controller
{
    public function viewShippingCharges(){
        Session::put('page','shipping');
        $shippingCharges = ShippingCharge::get()->toArray();
        // dd($shippingCharges);
        return view('admin.shipping.view_shipping_charges')->with(compact('shippingCharges'));
    }
    public function updateShippingStatus(Request $request){
        if($request->ajax()){
            $data = $request->all();
            if ($data['status'] == 'Active') {
                $status = 0;
            } else {
                $status = 1;
            }
            ShippingCharge::where('id', $data['record_id'])->update([
                'status' => $status,
            ]);
            return response()->json(['status' => $status, 'record_id' => $data['record_id']]);
        }
    }
}