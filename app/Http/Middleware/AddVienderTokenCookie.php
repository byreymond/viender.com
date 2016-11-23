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
        
        if ($request->session()->has('viender_access_token')
            && ! $request->hasCookie('viender_access_token')
            && ! $request->hasCookie('viender_access_token_expires_at')
            && ! $response instanceof \Symfony\Component\HttpFoundation\RedirectResponse)
            {
                $response->cookie('viender_access_token', session('viender_access_token'), 60*24*7, null, null, false, false);
                $response->cookie('viender_access_token_expires_at', session('viender_access_token_expires_at'), 60*24*7, null, null, false, false);
                return $response;
        }

        return $response;
    }
}
