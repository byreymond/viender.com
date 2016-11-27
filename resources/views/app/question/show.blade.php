@extends('layouts.app')

@section('content')
    <app class="read-page">
        <navigation slot="header"></navigation>
        <question-show :question="JSON.parse('{{ $question }}')"></question-show>
    </app>
@endsection