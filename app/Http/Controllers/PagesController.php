<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
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
}
