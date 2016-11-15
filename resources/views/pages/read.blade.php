@extends('layouts.app')

@section('content')
    <answer-list></answer-list>
    <upvote-button></upvote-button>
<button type="button" class="btn btn-outline-primary waves-effect">Primary</button>
<button type="button" class="btn btn-outline-default waves-effect">Default</button>
<button type="button" class="btn btn-outline-secondary waves-effect">Secondary</button>
<button type="button" class="btn btn-outline-success waves-effect">Success</button>
<button type="button" class="btn btn-outline-info waves-effect">Info</button>
<button type="button" class="btn btn-outline-warning waves-effect">Warning</button>
<button type="button" class="btn btn-outline-danger waves-effect">Danger</button>


<a class="btn btn-primary btn-rounded">Primary</a>
<a class="btn btn-default btn-rounded">Default</a>
<a class="btn btn-secondary btn-rounded">Secondary</a>
<a class="btn btn-success btn-rounded">Success</a>
<a class="btn btn-info btn-rounded">Info</a>
<a class="btn btn-warning btn-rounded">Warning</a>
<a class="btn btn-danger btn-rounded">Danger</a>

<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">Primary</button>

<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-default">Default</button>

<!-- Secondary, outline button -->
<button type="button" class="btn btn-secondary">Secondary</button>

<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">Success</button>

<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">Info</button>

<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">Warning</button>

<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">Danger</button>
@endsection
