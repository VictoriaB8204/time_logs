<div id="users_table">
    <table class="table table-hover table-borderless w-auto">
        <thead>
        <tr>
            <th scope="col">Исполнитель</th>
            <th scope="col">Часы к оплате</th>
            <th scope="col">Стоимость</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        @foreach($users as $user)
            <tr>
                <td>
                    <input type="text" hidden class="user_id" value="{{ $user->id }}">
                    {{ $user->name }}
                </td>
                <td>{{ $user->time_logs_for_payment->sum('time_spent') }}</td>
                <td>{{ $user->time_logs_for_payment->sum('cost') }}</td>
                <td>
                    <button class="btn btn-sm btn-primary payed_button">Оплатить</button>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
