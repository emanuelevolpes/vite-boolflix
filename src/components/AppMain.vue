<script>
import { store } from '../store'
import CardFilms from './CardFilms.vue';
import CardSeries from './CardSeries.vue'
export default {
    name: 'Main',
    components: {
    CardFilms,
    CardSeries
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
            <CardFilms :infoFilm="films" />
        </ul>
    </div>
    <div>
        <ul v-for="series in store.resultSearchSeries">
            <CardSeries :infoSeries="series" />
        </ul>
    </div>
</template>