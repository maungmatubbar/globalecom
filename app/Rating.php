<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Product;
class Rating extends Model
{
    use HasFactory;
    public function user()
    {
        //This is also the way to write
        //return $this->belongsTo(User::class);
        //return $this->belongsTo(User::class,'user_id');
        return $this->belongsTo('App\User','user_id');
    }
    public function product()
    {
        return $this->belongsTo('App\Product','product_id');
    }
}