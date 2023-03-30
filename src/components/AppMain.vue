<script>
import { store } from '../store'
import CardFilms from './CardFilms.vue';
export default {
    name: 'Main',
    components: {
    CardFilms
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
            <CardFilms :info="films" />
        </ul>
    </div>
</template>