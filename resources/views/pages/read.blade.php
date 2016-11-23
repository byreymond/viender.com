@extends('layouts.app')

@section('content')
    <read-page v-if="auth.isAuthenticated"></read-page>
    <welcome-page v-else></welcome-page>
@endsection
