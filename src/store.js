import { reactive } from 'vue';

export const store = reactive({
    config: {
        urlApi: 'https://api.themoviedb.org/3',
        searchMovie: '/search/movie',
        searchSeries: '/search/tv',
        apiKey: 'e99307154c6dfb0b4750f6603256716d'
    },
    searchKey: '',
    resultSearchFilm: [],
    resultSearchSeries: []
})