<div id="role_list">
    <div class="d-flex justify-content-center mt-2 mb-3">
        <h3>Roles of {{ $user->name }}</h3>
    </div>
    <input type="text" hidden id="user_id" value="{{ $user->id }}">
    @foreach($roles as $role)
        <div class="form-check">
            <input class="form-check-input user_role" type="checkbox" value="{{ $role->id }}" id="check{{ $role->id }}"
                   @if($user->hasRole($role->name))
                       checked
                   @endif
            >
            <label class="form-check-label" for="check{{ $role->id }}">
                {{ $role->name }}
            </label>
        </div>
    @endforeach
</div>
