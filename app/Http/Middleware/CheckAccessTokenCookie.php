<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckAccessTokenCookie
{
    protected $header;

    public function __construct() {
        $this->header = [
            'Origin'            => config('app.url'),
            'Content-Type'      => 'application/json',
            'Accept'            => 'application/json'
        ];
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

        if( ! $request->cookie('pt')) {
            // if no secret cookie, try to get new one
            if( ! $newSecret = $this->getNewToken($request)) {
                // if cannot get new token redirect to home page
                return redirect(url('/welcome'));
            } else {
                $response->cookie('pt', $newSecret['token_type'] . ' ' . $newSecret['access_token'], $newSecret['expires_in'], null, config('app.domain'));
                $response->cookie('ptr', $newSecret['refresh_token'], 60*24*360, null, config('app.domain'));
            }
        }

        return $response;
    }

    private function getNewToken($request)
    {
        $secret = null;

        if( $refreshToken = $request->cookie('ptr')) {
            $http = new \GuzzleHttp\Client(['base_uri' => config('services.viender.url')]);

            if(config('app.env') == 'local') {
                $http = new \GuzzleHttp\Client(['base_uri' => config('services.viender.url'), 'verify' => false]);
            }

            $response = $http->post('/oauth/token', [
                'headers' => $this->header,
                'json' => [
                    'grant_type'        => 'refresh_token',
                    'client_id'         => config('services.viender.client_id'),
                    'client_secret'     => config('services.viender.client_secret'),
                    'refresh_token'     => $refreshToken,
                    'scope'             => '',
                ],
            ]);

            $secret = json_decode((string) $response->getBody(), true);
        }


        return $secret;
    }
}
