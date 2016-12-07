@extends('layouts.app')

@section('content')
    <read-page v-if="true"></read-page>
    <welcome-page v-else></welcome-page>
@endsection
