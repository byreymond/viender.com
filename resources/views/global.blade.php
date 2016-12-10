<script>

var config = {
    app: {
        env: '{{ config('app.env') }}',
        url: '{{ config('app.url') }}',
    },
    services: {
        viender: {
            url: '{{ config('services.viender')['url'] }}',
        }
    }
};

</script>