<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'Card',
    props: {
        info: Object
    },
    components: {
        CountryFlag
    }
}
</script>

<template>
    <li>Titolo: {{ info.title }}</li>
    <li>Titolo originale: {{ info.original_title }}</li>
    <li>Lingua originale: {{ info.original_language }}</li>
    <li>Voto: {{ info.vote_average }}</li>
</template>