@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Users</h1>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Current rate</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            @foreach($users as $user)
                <tr class="user_form">
                    <td>
                        <input hidden type="text" class="user_id" value="{{ $user->id }}">
                        {{ $user->id }}
                    </td>
                    <td>
                        <input class="form-control" type="text" name="name" value="{{ $user->name }}">
                    </td>
                    <td>{{ $user->email }}</td>
                    <td>
                        <input class="form-control" type="number" step="1" name="current_rate" value="{{ $user->current_rate }}">
                    </td>
                    <td></td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection

@section('scripts')
    <script src="{{ asset('js/users/index.js') }}" defer></script>
@endsection
