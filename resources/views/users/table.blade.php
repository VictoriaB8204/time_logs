<div id="users_table">
    <table class="table table-striped">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Current rate</th>
            @if(Auth::user()->hasRole('admin'))
                <th scope="col"></th>
            @endif
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
                    @if(Auth::user()->id == $user->id || Auth::user()->hasRole('admin'))
                        <input class="form-control" type="text" name="name" value="{{ $user->name }}">
                    @else
                        {{ $user->name }}
                    @endif
                </td>
                <td>{{ $user->email }}</td>
                <td>
                    @if(Auth::user()->id == $user->id)
                        <input class="form-control" type="number" step="1" name="current_rate" value="{{ $user->current_rate }}">
                    @elseif(Auth::user()->hasRole('admin'))
                        {{ $user->current_rate }}
                    @endif
                </td>
                @if(Auth::user()->hasRole('admin'))
                    <td>
                        <div class="d-flex justify-content-between">
                            <button type="button" class="btn btn-primary show_roles_button" data-bs-toggle="modal" data-bs-target="#rolesModal">
                                roles
                            </button>
                            <button class="btn text-white bg-danger btn-sm destroy_user">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
                    </td>
                @endif
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
