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
            //chiamata api
            axios
                .get(`https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=${store.searchKey}`)
                .then((response) => {
                    this.store.resultSearchFilm = response.data.results
                })

            axios
                .get(`https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&query=${store.searchKey}`)
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