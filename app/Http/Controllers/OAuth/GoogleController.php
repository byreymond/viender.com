<?php

namespace App\Http\Controllers\OAuth;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Viender\Utilities\Text;
use App\Http\Controllers\Controller;
use GuzzleHttp\Exception\ServerException;

class GoogleController extends Controller
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

        $base_uri = config('services.viender.url');

        $http = new \GuzzleHttp\Client(['base_uri' => $base_uri]);

        if(config('app.env') == 'local') {
            $http = new \GuzzleHttp\Client(['base_uri' => $base_uri, 'verify' => false]);
        }

        try {
            $userData = $this->findOrCreateUser($user, $http);        
        } catch (ClientException $e) {
            $error = [
                "error" => "An error has occured",
                "message" => "There was an error, please try again."
            ];

            return response($error, 403);
        }
        
        $response = redirect(url('/'));
        $response->cookie('me', json_encode(array_splice($userData, 0, 10)), 60*24*360, null, config('app.domain'), false, false);
        $response->cookie('secret', json_encode(array_splice($userData, 0, 3)), 59, null, config('app.domain'), false, false);
        $response->cookie('secret_r', $userData['refresh_token'], 60*24*360, null, config('app.domain'));
        return $response;
    }

    private function findOrCreateUser($user, $http) 
    {
        $response = $http->post('/users', [
            'headers' => $this->header,
            'json' => [
                'grant_type'        => 'password',
                'client_id'         => config('services.viender.client_id'),
                'client_secret'     => config('services.viender.client_secret'),
                'first_name'        => $user->user['name']['givenName'],
                'last_name'         => $user->user['name']['familyName'],
                'email'             => $user->email,
                'username'          => Text::clean($user->email),
                'avatar_url'        => $user->avatar_original,
                'password'          => $user->token,
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