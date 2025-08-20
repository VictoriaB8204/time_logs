@extends('layouts.app')

@section('content')
    @include('payments.index.generate_bill_modal')
    @include('payments.index.users_table')
    @include('payments.index.time_logs_table')
@endsection

@section('scripts')
    <script src="{{ mix('/js/payments/index.js') }}" defer></script>
@endsection
