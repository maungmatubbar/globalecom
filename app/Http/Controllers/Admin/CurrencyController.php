<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Currency;
use Session;
class CurrencyController extends Controller
{
    public function currencies()
    {
        Session::put('page','currencies');
        $currencies = Currency::get();
        return view('admin.currencies.currencies')->with(compact('currencies'));
    }
    public function updateCurrencyStatus(Request $request)
    {
        if($request->ajax())
        {
          if($request->status == 'Active')
          {
                $status = 0;
          }
          else
          {
                $status =1;
          }
          Currency::where('id',$request->record_id)->update(['status'=>$status]);
          return response()->json([ 'status' => $status,'record_id' => $request->record_id]);
        }
        
    }
    public function addEditCurrency(Request $request,$id=null)
    {
        if($id=='')
        {
            $title = 'Add Currency';
            $currency = new Currency();
            $message = 'Currency added successfully.';
        }
        else
        {
            $title = 'Edit Currency';
            $currency = Currency::find($id);
            $message = 'Currency updated successfully.';
        }
        if($request->isMethod('post'))
        {
            $request->validate(
                [
                    'currency_code' => 'required|regex:/^[\pL\s\-]+$/u',
                    'exchange_rate' => 'required|integer',
                ],
                [
                    'currency_code.required' => 'Currency code is required',
                    'currency_code.regex' => 'Valid currency code is required',
                    'exchange_rate.required' => 'Exchange rate is required',
                    'exchange_rate.integer' => 'Valid exchange rate is required',
                ]
            );
            $currency->currency_code = $request->currency_code;
            $currency->exchange_rate = $request->exchange_rate;
            $currency->save();
            Session::flash('success_msg',$message);
            return redirect('/admin/currencies');
        }
        return view('admin.currencies.addEditCurrency')->with(compact('title','currency'));
    }
    public function deleteCurrency(Request $request)
    {
       if($request->ajax()){
            Currency::where(['id'=>$request->attribute_id])->delete();
            return response()->json(['record_id' => $request->attribute_id,'success_msg' => 'Currency deleted successfully.']);
       }
    }
}