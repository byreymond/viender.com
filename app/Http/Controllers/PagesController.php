<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    protected $http;
    
    public function __construct()
    {
        $this->middleware('auth.secret')->except('welcome');
        
        $this->middleware('guest');

        $this->http = new \GuzzleHttp\Client(['base_uri' => config('services.viender.url')]);

        if(config('app.env') == 'local') {
            $this->http = new \GuzzleHttp\Client(['base_uri' => config('services.viender.url'), 'verify' => false]);
        }
    }

    public function welcome() 
    {
        return view('pages.welcome');
    }

    public function read() 
    {
        $response = $this->http->get(config('services.viender.url') . '/answers?with=owner,question');

        $feeds = $response->getBody();

        return view('pages.read')->with(compact('feeds'));
    }

    public function answer() 
    {
        return view('pages.answer');
    }

    public function profile($username) 
    {        
        $response = $this->http->get('/users/' . $username);

        $user = $response->getBody();

        return view('pages.profile')->with(compact('user'));
    }
}
