import { reactive } from vue;
import axios from 'axios';
export const state = reactive({
    url: 'https://api.themoviedb.org/3/search/movie?api_key=2110a6167040b5168cc3ef4a80d12b25&query=',
})