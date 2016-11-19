window.hasLinksMixin = {

    methods: {
        getUrl(rel, obj) {
            return obj.links.filter(function( url ) {
                return url.rel == rel;
            })[0].url;
        }
    }
}