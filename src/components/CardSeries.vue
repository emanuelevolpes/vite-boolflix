<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'CardSeries',
    props: {
        infoSeries: Object
    },
    components: {
        CountryFlag
    },
    computed: {
        getLanguage() {
            switch (this.infoSeries.original_language) {
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
                    return this.infoSeries.original_language;
            }
        }
    }
}
</script>

<template>
    <div>
        <li>Titolo: {{ infoSeries.name }}</li>
        <li>Titolo originale: {{ infoSeries.original_name }}</li>
        <li>Lingua originale: {{ getLanguage }} <country-flag :country='getLanguage' size='small' /></li>
        <li>Voto: {{ infoSeries.vote_average }}</li>
    </div>
</template>