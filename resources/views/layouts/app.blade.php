<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'TimeLogs') }}</title>

    <!-- Scripts -->
    <script src="{{ mix('/js/app.js') }}" defer></script>
    @yield('scripts')

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ mix('public/css/app.css') }}" rel="stylesheet">

    <!-- Favicon -->
    <link href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAFEBAQBxAQEAUQEBABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMB3f398n////Z////4v///+N////ct/f3yYwMDAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL+/vxb///99////u////8D///+z////tv///9H////5////nb+/vxYAAAAAAAAAAAAAAAAAAAAAAAAAAL+/vxf///98////lt/f32CPj48wj4+PCY+PjwePj48f39/fYP////D////Jv7+/FgAAAAAAAAAAAAAAADAwMBz///99////lt/f3ykAAAAAAAAAAAAAAAAAAAAAAAAAAFBQUAH///8p////7////50wMDAEAAAAAAAAAADf398n////ut/f32EAAAAAAAAAAAAAAAAAAAAAAAAAAK+vrzL///9739/fWd/f32H////539/fJwAAAAAQEBAF////Zv///7+Pj48wAAAAAAAAAAAAAAAAv7+/Bt/f32n///+4////bI+Pjx6Pj48f////0v///3EQEBABEBAQB////4r///+zj4+PCgAAAAAAAAAAAAAAAO/v76f///+139/fKhAQEAkAAAAAj4+PB////7b///+MEBAQBRAQEAX///+M////to+PjwcAAAAAAAAAAAAAAADv7++z7+/vWQAAAAAAAAAAAAAAAI+Pjwr///+z////ihAQEAcQEBAB////cf///9KPj48fAAAAAAAAAAAAAAAA7+/vs+/v71kAAAAAAAAAAAAAAACPj48w////v////2YQEBAFAAAAAN/f3yf////539/fYQAAAAAAAAAAAAAAAO/v76Tv7+9TAAAAAAAAAAAAAAAA39/fYf///7rf398nAAAAAAAAAAAwMDAE////nv///+/f398pAAAAAAAAAACAgIBHgICAIwAAAAAAAAAA39/fKf///5b///98MDAwHAAAAAAAAAAAAAAAAL+/vxf////K////8N/f32CPj48fj4+PB4+PjwmPj48w39/fYP///5b///97v7+/FgAAAAAAAAAAAAAAAAAAAAAAAAAAv7+/Fv///5/////6////0f///7b///+z////wP///7r///98v7+/FgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAE39/fJ////3P///+N////i////2bf398mMDAwHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBABEBAQBRAQEAcQEBAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP5/AAD4DwAA9+cAAO/zAADf+wAA37sAAJ55AACe+QAA3vsAAN77AADP9wAA5+8AAPAfAAD+fwAA//8AAA==" rel="icon" type="image/x-icon">

</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'TimeLogs') }}
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                        @auth
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('time_logs.archive') }}">Archive</a>
                            </li>
                            @if(Auth::user()->hasAccess('payer'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('payments.index') }}">Payment</a>
                                </li>
                            @endif
                        @endauth

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        @auth
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('users.index') }}">Users</a>
                            </li>
                        @endauth
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            <div class="container-xxl">
                @yield('content')
            </div>
        </main>
    </div>
    @include('toasts.toast_fail')
    @include('toasts.toast_success')
</body>
</html>
