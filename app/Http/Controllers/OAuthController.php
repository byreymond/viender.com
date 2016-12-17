<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GuzzleHttp\Exception\RequestException;

class OAuthController extends Controller
{
    protected $header;

    protected $accessTokenCookieName;

    protected $refreshTokenCookieName;


    public function __construct() {
        $this->header = [
            'Origin'            => config('app.url'),
            'Content-Type'      => 'application/json',
            'Accept'            => 'application/json'
        ];

        $this->accessTokenCookieName = config('services.viender.access_token_cookie_name');

        $this->refreshTokenCookieName = config('services.viender.refresh_token_cookie_name');
    }

    public function refresh(Request $request)
    {
        $secret = null;

        if( $refreshToken = $request->cookie($this->refreshTokenCookieName)) {
            $http = new \GuzzleHttp\Client(['base_uri' => config('services.viender.url')]);

            if(config('app.env') == 'local') {
                $http = new \GuzzleHttp\Client(['base_uri' => config('services.viender.url'), 'verify' => false]);
            }
            
            $apiResponse = $http->post('/oauth/token', [
                'headers' => $this->header,
                'json' => [
                    'grant_type'        => 'refresh_token',
                    'client_id'         => config('services.viender.client_id'),
                    'client_secret'     => config('services.viender.client_secret'),
                    'refresh_token'     => $refreshToken,
                    'scope'             => '',
                ],
            ]);

            $secret = json_decode((string) $apiResponse->getBody(), true);
        } else {
            $response = response()->json([
                'error' => 'Bad request',
                'message' => 'Refresh token not found'
            ], 400);

            $response->cookie($this->accessTokenCookieName, '', -1, null, config('app.domain'));
            $response->cookie($this->refreshTokenCookieName, '', -1, null, config('app.domain'));
            return $response;
        }

        $response = response()->json(['message' => 'success'], 200);

        $response->cookie($this->accessTokenCookieName, $secret['token_type'] . ' ' . $secret['access_token'], $secret['expires_in']/60, null, config('app.domain'));

        $response->cookie($this->refreshTokenCookieName, $secret['refresh_token'], 60*24*360, null, config('app.domain'));

        return $response;
    }
}
