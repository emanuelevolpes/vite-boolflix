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
        <div class="container">
            <div class="films">
                <ul v-for="films in store.resultSearchFilm">
                    <Card :info="films" />
                </ul>
            </div>
            <div class="series">
                <ul v-for="series in store.resultSearchSeries">
                    <Card :info="series" />
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

        .films {
            display: flex;
            flex-wrap: wrap;

            ul {
                flex-basis: calc(100% / 3);
            }
        }

        .series {
            display: flex;
            flex-wrap: wrap;

            ul {
                flex-basis: calc(100% / 3);
            }
        }
    }

}
</style>