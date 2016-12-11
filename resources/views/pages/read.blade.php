@extends('layouts.app')

@section('content')
    <read-page v-if="isAuthenticated()"></read-page>
    <welcome-page v-else></welcome-page>
@endsection
