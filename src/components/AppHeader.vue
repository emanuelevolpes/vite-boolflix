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
        <button type="button" @click="$emit('search')">Cerca</button>
    </div>
</template>