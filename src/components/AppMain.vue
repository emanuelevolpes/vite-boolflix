<script>
import { store } from '../store'
import CardApp from './CardApp.vue';
export default {
    name: 'Main',
    components: {
        CardApp
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div>
        <ul v-for="films in store.resultSearchFilm">
            <CardApp :info="films" />
        </ul>
    </div>
</template>