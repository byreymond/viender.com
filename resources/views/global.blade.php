<script>

var config = {
    app: {
        env: '{{ config('app.env') }}',
        url: '{{ config('app.url') }}',
        domain: '{{ config('app.domain') }}',
    },
    services: {
        viender: {
            url: '{{ config('services.viender.url') }}',
            access_token_cookie_name: '{{ config('services.viender.access_token_cookie_name') }}',
            refresh_token_cookie_name: '{{ config('services.viender.refresh_token_cookie_name') }}',
        }
    }
};

</script>