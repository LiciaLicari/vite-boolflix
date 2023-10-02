import axios from "axios";
import { reactive } from "vue";
export const store = reactive({
    baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=2110a6167040b5168cc3ef4a80d12b25',
    tv_url: 'https://api.themoviedb.org/3/search/tv?api_key=e10a79c4628cb2c1d4e74a07721be7c3&language=it_IT&query=',
    query: '',
    querySpan: '',
    movieList: [],
    tvSerieList: [],

    fetchMovie() {
        axios
            .get(this.baseURL, {params: {
                query: this.query
            }})
            .then(response => {
                //console.log('response...', response);
                this.querySpan = this.query;
                this.query = '';
                console.log(response.data.results);
                this.movieList = response.data.results;

            })
            .catch(error => {
                console.error(error);
            })
    },
    fetchtvSerie(tv_url) {
        axios
            .get(this.tv_url, {params: {
                query: this.query
            }})
            .then(response => {
                //console.log('response...', response);
                this.querySpan = this.query;
                this.query = '';
                console.log(response.data.results);
                this.tvSerieList = response.data.results;

            })
            .catch(error => {
                console.error(error);
            })
    }
})