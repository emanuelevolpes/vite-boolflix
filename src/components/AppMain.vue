<script>
import { store } from '../store'
import Card from './Card.vue'
export default {
    name: 'Main',
    components: {
        Card
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <body>
        <div class="d-flex">
            <div>
                <ul v-for="films in store.resultSearchFilm">
                    <Card :info="films" />
                </ul>
            </div>
            <div>
                <ul v-for="series in store.resultSearchSeries">
                    <Card :info="series" />
                </ul>
            </div>
        </div>
    </body>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_partial/common' as *;

body {
    background-color: $secondary_color;
}
</style>