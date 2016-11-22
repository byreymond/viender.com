<?php

namespace App\Http\Controllers\OAuth;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Viender\Utilities\Text;
use App\Http\Controllers\Controller;
use GuzzleHttp\Exception\ServerException;

class GoogleController extends Controller
{
    /**
     * Redirect the user to the Google authentication page.
     *
     * @return Response
     */
    public function redirect()
    {
        return \Socialite::driver('google')->redirect();
    }

    /**
     * Obtain the user information from Google.
     *
     * @return Response
     */
    public function callback()
    {
        $user = \Socialite::driver('google')->user();

        $vienderConfig = config('services.viender');

        $formParams = [
            'client_id'         => $vienderConfig['client_id'],
            'client_secret'     => $vienderConfig['client_secret'],
            'first_name'        => $user->user['name']['givenName'],
            'last_name'         => $user->user['name']['familyName'],
            'email'             => $user->email,
            'username'          => Text::clean($user->email),
            'avatar_url'        => $user->avatar_original,
            'password'          => substr(encrypt(Carbon::now()), 0, 10),
            'gender'            => '',
            'is_social_account' => true,
            'social_id'         => $user->id,
            'provider'          => 'google',
            'token'             => $user->token,
            'expiresIn'         => $user->expiresIn,
        ];

        $http = new \GuzzleHttp\Client(['base_uri' => env('VIENDER_URL')]);

        if(config('app.env') == 'local') {
            $http = new \GuzzleHttp\Client(['base_uri' => env('VIENDER_URL'), 'verify' => false]);
        }

        try {
            $response = $http->post('/users', [
                'headers' => [
                    'Origin'            => 'https://web.viender.dev',
                    'Content-Type'      => 'application/json',
                    'Accept'            => 'application/json'
                ],
                'json' => $formParams
            ]);
            $response = json_decode((string) $response->getBody(), true);
            
            session(['viender_access_token' => $response['token']]);

            return response($response);
            
        } catch (ClientException $e) {
            $error = [
                "error" => "An error has occured",
                "message" => "There was an error, please try again."
            ];

            return response($error, 403);
        } 
    }
}
