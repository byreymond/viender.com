<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuestionController extends Controller
{
    protected $http;

    public function __construct()
    {
        $this->middleware('auth.secret')->except('welcome');

        $base_uri = config('services.viender')['url'];

        $this->http = new \GuzzleHttp\Client(['base_uri' => $base_uri]);

        if(config('app.env') == 'local') {
            $this->http = new \GuzzleHttp\Client(['base_uri' => $base_uri, 'verify' => false]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $questionSlug
     * @return \Illuminate\Http\Response
     */
    public function show($questionSlug)
    {

        $question = $this->http->get('/questions/' . $questionSlug . '?with=owner');
        
        $question = (string) $question->getBody();

        $answers = $this->http->get('/questions/' . $questionSlug . '/answers?with=owner');
        
        $answers = (string) $answers->getBody();

        return view('app.question.show')->with(compact('question', 'answers'));
    }
}
