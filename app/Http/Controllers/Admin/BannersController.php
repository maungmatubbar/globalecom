<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Banner;
use Session;
use Image;
class BannersController extends Controller
{
    public function banners(){
        Session::put('page','banners');
        $banners = Banner::get();
        return view('admin.banners.banners')->with(compact('banners'));
    }
    public function updateBannerStatus(Request $request){
        if($request->ajax()){
            $data = $request->all();
            if ($data['status'] == 'Active') {
                $status = 0;
            } else {
                $status = 1;
            }
            Banner::where('id', $data['record_id'])->update([
                'status' => $status,
            ]);
            return response()->json(['status' => $status, 'record_id' => $data['record_id']]);
        }
    }
    public function deleteBanner(Request $request){
        if ($request->ajax()) {
            $banner_image = Banner::where('id',$request->id)->first();
            $banner_image_path = 'images/banner_images/';
            if(file_exists($banner_image_path.$banner_image->image)){
                unlink($banner_image_path.$banner_image->image);
            }
            Banner::where('id',$request->id)->delete();
            return response()->json(['id'=>$request->id,'success_msg'=>'Product Delete Successfully!']);
            //return redirect()->back();
        }
    }
    public function addEditBanner(Request $request,$id=null)
    {
        if($id==""){
            $title = "Add Banner Image";
            $bannerdata = new Banner;
            $message = "Banner added successfully!";
        }
        else{
            $title = "Edit Banner";
            $bannerdata = Banner::find($id);
            $message = "Banner updateds successfully!";
        }
        if($request->isMethod('post')){
            $rules = [
                'image'=>'mimes:jpeg,jpg,png,gif|image|max:20000',
                'title'=>'required|regex:/^[\pL\s\-]+$/u',
            ];
            $customMessage = [
                'image.required'=>'Image is required',
                'image.mimes'=>'Valid image is required.JPG,JPEG,PNG',
                'image.image'=>'Valid image is required',
                'title.required'=>'Title is required',
                'title.regex'=>'Valid title is required'
            ];
            $this->validate($request,$rules,$customMessage);
            if($request->hasFile('image')){
                if($title == 'Edit Banner'){
                    $banner_image = Banner::where('id',$id)->first();
                    $banner_image_path = 'images/banner_images/';
                    if(file_exists($banner_image_path.$banner_image->image)){
                        unlink($banner_image_path.$banner_image->image);
                    }
                }
                $image_tmp = $request->file('image');
               if($image_tmp->isValid()){
                   $image_extension =$image_tmp->getClientOriginalExtension();
                   $image_name = 'Banner'.'-'.rand(111,999).'.'.$image_extension;
                   $image_path = "images/banner_images/".$image_name;
                   Image::make($image_tmp)->resize(1170,480)->save($image_path);
               }
            }
            else{
                $image_name = "";
            }
            if($request->link==""){
                $bannerdata->link="";
            }
            if($request->alt==""){
                $bannerdata->alt="";
            }
            if(!empty($image_name)){
                $bannerdata->image = $image_name;
            }
            $bannerdata->title = $request->title;
            $bannerdata->link = $request->link;
            $bannerdata->alt = $request->alt;
            $bannerdata->status = $request->status;
            $bannerdata->save();
            Session::flash('success_msg',$message);
            return redirect('/admin/banners');
        }
        
        return view('admin.banners.add_edit_banner')->with(compact('title','bannerdata'));
        
    }
}