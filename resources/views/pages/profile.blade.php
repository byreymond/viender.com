@extends('layouts.app')

@section('content')
	<profile-page :user='{{ "JSON.parse('" . $user . "')" }}'></profile-page>
@endsection
