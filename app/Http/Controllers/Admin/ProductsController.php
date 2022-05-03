<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;
use App\Section;
use App\Category;
use App\ProductsAttribute;
use App\ProductsImage;
use App\Brand;
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
            ])->orderBy('id','Desc')->get();
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
            'brand_id' => 'required',
            'product_name' => 'required|regex:/^[\pL\s\-]+$/u',
            'product_code' => 'required|regex:/^[\w-]*$/',
            'product_price' => 'required|numeric',
            'product_color' => 'required|regex:/^[\pL\s\-]+$/u',
            'main_image' => 'mimes:jpeg,jpg,png,gif|image|max:200000',
            'product_video' => 'mimes:mp4,mov,ogg | max:2000000',
        ];
        $customMessages = [
            'category_id.required'=>"Category field is required",
            'brand_id.required'=>"Brand field is required",
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
               Image::make($image_tmp)->resize(320,320)->save($medium_image_path);
               Image::make($image_tmp)->resize(160,160)->save($small_image_path);
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
            $request->pattern="";
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
        $product->brand_id = $request->brand_id;
        $product->product_name = $request->product_name;
        $product->product_url = str_slug($request->product_name."-".rand(11,999));
        $product->product_code = $request->product_code;
        $product->product_color = $request->product_color;
        $product->product_price = $request->product_price;
        $product->product_discount = $request->product_discount;
        $product->product_weight = $request->product_weight;
        if(!empty($video_name)){
            $product->product_video = $video_name;
        }
        if(!empty($image_name)){
            $product->main_image = $image_name;
        }
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
        if(!empty($request->is_featured)){
            $product->is_featured = $request->is_featured;
        }else{
            $product->is_featured = "No";
        }
        $product->status = $request->status;
        $product->save();
    }
    public function addEditProduct(Request $request,$url=null){
        if($url==""){
            $title="Add Product";
            $product = new Product;
            $productdata = array();
            $message = "Product added successfully!";
        }else{
            $title="Edit Product";
            $product_data = Product::where('product_url',$url)->first();
            $productdata = json_decode(json_encode($product_data));
            $product = Product::find($productdata->id);
            $message = "Product updated successfully!";
        }
        
        
        if($request->isMethod('post')){
           //validation
            $this->validation($request);
             //Product Image Upload
           $image_name = $this->imageUpload($request);
            //Upload Product video
          
            $video_name = $this->videoUpload($request);
            //Save product details in tables
           // echo "<pre>";print_r($request->is_featured);exit;
            $this->saveProductInfo($request,$product,$image_name,$video_name);
            Session::flash('success_message',$message);
            return redirect('/admin/products');
        }
        /*$fabricArray= array('Cotton','Polyester','Wool');
        $sleeveArray = array('Full Sleeve','Half Sleeve','Short Sleeve');
        $fitArray = array('Regular','Slim');
        $occasionArray=array('Casual','Formal');
        $patternArray = array('Checked','Plain','Printed','Self','Solid');*/
        //product filters
        $productFilters = Product::productFilters();
        $fabricArray = $productFilters['fabricArray'];
        $sleeveArray = $productFilters['sleeveArray'];
        $fitArray = $productFilters['fitArray'];
        $occasionArray = $productFilters['occasionArray'];
        $patternArray = $productFilters['patternArray'];

        $categories = Section::with('categories')->get();
        $categories = json_decode(json_encode($categories));
        $brands = Brand::where('status',1)->get();
        $brands = json_decode(json_encode($brands));
        
        return view('admin.products.add_edit_product')->with(compact('title','fabricArray','sleeveArray','fitArray','occasionArray','patternArray','categories','productdata','brands'));
    }
    public function deleteProductImage(Request $request){
        if ($request->ajax()) {
            $product_image = Product::select('main_image')->where('id',$request->product_id)->first();
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
            return response()->json(['porduct_id'=>$request->porduct_id]);
        }
    }
    public function deleteProductVideo(Request $request,$product_id){
        if ($request->ajax()) {
            $product_video = Product::select('product_video')->where('id',$product_id)->first();
            $product_video_path = 'videos/product_videos/';
            if(file_exists($product_video_path.$product_video->product_video)){
                unlink($product_video_path.$product_video->product_video);
                Product::where('id',$product_id)->update(array("product_video"=>""));
            }
           
            return response()->json(['message'=>'Video has been delete Successfully!']);
        }
    }

    //Add Attributes Functions

    public function addAttributes(Request $request,$id){
        
        if($request->isMethod('post')){
            $data = $request->all();
            foreach($data['sku'] as $key => $value ){
                //SKU already exists check
                $attrCountSKU = ProductsAttribute::where(['sku'=>$value])->count(); 
                if($attrCountSKU){
                   $message = 'SKU already exists, Please add another SKU!';
                   session::flash('error_message',$message);
                    return redirect()->back();
                }
                $attrCountSize = ProductsAttribute::where(['product_id'=>$id,'size'=>$data['size'][$key]])->count(); 
                if($attrCountSize){
                   $message = 'Size already exists, Please add another size!';
                   session::flash('error_message',$message);
                    return redirect()->back();
                }
                if(!empty($value)){
                    $attribute = new ProductsAttribute();
                    $attribute->product_id = $id;
                    $attribute->sku = $value;
                    $attribute->size = $data['size'][$key];
                    $attribute->price = $data['price'][$key];
                    $attribute->stock = $data['stock'][$key];
                    $attribute->status = 1;
                    $attribute->save();
                }
            }
            $message = 'Product Attributes has been added successfully!';
            session::flash('success_message',$message);
             return redirect()->back();
        }
        $productdata = Product::select('id','product_name','product_code','product_color','product_price','main_image')->with('attributes')->find($id);
        $productdata=json_decode(json_encode($productdata));
        //echo "<pre>";print_r($productdata);die;
        $title = "Product Attributes";
        return view('admin.products.add_attributes')->with(compact('productdata','title'));
    }
    public function editAttributes(Request $request,$id){
        $data = $request->all();
        //echo "<pre>";print_r($data['attrId']);die;
        if($request->isMethod('post')){
            foreach( $data['attrId'] as $key => $attr ){
                if(!empty($attr)){
                    ProductsAttribute::where('id',$data['attrId'][$key])->update([
                        'price'=>$data['price'][$key],
                        'stock'=>$data['stock'][$key]
                    ]);
                }
            }
           
        }
        $message = 'Product Attributes has been updated successfully!';
        session::flash('success_message',$message);
        return redirect()->back();
    }
    public function updateProductAttributeStatus(Request $request){
        if($request->ajax()){
            $data = $request->all();
            if ($data['status'] == 'Active') {
                $status = 0;
            } else {
                $status = 1;
            }
            ProductsAttribute::where('id', $data['record_id'])->update([
                'status' => $status,
            ]);
            return response()->json(['status' => $status, 'record_id' => $data['record_id']]);
        }
    }
    public function deleteProductAttribute(Request $request,$id){
        if($request->ajax()){
            ProductsAttribute::where('id',$id)->delete();
            return response()->json(['success_msg'=>'Product Attribute Delete Successfully!']);
        }
    }

    //Product Images
    public function addImages(Request $request,$id){
        if($request->isMethod('post')){
            $request->validate([
                'images' => 'required',
                'images.*'=>'image|mimes:png,jpg,jpeg,gif'
            ]);
           if($request->hasFile('images')){
                $images = $request->file('images');
                foreach($images as $key => $image){
                    $productImage = new ProductsImage();
                    $image_tmp = Image::make($image);
                    $extension = $image->getClientOriginalExtension();
                    $imageName = "productImage".rand(111,9999).time().".".$extension;
                    //Using path
                    $large_image_path = "images/product_images/large/".$imageName;
                    $medium_image_path = "images/product_images/medium/".$imageName;
                    $small_image_path = "images/product_images/small/".$imageName;
                    Image::make($image_tmp)->resize(1040,1200)->save($large_image_path);
                    Image::make($image_tmp)->resize(520,600)->save($medium_image_path);
                    Image::make($image_tmp)->resize(260,300)->save($small_image_path);
                    $productImage->image = $imageName;
                    $productImage->product_id = $id;
                    $productImage->status = 1;
                    $productImage->save();
                }
               
           }
           $message = 'Product images has been added successfully!';
           session::flash('success_message',$message);
           return redirect()->back();
            
        }
        $title = "Product Images";
        $productdata = Product::select('id','product_name','product_code','product_color','main_image')->with('images')->find($id);
        $productdata = json_decode(json_encode($productdata));
        return view('admin.products.add_images')->with(compact('title','productdata'));
    }
    public function updateProductImageStatus(Request $request){
        if($request->ajax()){
            $data = $request->all();
            if ($data['status'] == 'Active') {
                $status = 0;
            } else {
                $status = 1;
            }
            ProductsImage::where('id', $data['record_id'])->update([
                'status' => $status,
            ]);
            return response()->json(['status' => $status, 'record_id' => $data['record_id']]);
        }
    }
    public function deleteImage(Request $request,$id){
        if($request->ajax()){
            $product_image = ProductsImage::select('image')->where('id',$id)->first();
            $product_image_path = 'images/product_images/large/';
            if(file_exists($product_image_path.$product_image->image)){
                unlink($product_image_path.$product_image->image);
            }
            $product_image_path = 'images/product_images/medium/';
            if(file_exists($product_image_path.$product_image->main_image)){
                unlink($product_image_path.$product_image->image);
            }
            $product_image_path = 'images/product_images/small/';
            if(file_exists($product_image_path.$product_image->image)){
                unlink($product_image_path.$product_image->image);
            }
            ProductsImage::where('id',$id)->delete();
            return response()->json(['success_msg'=>'Product Image Delete Successfully!']);
        }
    }
}