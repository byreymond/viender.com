<?php

namespace App\Http\Middleware;

use Closure;

class AddVienderTokenCookie
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        
        if ($request->session()->has('viender_access_token')) {
            if(! $request->hasCookie('viender_access_token'))
            {
                return $response->cookie('viender_access_token', session('viender_access_token'));
            }
        }

        return $response;
    }
}
