@extends('layouts.app')

@section('content')
<div class="container">
    <div id="page_content">
        <div class="d-flex justify-content-center">
            Loading ...
        </div>
    </div>
</div>
@endsection

@section('scripts')
    <script src="{{ asset('js/home.js') }}" defer></script>
@endsection
