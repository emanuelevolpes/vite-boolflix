<script>
import CountryFlag from 'vue-country-flag-next'

export default {
    name: 'CardFilms',
    props: {
        infoFilm: Object
    },
    components: {
        CountryFlag
    },
    computed: {
        getLanguage() {
            switch (this.infoFilm.original_language) {
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
                    return this.infoFilm.original_language;
            }
        },
        getVote() {
            return Math.ceil(this.infoFilm.vote_average / 2);
        }
    }
}
</script>

<template>
    <div>
        <li><img :src="`https://image.tmdb.org/t/p/w300${infoFilm.backdrop_path}`" alt="copertina"></li>
        <li>Titolo: {{ infoFilm.title }}</li>
        <li>Titolo originale: {{ infoFilm.original_title }}</li>
        <li>Lingua originale: {{ getLanguage }} <country-flag :country='getLanguage' size='small' /></li>
        <li>Voto: {{ getVote }}
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote" />
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote" />
        </li>
    </div>
</template>