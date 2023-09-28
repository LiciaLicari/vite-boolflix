<script>
import { store } from './store.js'


export default {
  name: "App",
  //emits: ['searchTitle'],

  data() {
    return {
      store
    }
  },

  mounted() {
    this.store.fetchMovie(this.store.baseURL);
  },
  methods: {
    getRate(rate) {
      const rate1to5 = Math.round(rate / 2);
      return rate1to5;
    }
  }


}
</script>

<template>
  <div class="container p-2 bg-dark">
    <form action="" @submit.prevent="store.fetchMovie">
      <input type="text" v-model="store.query" placeholder="Type here the title you are looking for">
      <button type="submit">
        Search
      </button>
    </form>
    <div class="row">
      <div class="col-3">
        <div class="card" v-for="movie in store.movieList">
          <p>original title : {{ movie.original_title }}</p>
          <p>title : {{ movie.title }}</p>
          <p>language : {{ movie.original_language }}</p>
          <p>rate : {{ movie.rate_average }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '../src/assets/scss/partials/variables' as *;
</style>
