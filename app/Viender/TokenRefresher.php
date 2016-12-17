<?php

namespace App\Viender;

use Illuminate\Http\Request;

class TokenRefresher {
    protected $header;

    protected $accessTokenCookieName;

    protected $refreshTokenCookieName;

    protected $secret = null;

    protected $http;

    public function __construct() {
        $this->header = [
            'Origin'            => config('app.url'),
            'Content-Type'      => 'application/json',
            'Accept'            => 'application/json'
        ];

        $this->accessTokenCookieName = config('services.viender.access_token_cookie_name');

        $this->refreshTokenCookieName = config('services.viender.refresh_token_cookie_name');

        $this->http = new \GuzzleHttp\Client(['base_uri' => config('services.viender.url')]);

        if(config('app.env') == 'local') {
            $this->http = new \GuzzleHttp\Client(['base_uri' => config('services.viender.url'), 'verify' => false]);
        }
    }

    public function getNewToken(Request $request)
    {
        if( $refreshToken = $request->cookie($this->refreshTokenCookieName)) {


            $response = $this->http->post('/oauth/token', [
                'headers' => $this->header,
                'json' => [
                    'grant_type'        => 'refresh_token',
                    'client_id'         => config('services.viender.client_id'),
                    'client_secret'     => config('services.viender.client_secret'),
                    'refresh_token'     => $refreshToken,
                    'scope'             => '',
                ],
            ]);

            $this->secret = json_decode((string) $response->getBody(), true);
        }


        return $this->secret;
    }

    public function setTokenCookie(&$response)
    {
        $response->cookie($this->accessTokenCookieName, $this->secret['token_type'] . ' ' . $this->secret['access_token'], $this->secret['expires_in']/60, null, config('app.domain'));
        $response->cookie($this->refreshTokenCookieName, $this->secret['refresh_token'], 60*24*30, null, config('app.domain'));

        return $response;
    }

    public function forgetTokenCookie(&$response)
    {
        $response->cookie($this->accessTokenCookieName, '', -1, null, config('app.domain'));
        $response->cookie($this->refreshTokenCookieName, '', -1, null, config('app.domain'));

        return $response;
    }    
}