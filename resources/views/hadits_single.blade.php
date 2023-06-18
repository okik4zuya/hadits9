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
    <div>Single</div>
    <div>{{ $hadits->arabic }}</div>
    <div>{{ $hadits->terjemah }}</div>

</body>
</html>
