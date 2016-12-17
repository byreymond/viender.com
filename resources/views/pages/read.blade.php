@extends("layouts.app")

@section("content")
    <read-page :feeds="{{ $feeds }}"></read-page>
@endsection
