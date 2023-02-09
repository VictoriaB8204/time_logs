@extends('layouts.app')

@section('content')
    <h1>Users</h1>
    @include('users.table')

    @include('users.roles.modal')
@endsection

@section('scripts')
    <script src="{{ asset('js/users/index.js') }}" defer></script>
@endsection
