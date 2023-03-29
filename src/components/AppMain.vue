<script>
import { store } from '../store'
    export default {
        name: 'Main',
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
            <li>Titolo: {{ films.title }}</li>
            <li>Titolo originale: {{ films.original_title }}</li>
            <li>Lingua originale: {{ films.original_language }}</li>
            <li>Voto: {{ films.vote_average }}</li>
        </ul>
    </div>
</template>