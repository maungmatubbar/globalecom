<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Session;

class CategoryController extends Controller
{
    public function categories()
    {
        Session::put('page', 'categories');
        $categories = Category::get();
        // $categories = json_decode(json_encode($categories));
        // echo '<pre>';
        // print_r($categories);

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
}