<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;
use App\Section;
use App\Category;
use Session;
use Image;
class ProductsController extends Controller
{
    public function products(){
        Session::put('page','products');
        $products = Product::with(
            [
                'category'=>function($query){
                    $query->select('id','category_name');
                }
                ,'section'=>function($query){
                    $query->select('id','name');
                }
            ])->get();
        // $products = json_decode(json_encode($products));
        // echo "<pre>";
        // print_r($products);
        // exit;
       return view('admin.products.products')->with(compact('products'));
    }
    public function updateProductStatus(Request $request)
    {

        if ($request->ajax()) {
            $data = $request->all();
            if ($data['status'] == 'Active') {
                $status = 0;
            } else {
                $status = 1;
            }
            Product::where('id', $data['product_id'])->update([
                'status' => $status,
            ]);
            return response()->json(['status' => $status, 'product_id' => $data['product_id']]);
        }
    }
    public function deleteProduct(Request $request,$product_url){
        if ($request->ajax()) {
            $product_image = Product::select('main_image')->where('product_url',$product_url)->first();
            $product_video_name = Product::select('product_video')->where('product_url',$product_url)->first();
            $product_image_path = 'images/product_images/large/';
            if(file_exists($product_image_path.$product_image->main_image)){
                unlink($product_image_path.$product_image->main_image);
            }
            $product_image_path = 'images/product_images/medium/';
            if(file_exists($product_image_path.$product_image->main_image)){
                unlink($product_image_path.$product_image->main_image);
            }
            $product_image_path = 'images/product_images/small/';
            if(file_exists($product_image_path.$product_image->main_image)){
                unlink($product_image_path.$product_image->main_image);
            }
            $product_video_path = 'videos/product_videos/';
            if(file_exists($product_video_path.$product_video_name->product_video)){
                unlink($product_video_path.$product_video_name->product_video);
            }
            Product::where('product_url',$product_url)->delete();
            return response()->json(['product_url'=>$product_url,'success_msg'=>'Product Delete Successfully!']);
            //return redirect()->back();
        }

    }
    public function validation($request){
        $rules = [
            'category_id' => 'required',
            'product_name' => 'required|regex:/^[\pL\s\-]+$/u',
            'product_code' => 'required|regex:/^[\w-]*$/',
            'product_price' => 'required|numeric',
            'product_color' => 'required|regex:/^[\pL\s\-]+$/u',
            'main_image' => 'mimes:jpeg,jpg,png,gif|image|max:200000',
            'product_video' => 'mimes:mp4,mov,ogg | max:2000000',
        ];
        $customMessages = [
            'category_id.required'=>"Category field is required",
            'product_name.required' => 'Product name is reuired',
            'product_name.regex' => 'Valid Product name is reuired',
            'product_code.require' => 'Product code is reuired',
            'product_code.regex' => 'Valid Product code is reuired',
            'product_price.required' => 'Product price is reuired',
            'product_price.regex' => 'Valid Product price is reuired',
            'main_image.image' => 'Valid image is required',
            
        ];
        $this->validate($request, $rules, $customMessages);
    }
    public function imageUpload($request){
        if($request->hasFile('main_image')){
            $image_tmp = $request->file('main_image');
           if($image_tmp->isValid()){
               $image_name =$image_tmp->getClientOriginalName();
               $image_extension =$image_tmp->getClientOriginalExtension();
               $image_name = "productImage_".rand(111,99999).'.'.$image_extension;
               $large_image_path = "images/product_images/large/".$image_name;
               $medium_image_path = "images/product_images/medium/".$image_name;
               $small_image_path = "images/product_images/small/".$image_name;
               Image::make($image_tmp)->save($large_image_path);
               Image::make($image_tmp)->resize(520,600)->save($medium_image_path);
               Image::make($image_tmp)->resize(260,300)->save($small_image_path);
           }
        }else
        {
            $image_name ="";
        }
        return $image_name;
    }
    public function videoUpload($request){
        if($request->hasFile('product_video')){
            $video_tmp = $request->file('product_video');
            if($video_tmp->isValid()){
                $video_name = $video_tmp->getClientOriginalName();
                $video_extension = $video_tmp->getClientOriginalExtension();
                $video_name = "productVideo_".rand().'.'.$video_extension;
                $video_link_path = "videos/product_videos/";
                $video_tmp->move($video_link_path,$video_name);
            }
        }
        else
        {
            $video_name = "";
        }
        return $video_name;
    }
    public function saveProductInfo($request,$product,$image_name,$video_name){
        if($request->is_featured){
            $is_featured = "Yes";
        }else{
            $is_featured = "No";
        }
       
        if(empty($request->product_discount)){
            $request->product_discount=0;
        }
        if(empty($request->description)){
            $request->description="";
        }
        if(empty($request->product_weight)){
            $request->product_weight=0;
        }
        if(empty($request->wash_care)){
            $request->wash_care="";
        }
        if(empty($request->fabric)){
            $request->fabric="";
        }
        if(empty($request->pattern)){
            $request->pattern=" ";
        }
        if(empty($request->sleeve)){
            $request->sleeve="";
        }
        if(empty($request->fit)){
            $request->fit="";
        }
        if(empty($request->occasion)){
            $request->occasion="";
        }
        if(empty($request->meta_title)){
            $request->meta_title="";
        }
       if(empty($request->meta_description)){
        $request->meta_description="";
        }
        if(empty($request->meta_keywords)){
            $request->meta_keywords = "";
        }
        $categoryInfo = Category::find($request->category_id);
        $product->section_id = $categoryInfo->section_id;
        $product->category_id = $request->category_id;
        $product->product_name = $request->product_name;
        $product->product_url = str_slug($request->product_name."-".rand(11,999));
        $product->product_code = $request->product_code;
        $product->product_color = $request->product_color;
        $product->product_price = $request->product_price;
        $product->product_discount = $request->product_discount;
        $product->product_weight = $request->product_weight;
        $product->product_video = $video_name;
        $product->main_image = $image_name;
        $product->description = $request->description;
        $product->wash_care = $request->wash_care;
        $product->fabric = $request->fabric;
        $product->pattern = $request->pattern;
        $product->sleeve = $request->sleeve;
        $product->fit = $request->fit;
        $product->occasion = $request->occasion;
        $product->meta_title = $request->meta_title;
        $product->meta_description = $request->meta_description;
        $product->meta_keywords = $request->meta_keywords;
        $product->is_featured = $is_featured;
        $product->status = $request->status;
        $product->save();
    }
    public function addEditProduct(Request $request,$url=null){
        if($url==""){
            $title="Add Product";
            $product = new Product;

        }else{
            $title="Edit Product";
            $product_data = Product::where('product_url',$url)->first();
            $product_data = json_decode(json_encode($product_data));
            echo "<pre>";
            print_r($product_data);exit;
        }
        
        
        if($request->isMethod('post')){
          
            $this->validation($request);
           // echo"<pre>"; print_r($request->all());exit;
             //Product Image Upload
           $image_name = $this->imageUpload($request);
            //Upload Product video
          
            $video_name = $this->videoUpload($request);
            //Save product details in tables
            $this->saveProductInfo($request,$product,$image_name,$video_name);
            Session::flash('success_msg','Product info added successfully!');
            return redirect('/admin/products');
        }
        $fabricArray= array('Cotton','Polyester','Wool');
        $sleeveArray = array('Full Sleeve','Half Sleeve','Short Sleeve');
        $fitArray = array('Regular','Slim');
        $occasionArray=array('Casual','Formal');
        $patternArray = array('Checked','Plain','Printed','Self','Solid');
        $categories = Section::with('categories')->get();
        $categories = json_decode(json_encode($categories));
        return view('admin.products.add_edit_product')->with(compact('title','fabricArray','sleeveArray','fitArray','occasionArray','patternArray','categories'));
    }
}