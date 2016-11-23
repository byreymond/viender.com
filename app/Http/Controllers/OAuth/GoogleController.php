<?php

namespace App\Http\Controllers\OAuth;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Viender\Utilities\Text;
use App\Http\Controllers\Controller;
use GuzzleHttp\Exception\ServerException;

class GoogleController extends Controller
{
    protected $header = [
        'Origin'            => 'https://web.viender.dev',
        'Content-Type'      => 'application/json',
        'Accept'            => 'application/json'
    ];

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

        $base_uri = config('services.viender')['url'];

        $http = new \GuzzleHttp\Client(['base_uri' => $base_uri]);

        if(config('app.env') == 'local') {
            $http = new \GuzzleHttp\Client(['base_uri' => $base_uri, 'verify' => false]);
        }

        try {
            $userToken = $this->findOrCreateUser($user, $http);            
        } catch (ClientException $e) {
            $error = [
                "error" => "An error has occured",
                "message" => "There was an error, please try again."
            ];

            return response($error, 403);
        } 

        session(['viender_access_token' => $userToken['access_token']]);
        session(['viender_refresh_token' => $userToken['refresh_token']]);
        session(['viender_access_token_expires_at' => $userToken['expires_in']]);

        return redirect(url('/'));
    }

    private function findOrCreateUser($user, $http) 
    {
        $vienderConfig = config('services.viender');

        $response = $http->post('/users', [
            'headers' => $this->header,
            'json' => [
                'grant_type'        => 'password',
                'client_id'         => $vienderConfig['client_id'],
                'client_secret'     => $vienderConfig['client_secret'],
                'first_name'        => $user->user['name']['givenName'],
                'last_name'         => $user->user['name']['familyName'],
                'email'             => $user->email,
                'username'          => Text::clean($user->email),
                'avatar_url'        => $user->avatar_original,
                'password'          => bcrypt($user->token),
                'gender'            => '',
                'is_social_account' => true,
                'social_id'         => $user->id,
                'provider'          => 'google',
                'token'             => $user->token,
                'expiresIn'         => $user->expiresIn,
            ],
        ]);

        return json_decode((string) $response->getBody(), true);        
    }
}
