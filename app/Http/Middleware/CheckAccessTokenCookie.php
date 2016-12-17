<?php

namespace App\Http\Middleware;

use Closure;
use App\Viender\TokenRefresher;
use Illuminate\Support\Facades\Auth;

class CheckAccessTokenCookie
{
    protected $tokenRefresher;


    public function __construct(TokenRefresher $tokenRefresher) {
        $this->tokenRefresher = $tokenRefresher;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $response = $next($request);

        if( ! $request->cookie(config('services.viender.access_token_cookie_name'))) {
            // if no secret cookie, try to get new one
            if( ! $newSecret = $this->tokenRefresher->getNewToken($request)) {
                // if cannot get new token redirect to home page
                return redirect(url('/welcome'));
            } else {
                $this->tokenRefresher->setTokenCookie($response);
            }
        }

        return $response;
    }
}
