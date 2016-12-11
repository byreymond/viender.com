<script>

var config = {
    app: {
        env: '{{ config('app.env') }}',
        url: '{{ config('app.url') }}',
        url: '{{ config('app.domain') }}',
    },
    services: {
        viender: {
            url: '{{ config('services.viender')['url'] }}',
        }
    }
};

</script>