<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth.secret')->except('welcome');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $questionSlug
     * @return \Illuminate\Http\Response
     */
    public function show($questionSlug)
    {
        $base_uri = config('services.viender')['url'];

        $http = new \GuzzleHttp\Client(['base_uri' => $base_uri]);

        if(config('app.env') == 'local') {
            $http = new \GuzzleHttp\Client(['base_uri' => $base_uri, 'verify' => false]);
        }

        $question = $http->get('/questions/' . $questionSlug . '?with=owner');
        
        $question = (string) $question->getBody();

        return view('app.question.show')->with(compact('question'));
    }
}
