<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use App\Wishlist;
use Auth;
class WishlistController extends Controller
{
    public function updateWishlist(Request $request)
    {
        if($request->ajax())
        {
            $countWishlist = Wishlist::where('product_id',$request->product_id)->count();
            if($countWishlist==0)
            {
                $wishlist = new Wishlist();
                $wishlist->user_id = Auth::user()->id;
                $wishlist->product_id = $request->product_id;
                $wishlist->save();
                return response()->json(['status'=>true,'action'=>'add']);
            }
            else
            {
                Wishlist::where(['product_id'=>$request->product_id,'user_id'=>Auth::user()->id])->delete();
                return response()->json(['status'=>true,'action'=>'remove']);
            }
            
        }
    }
    public function wishlist()
    {
        $userWishlistItems = Wishlist::userWishlistItems();
        $meta_title = 'Wish List - Ecommere Website.';
        $meta_description = 'View shopping cart of - Ecommerce Website.';
        $meta_keywords = 'wishlist,e-commerce website';
        return view('front.wishlist.wishlist')->with(compact('userWishlistItems','meta_title','meta_description','meta_keywords'));
    }
    public function deleteWishlistItem(Request $request)
    {
        if($request->ajax())
        {
           
            Wishlist::where('id',$request->wishlist_id)->delete();
            $userWishlistItems = Wishlist::userWishlistItems();
            $userWishlistItems = json_decode(json_encode( $userWishlistItems));
            $totalWishlistItems = count($userWishlistItems);
            return response()->json([
                'totalWishlistItems' => $totalWishlistItems,
                'view' => (string)View::make('front.wishlist.wishlist_items')->with(compact('userWishlistItems'))
            ]);
        }
    }
}