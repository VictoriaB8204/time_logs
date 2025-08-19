@extends('layouts.app')

@section('content')
{{--    @include('payments.index.time_logs_table')--}}

    @include('payments.index.generate_bill_modal')

    <h3>Неоплаченное время</h3>
    @include('payments.index.users_table')
@endsection

@section('scripts')
    <script src="{{ mix('/js/payments/index.js') }}" defer></script>
@endsection
