<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\CmsPage;
use Session;
class CmsController extends Controller
{
    public function cmsPages()
    {
        Session::put('page','cms-pages');
        $cmsPages = CmsPage::get();
        return view('admin.pages.cms_pages')->with(compact('cmsPages'));
    }
    public function updateCmsPageStatus(Request $request)
    {
        if($request->ajax())
        {
            $data = $request->all();
            if ($data['status'] == 'Active') {
                $status = 0;
            } else {
                $status = 1;
            }
            CmsPage::where('id', $data['record_id'])->update(['status' => $status,]);
            return response()->json(['status' => $status, 'record_id' => $data['record_id']]);
        }
    }
    public function validation($request)
    {
        $rules = [
            'title'=>'required|regex:/^[\pL\s\-]+$/u',
            'url'=>'required',
            'description'=>'required'
        ];
        $customMessages = [
            'title.required' => 'Title is reuired',
            'title.regex' => 'Valid Title name is reuired',
            'url.required' => 'URL is reuired',
            'description.required' => 'Description is reuired',
        ];
        $this->validate($request, $rules, $customMessages);
    }
    public function addEditCmsPage(Request $request,$id=null)
    {
        if($id==null)
        {
            $title ="Add CMS Page";
           $cmspage = new CmsPage();
            $message = "CMS Page added successfully.";
        }
        else
        {
           
            $title ="Edit CMS Page";
            $cmspage = CmsPage::find($id);
            $message = "CMS Page updated successfully.";

        }
        if($request->isMethod('post'))
        {
            $this->validation($request);
            $cmspage->title = $request->title;
            $cmspage->url = $request->url;
            $cmspage->description = $request->description;
            $cmspage->meta_title = $request->meta_title;
            $cmspage->meta_description = $request->meta_description;
            $cmspage->meta_keywords = $request->meta_keywords; 
            $cmspage->save();
            Session::flash('success_msg',$message);
            return redirect('/admin/cms-pages');
        }
        return view('admin.pages.add_edit_cmspage')->with(compact('title','cmspage'));
    }
   
}