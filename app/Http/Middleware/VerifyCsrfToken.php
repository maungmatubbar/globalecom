<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        '/admin/check-current-pass',
        '/admin/logout',
        '/admin/update-section-status',
        '/admin/update-category-status',
        '/admin/appand-categories-level',
        '/admin/delete-category-image',
        '/admin/update-product-status',
        '/admin/delete-product-image',
        '/admin/update-attribute-status',
        '/admin/update-image-status',
        '/admin/update-brand-status',
        '/admin/update-banner-status',
        '/get-product-price',
        '/admin/update-coupon-status',
        '/admin/update-user-status',
        '/admin/update-cms-page-status'
    ];
}