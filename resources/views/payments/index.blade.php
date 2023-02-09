@extends('layouts.app')

@section('content')
    <div class="container">
        @include('payments.index.time_logs_table')

        <h3>Unpaid time</h3>
        @include('payments.index.users_table')
    </div>
@endsection

@section('scripts')
    <script src="{{ asset('js/payments/index.js') }}" defer></script>
@endsection
