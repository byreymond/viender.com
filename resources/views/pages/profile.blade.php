@extends('layouts.app')

@section('content')
	<profile-page :user='{{ $user }}'></profile-page>
@endsection
