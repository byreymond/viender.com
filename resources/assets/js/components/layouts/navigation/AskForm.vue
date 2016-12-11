<template  id="AskForm-template">
    <form class="form-inline float-xs-right" style="width: 100%;">
        <input class="form-control searchInput" type="text" placeholder="Ask Viender..." v-model="searchValue">
        <a class="searchButton" @click="submitSearch($event)"><i class="fa fa-search" aria-hidden="true"></i>
        </a>
        <input type="submit" @click="submitSearch($event)" style="display: none">
    </form>
</template>

<script>
    export default {
        template: "#AskForm-template",

        mixins: [hasLinksMixin],

        data() {
        	return {
        		searchValue: "",
        	}
        },

        methods: {
        	submitSearch(event) {
                var vm = this;

                if (event) event.preventDefault();

                if(vm.searchValue === '') {
                    return;
                }

                var questionsUrl = config.services.viender.url + '/questions?with=owner';

                axios.post(questionsUrl, {
                    title: vm.searchValue,
                    body: '',
                })
                .then(function (response) {
                    if(response.status == 200) {
                        window.location= vm.getUrl('self', response.data).replace(config.services.viender.url + '/questions', config.app.url);
                    }
                    console.log(response);
                })
                .catch(function (error) {
                    if(error.response.status == 409) {
                        alert('The question already exists');
                    }
                });
           	}
        }
    }
</script>


<style scoped>
    .searchInput {
        display: inline-block;
        border-bottom: none;
        width: calc(100% - 15px);
        margin-right: -30px;
        float: left;
    }

    .searchButton {
        display: inline-block;
        padding-top: 4px;
        color: white !important;
    }
</style>