<script>
import axios from 'axios'
import { store } from './store'
import Header from './components/AppHeader.vue';
import Main from './components/AppMain.vue';

export default {
    components: {
        Header,
        Main
    },
    data() {
        return {
            store
        }
    },
    methods: {
        search() {
            //chiamata api Film
            axios
                .get(this.store.config.urlApi + this.store.config.searchMovie, {
                    params: {
                        api_key: this.store.config.apiKey,
                        query: this.store.searchKey
                    }
                })
                .then((response) => {
                    this.store.resultSearchFilm = response.data.results
                })
            //chiamata api SerieTv
            axios
                .get(this.store.config.urlApi + this.store.config.searchSeries, {
                    params: {
                        api_key: this.store.config.apiKey,
                        query: this.store.searchKey
                    }
                })
                .then((response) => {
                    this.store.resultSearchSeries = response.data.results
                })
        }
    }
}
</script>

<template>
    <Header @search="search" />
    <Main />
</template>

<style></style>