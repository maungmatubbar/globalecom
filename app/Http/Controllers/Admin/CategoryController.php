<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use App\Section;
use Illuminate\Http\Request;
use Session;
use Image;
class CategoryController extends Controller
{
    public function categories()
    {
        Session::put('page', 'categories');
        $categories = Category::with(['section','parentcategory'])->get();
        $categories = json_decode(json_encode($categories));
        // echo '<pre>';
        // print_r($categories);
        // exit;
        return view('admin.categories.categories')->with(compact('categories'));
    }
    public function updateCategoryStatus(Request $request)
    {

        if ($request->ajax()) {
            $data = $request->all();
            if ($data['status'] == 'Active') {
                $status = 0;
            } else {
                $status = 1;
            }
            Category::where('id', $data['category_id'])->update([
                'status' => $status,
            ]);
            
            return response()->json(['status' => $status, 'category_id' => $data['category_id']]);
        }
    }
    //Add edit Categories functionality
    //validation
    public function validation($request){
        $rules = [
            'category_name' => 'required|regex:/^[\pL\s\-]+$/u',
            'section_id' => 'required',
            'category_image' => 'mimes:jpeg,jpg,png,gif|image|max:20000'
        ];
        $customMessages = [
            'category_name.required' => 'Category name is reuired',
            'category_name.regex' => 'Valid Category name is reuired',
            'section_id.required' => 'Section Name is reuired',
            'category_image.image' => 'Valid image is required'
        ];
        $this->validate($request, $rules, $customMessages);
    }
    //Save Category Image
    public function categoryImageSave($request){
        if ($request->hasFile('category_image')) {
            $image_temp = $request->file('category_image');
            if ($image_temp->isValid()) {
                $extension = $image_temp->getClientOriginalExtension();
                $imageName = rand(111, 9999) . '.' . $extension;
                $imagePath = 'images/category_images/' . $imageName;
                Image::make($image_temp)->resize(300, 400)->save($imagePath);
                return $imageName;
            }
        }else{
            return $imageName="";
        }
    }
    //Category save
    public function categoryInfoSave($category,$data,$imageName){
        if(empty($data['category_discount'])){
            $data['category_discount']=0;
        }
        if(empty($data['description'])){
            $data['description']="";
        }
        if(empty($data['meta_title'])){
            $data['meta_title']="";
        }
       if(empty($data['meta_description'])){
            $data['meta_description']="";
        }
        if(empty($data['meta_keywords'])){
            $data['meta_keywords']="";
        }
        
        $category->parent_id = $data['parent_id'];
        $category->category_name = $data['category_name'];
        if(!empty($imageName)){
            $category->category_image = $imageName;
        }
        $category->category_discount = $data['category_discount'];
        $category->section_id = $data['section_id'];
        $category->description = $data['description'];
        if(!empty($data['section_id'])){
            $section = Section::find($data['section_id']);
            $category->url = str_slug($data['category_name'].'-'.$section->name);
        }
        
        $category->meta_title = $data['meta_title'];
        $category->meta_description = $data['meta_description'];
        $category->meta_keywords = $data['meta_keywords'];
        $category->status = $data['status'];
        $category->save();
    }
    //Category save all 
    public function addEditCategory(Request $request, $url = null)
    {
        if ($url == "") {
            //For add Category
            $title = "Add Category";
            $category = new Category();
            $categorydata = array();
            $getCategories = array();
            $message = 'Save category successfully!';
        } else {
            //For Edit Category
            $title = "Edit Category";
            $categorydata = Category::where('url',$url)->first();
            $categorydata = json_decode(json_encode($categorydata));
            $getCategories = Category::with('subcategories')->where(['parent_id'=>0,'section_id'=>$categorydata->section_id])->get();
            $getCategories = json_decode(json_encode($getCategories));
            $category = Category::find($categorydata->id);
            $message = 'Update category successfully!';
        }//video using url replace id
      
        if ($request->isMethod('post')) {
            $data = $request->all();
            $this->validation($request);
            $imageName=$this->categoryImageSave($request);
            $this->categoryInfoSave($category,$data,$imageName);
            Session::flash('success_msg',$message);
            return redirect('admin/categories');
        }
        $sections = Section::get();
        return view('admin.categories.add_edit_category')->with(compact('title', 'sections','categorydata','getCategories'));
    }

    //Appand Categories Level
    public function appandCategoriesLevel(Request $request){
        if($request->ajax()){
            $data=$request->all();
            $getCategories = Category::with('subcategories')->where(['section_id'=>$data['section_id'],'parent_id'=>0,'status'=>1])->get();
            $getCategories = json_decode(json_encode($getCategories));
           return view('admin.categories.appand_categories_level',)->with(compact('getCategories'));

        }
    }
    public function deleteCategoryImage(Request $request){
        if ($request->ajax()) {
            $data = $request->all();
            $categoryImage = Category::select('category_image')->where('id', $data['category_id'])->first();
            $category_image_path = 'images/category_images/';
            if(file_exists($category_image_path.$categoryImage->category_image)){
                unlink($category_image_path.$categoryImage->category_image);
                Category::where('id',$data['category_id'])->update(['category_image'=>'']);
            }
            return response()->json(['category_id' => $data['category_id']]);
        } 
    }
    public function deleteCategory($url){
        Category::where('url',$url)->delete();
        Session::flash('success_msg','Category Delete Successfully!');
        return redirect()->back();

    }
}