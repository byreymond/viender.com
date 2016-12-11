<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth.secret')->except('read');
        $this->middleware('guest');
    }

    public function welcome() 
    {
        return view('home');
    }

    public function tutor() 
    {
        return view('pages.tutor');
    }

    public function read() 
    {
        return view('pages.read');
    }

    public function answer() 
    {
        return view('pages.answer');
    }

    public function profile($username) 
    {        
        $http = new \GuzzleHttp\Client(['base_uri' => config('services.viender.url')]);

        if(config('app.env') == 'local') {
            $http = new \GuzzleHttp\Client(['base_uri' => config('services.viender.url'), 'verify' => false]);
        }

        $response = $http->get('/users/' . $username);

        $user = $response->getBody();

        return view('pages.profile')->with(compact('user'));
    }
}
