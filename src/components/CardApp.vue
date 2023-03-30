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
        }
    }
}
</script>

<template>
    <li>Titolo: {{ info.title }}</li>
    <li>Titolo originale: {{ info.original_title }}</li>
    <li>Lingua originale: {{ getLanguage }} <country-flag :country='getLanguage' size='small' /></li>
    <li>Voto: {{ info.vote_average }}</li>
</template>