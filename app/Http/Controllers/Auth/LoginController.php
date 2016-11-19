<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Laravel\Passport\Passport;
use App\Http\Controllers\Controller;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    public function login(Request $request)
    {
        $this->validateLogin($request);

        $http = new \GuzzleHttp\Client;

        try {
            $response = $http->post('http://api.viender.com/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => '3',
                    'client_secret' => 'uX3pIkN9wwNOBCLVUdOitLCdVnlKR5Wr1ZqR2ALQ',
                    'username' => $request->email,
                    'password' => $request->password,
                    'scope' => '',
                ],
            ]);

            $response = json_decode((string) $response->getBody(), true);

            session(['laravel_token' => $response['access_token']]);

            return session('laravel_token');

        } catch (ClientException $e) {
            $error = [
                "error" => "An error has occured",
                "message" => "There was an error, please try again later."
            ];

            return response($error, 403);
        }
        


    }
}
