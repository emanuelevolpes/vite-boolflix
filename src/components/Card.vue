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
    <div>
        <li v-if="info.backdrop_path !== null">
            <img :src="`https://image.tmdb.org/t/p/w342${info.backdrop_path}`" alt="copertina">
        </li>
        <li v-else>
            <img src="../../public/img/image-not-found.png" style="width: 342px; height: 400px; object-fit: cover;" alt="img-not-found">
        </li>
        <li>Titolo: {{ title }}</li>
        <li>Titolo originale: {{ originalTitle }}</li>
        <li>Lingua originale: {{ getLanguage }} <country-flag :country='getLanguage' size='small' /></li>
        <li>Voto: {{ getVote }}
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote" />
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote" />
        </li>
    </div>
</template>