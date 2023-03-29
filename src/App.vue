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
        }
    }
</script>

<template>
    <Header />
    <Main />
</template>

<style></style>