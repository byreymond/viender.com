@extends('layouts.app')

@section('content')
    <question-show-page :question="{{ $question }}" :answers="{{ $answers }}"></question-show-page>
@endsection