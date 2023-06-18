<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Hadits</title>

    {{-- Styles --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="{{ asset('/assets/css/styles.css') }}">
</head>
<body class="antialiased">
    <div>Search</div>
    <div>{{ count($results) }}</div>
    @foreach ([
    "bukhari",
    "muslim",
    "malik",
    "tirmidzi",
    "abudaud",
    "ibnumajah",
    "nasai",
    "darimi"
    ] as $kitab)

    <div>{{ $kitab }}</div>
    
    @foreach ($results as $result )
    @if ($result->kitab === $kitab)
    <div>
        <a href="/hadits/{{ $kitab }}/{{ $result->number }}">
            {{ $result->number }}
        </a>
    </div>
    @endif
    @endforeach
    @endforeach

    <script>
        //console.log($results)

    </script>

</body>
</html>
