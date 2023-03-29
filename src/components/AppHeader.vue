<script>
import { store } from '../store'
export default {
    name: 'Header',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div>
        <input type="text" name="searchBar" id="searchBar" v-model="store.searchKey">
        <button type="button" @click.prevent="$emit('search')">Cerca</button>
    </div>
    <div v-for="films in store.resultSearchFilm.results">
        <ul v-for="film in films.original_name">
            <li>{{ film }}</li>
        </ul>
    </div>
</template>