<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Coupon;
use App\Section;
use App\User;
use Session;
class CouponsController extends Controller
{
    public function coupons(){
        Session::put('page','coupons');
        $coupons = Coupon::get();
        $coupons = json_decode(json_encode($coupons));
        return view('admin.coupons.coupons')->with(compact('coupons'));
    }
    public function updateCouponStatus(Request $request){
        if($request->ajax()){
            $data = $request->all();
            if ($data['status'] == 'Active') {
                $status = 0;
            } else {
                $status = 1;
            }
            Coupon::where('id', $data['record_id'])->update([
                'status' => $status,
            ]);
            return response()->json(['status' => $status, 'record_id' => $data['record_id']]);
        }
    }
    public function couponValidation($request){
        
        $rules = [
            'coupon_option' => 'required',
             'coupon_type' =>'required',
             'amount_type' =>'required',
             'amount' =>'required|numeric',
             'categories' =>'required',
             'expiry_date' =>'required',
         ];
         $customMessage = [
             'coupon_option.required'=>'Coupon option is required',
             'coupon_type.required'=>'Coupon type is required',
             'amount_type.required'=>'Amount type is required',
             'amount.required'=>'Amount is required',
             'amount.numeric'=>'Valid amount is required',
             'categories.required'=>'Categories is required',
             'expiry_date.required'=>'Expiry date is required'
         ];
         $this->validate($request,$rules,$customMessage);
    }
    public function addEditCoupon(Request $request,$id=null){
        if($id == ""){
            $title = "Add Coupon";
            $coupon = new Coupon;
            $selCats = array();
            $selUsers = array();
            $message = "Coupon added successfully!";
        }
        else
        {
            $title ="Edit Coupon";
            $coupon = Coupon::find($id);
            $selCats = explode(',',$coupon['categories']);
            $selUsers = explode(',',$coupon['users']);
            $message = "Coupon updated successfully!";
        }
        if($request->isMethod('post')){
           $data = $request->all();
           //Coupon Validation
           $this->couponValidation($request);
           
           if(isset($data['users'])){
            $users= implode(',',$data['users']);
           }
           else
           {
            $users = "";
           }
           if(isset($data['categories'])){
            $categories= implode(',',$data['categories']);
           }
           if(isset($data['coupon_code'])!=""){
                $coupon_code = $data['coupon_code'];
           }
           else
           {
                if($data['coupon_option'] == "Automatic"){
                    $coupon_code = str_random(8);
                }
                else
                {
                    $coupon_code = $data['coupon_code'];
                }
           }
        
           $coupon->coupon_option = $data['coupon_option'];
           $coupon->coupon_code = $coupon_code;
           $coupon->categories = $categories;
           $coupon->users = $users;
           $coupon->coupon_type = $data['coupon_type'];
           $coupon->amount_type = $data['amount_type'];
           $coupon->amount = $data['amount'];
           $coupon->expiry_date = $data['expiry_date'];
           $coupon->status = 1;
           $coupon->save();
           Session::flash('success_msg',$message);
           return redirect('admin/coupons');
        }
        // Section with categories and subcategories 
        $categories = Section::with('categories')->get();
        $categories = json_decode(json_encode($categories));
        //Get User email
        $users = User::select('email')->where('status',1)->get();
        $users = json_decode(json_encode($users));
        return view('admin.coupons.add_edit_coupon')->with(compact('title','coupon','categories','users','selCats','selUsers'));
    }
    public function deleteCoupon(Request $request){
        if ($request->ajax()) {
            Coupon::where('id',$request->id)->delete();
            return response()->json(['id'=>$request->id,'success_msg'=>'Coupon Deleted Successfully!']);
            //return redirect()->back();
        }
    }
}