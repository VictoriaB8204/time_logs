@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Users</h1>
        @include('users.table')
    </div>
    @include('users.roles.modal')
@endsection

@section('scripts')
    <script src="{{ asset('js/users/index.js') }}" defer></script>
@endsection
