<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Viender\TokenRefresher;
use App\Http\Controllers\Controller;
use GuzzleHttp\Exception\RequestException;

class OAuthController extends Controller
{
    protected $tokenRefresher;


    public function __construct(TokenRefresher $tokenRefresher) {
        $this->tokenRefresher = $tokenRefresher;
    }

    public function refresh(Request $request)
    {
        $secret = null;

        if( ! $secret = $this->tokenRefresher->getNewToken($request)) {
            $response = response()->json([
                'error' => 'Bad request',
                'message' => 'Refresh token not found'
            ], 400);

            $this->tokenRefresher->forgetTokenCookie($response);

            return $response;
        }

        $response = response()->json(['message' => 'success'], 200);

        $this->tokenRefresher->setTokenCookie($response);

        return $response;
    }
}
