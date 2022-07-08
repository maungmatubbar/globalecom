<?php

namespace App\Http\Controllers\Front;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\CmsPage;
use Session;
use Validator;
class CmsController extends Controller
{
    public function cmsPage()
    {                       
        //Also usable use url()->current();
       $currentRoute =  Route::getFacadeRoot()->current()->uri();
       $cmsRoutes = CmsPage::where('status',1)->get()->pluck('url')->toArray();
       if(in_array($currentRoute,$cmsRoutes))
       {
            $cmsPageDetails = CmsPage::where('url',$currentRoute)->first()->toArray();
            return view('front.pages.cms_page')->with(compact('cmsPageDetails'));
       }
       else
       {
            abort(404);
       }
   
    }
    public function contact(Request $request)
    {
          if($request->isMethod('post'))
          {
               $rules = [
                    'name'    => 'required',
                    'email'   => 'required|email',
                    'subject' => 'required',
                    'message' => 'required',
               ];
               $customMessages = [
                    'name.required'    => 'Name is required',
                    'email.required'   => 'Email is required',
                    'email.email'      => 'Valid email is required',
                    'subject.required' => 'Subject is required',
                    'message.required' => 'Message is required',
               ];
               $validator = Validator::make($request->all(),$rules,$customMessages);
               if($validator->fails())
               {
                    return redirect()->back()->withErrors($validator)->withInput();
               }
               $email = 'superadmin12345@yopmail.com';
               $messageData = [
                    'name'    => $request->name,
                    'email'   => $request->email,
                    'subject' => $request->subject,
                    'comment' => $request->message,
               ];

               Mail::send('emails.enquiry',$messageData,function($message)use($email){
                    $message->to($email)->subject('Enquiry For E-Commerce website.');
               });
               $message = 'Thanks for your enquiry, We will get back to you soon.';
               Session::flash('success_message',$message);
               return redirect()->back();

          }
        return view('front.pages.contact');
    }
    
}