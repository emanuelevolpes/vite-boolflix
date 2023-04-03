<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'Card',
    props: {
        info: Object
    },
    components: {
        CountryFlag
    },
    computed: {
        getLanguage() {
            switch (this.info.original_language) {
                case 'en':
                    return 'gb';
                case 'he':
                    return 'il';
                case 'hi':
                    return 'il';
                case 'ja':
                    return 'jp';
                case 'zh':
                    return 'cn';
                case 'fa':
                    return 'ir';
                case 'ko':
                    return 'gn';
                case 'cs':
                    return 'cz';
                default:
                    return this.info.original_language;
            }
        },
        getVote() {
            return Math.ceil(this.info.vote_average / 2);
        },
        title() {
            return this.info.title || this.info.name;
        },
        originalTitle() {
            return this.info.original_title || this.info.original_name;
        }
    }
}
</script>

<template>
    <div class="container" v-cloak>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="bg-image">
                        <li v-show="info.backdrop_path !== null">
                            <img :src="`https://image.tmdb.org/t/p/w342${info.backdrop_path}`" alt="copertina">
                        </li>
                    </div>
                    <div class="bg-image">
                        <li v-show="info.backdrop_path === null">
                            <img src="../../public/img/image-not-found.png" alt="img-not-found">
                        </li>
                    </div>
                </div>
                <div class="flip-card-back">
                    <li class="content"><strong>Title:</strong> {{ title }}</li>
                    <li class="content"><strong>Original Title:</strong> {{ originalTitle }}</li>
                    <li class="content overview"><strong>Overview:</strong> {{ info.overview }}</li>
                    <li class="content"><strong>Original language:</strong><country-flag :country='getLanguage'
                            size='small' /></li>
                    <li class="content"><strong>Vote:</strong> {{ getVote }}
                        <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote" />
                        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote" />
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_partial/common' as *;
@use '../assets/scss/_partial/reset' as *;

[v-cloak] {
    display: none;
}

.container {

    li {
        list-style: none;
    }

    .flip-card {
        background-color: transparent;
        perspective: 1000px;
        text-align: center;
        height: 400px;
        cursor: pointer;


        .bg-image img {
            width: 342px;
            height: 250px;
            object-fit: cover;
            object-position: center;
            border-radius: 5px;
        }
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        -moz-backface-visibility: hidden;
    }

    .flip-card:focus {
        outline: 0;
    }

    .flip-card:hover .flip-card-inner,
    .flip-card:focus .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: $tertiary-color;
        border: 2px solid $primary_color;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    .flip-card-front {
        color: black;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .flip-card-back {
        color: white;
        transform: rotateY(180deg);
        padding: 10px;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .content {
            overflow: hidden;
        }

        .content.overview {
            max-height: 50%;
        }
    }
}
</style>