<template  id="AskForm-template">
    <form class="form-inline float-xs-right" style="width: 100%;">
        <input class="form-control" type="text" placeholder="Ask Viender" style="border-bottom: none; width: 100%;" v-model="searchValue">
    	<input type="submit" value="Search" @click="submitSearch($event)">
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