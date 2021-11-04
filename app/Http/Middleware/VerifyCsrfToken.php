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
        '/admin/update-section-status',
        '/admin/update-category-status',
        '/admin/appand-categories-level',
        '/admin/delete-category-image',
    ];
}