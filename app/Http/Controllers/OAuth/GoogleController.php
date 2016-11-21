<?php

namespace App\Http\Controllers\OAuth;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Viender\Utilities\Text;
use App\Http\Controllers\Controller;

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

        $formParams = [
            'client_id'         => env('VIENDER_ID'),
            'client_secret'     => env('VIENDER_SECRET'),
            'first_name'        => $user->user['name']['givenName'],
            'last_name'         => $user->user['name']['familyName'],
            'email'             => $user->email,
            'username'          => Text::clean($user->email),
            'avatar_url'        => $user->avatar_original,
            'password'          => substr(encrypt(Carbon::now()), 0, 10),
            'gender'            => '',
            'social_id'         => $user->id,
            'provider'          => 'google',
            'token'             => $user->token,
            'expiresIn'         => $user->expiresIn,
        ];

        $http = new \GuzzleHttp\Client;

        try {
            $response = $http->post('https://api.viender.dev/users', [
                'json' => $formParams,
            ]);

            return $response = json_decode((string) $response->getBody(), true);
            
        } catch (ClientException $e) {
            $error = [
                "error" => "An error has occured",
                "message" => "There was an error, please try again."
            ];

            return response($error, 403);
        }
    }
}
