<script>
    import { store } from './store'
    import Header from './components/AppHeader.vue';
    import Main from './components/AppMain.vue';

    export default {
        components: {
            Header, 
            Main
        },
        data(){
            return {
                store
            }
        },
        methods: {
            searchFilms() {
                console.log('ho cliccato il bottone per cercare')
                console.log(this.store.searchKey)
            }
        }
    }
</script>

<template>
    <Header @search="searchFilms"/>
    <Main />
</template>

<style></style>