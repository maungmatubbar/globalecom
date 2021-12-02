<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Brand;
use Session;
class BrandController extends Controller
{
    public function brands(){
        Session::put('page', 'brands');
        $brands = Brand::get();
        return view('admin.brands.brands')->with(compact('brands'));
    }
    public function updateBrandStatus(Request $request){
        if($request->ajax()){
            $data = $request->all();
            if ($data['status'] == 'Active') {
                $status = 0;
            } else {
                $status = 1;
            }
            Brand::where('id', $data['record_id'])->update([
                'status' => $status,
            ]);
            return response()->json(['status' => $status, 'record_id' => $data['record_id']]);
        }
    }
    public function addEditBrand(Request $request,$id=null){

        if($id==""){
            $title = "Add Brand";
            $brand = new Brand();
            $message = "Brand has been added successfully!";
        }else{
            $title = "Update Brand";
            $brand = Brand::find($id);
            $message = "Brand has been updated successfully!";
        }
        if($request->isMethod('post')){
            $rules = [
                'name'=>'required|regex:/^[\pL\s\-]+$/u'
            ];
            $customMessages = [
                'name.required' => 'Brand name is reuired',
                'name.regex' => 'Valid Brand name is reuired',
            ];
            $this->validate($request, $rules, $customMessages);
            //print_r($request->name);exit;
            $brand->name = $request->name;
            $brand->save();
            Session::flash('success_msg',$message);
            return redirect('admin/brands');
        }
       
        return view('admin.brands.add_edit_brand')->with(compact('title','brand'));
    }
    public function deleteBrand(Request $request,$id){
        if($request->ajax()){
            Brand::where('id',$id)->delete();
            return response()->json(['success_msg'=>'Brand has been deleted Successfully!']);
        }
    }
}