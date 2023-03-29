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
        searchFilms() {
            console.log('ho cliccato il bottone per cercare')
            console.log(this.store.searchKey)
            //chiamata api
            axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=')
            .then((response) => {
                console.log(response)
            })

        }
    },mounted() {
        this.searchFilms()
    }
}
</script>

<template>
    <Header @search="searchFilms" />
    <Main />
</template>

<style></style>