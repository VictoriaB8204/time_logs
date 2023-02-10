@extends('layouts.app')

@section('content')
<div id="page_content">
    <div class="d-flex justify-content-center">
        Loading ...
    </div>
</div>
@endsection

@section('scripts')
    <script src="{{ mix('js/home.js') }}" defer></script>
@endsection
