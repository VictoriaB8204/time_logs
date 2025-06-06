@extends('layouts.app')

@section('content')
    @include('payments.index.time_logs_table')

    <h3>Unpaid time</h3>
    @include('payments.index.users_table')
@endsection

@section('scripts')
    <script src="{{ mix('public/js/payments/index.js') }}" defer></script>
@endsection
