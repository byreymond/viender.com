<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'PagesController@read');

Route::get('/welcome', 'PagesController@welcome');
Route::get('/read', 'PagesController@read');
Route::get('/answer', 'PagesController@answer');
Route::get('/profile/{username}', 'PagesController@profile');

Route::get('oauth/token/refresh', 'OAuthController@refresh');

Route::get('oauth/google', 'OAuth\GoogleController@redirect');
Route::get('oauth/google/callback', 'OAuth\GoogleController@callback');

Route::get('oauth/facebook', 'OAuth\FacebookController@redirect');
Route::get('oauth/facebook/callback', 'OAuth\FacebookController@callback');

Route::get('/{questionSlug}', 'QuestionController@show');
Route::resource('/{questionSlug}/answer', 'AnswerController', ['only' => ['create', 'show', 'edit']]);