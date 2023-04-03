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
    },
    computed: {
        results() {
            return [...this.store.resultSearchFilm, ...this.store.resultSearchSeries]
        }
    }
}
</script>

<template>
    <body>
        <div class="container">
            <div class="cards">
                <ul v-for="result in this.results">
                    <Card :info="result" />
                </ul>
            </div>
        </div>
    </body>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_partial/common' as *;
@use '../assets/scss/_partial/reset' as *;

body {
    background-color: $secondary_color;
    padding-top: 100px;

    .container {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        padding: 20px;
        text-align: center;

        .cards {
            display: flex;
            flex-wrap: wrap;

            ul {
                flex-basis: calc(100% / 3);
            }
        }
    }

}
</style>