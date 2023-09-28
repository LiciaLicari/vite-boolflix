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
  }


}
</script>

<template>
  <div class="container p-2">
    <div class="d-flex align-items-center justify-content-center" @submit.prevent="store.fetchMovie">
      <input type="text" v-model="store.query" class="form-control" placeholder="Type here the title you are looking for">
      <button class="ms-3 btn btn-primary @click.prevent="
        placeholder="Type the title you are looking for">Search</button>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="card" v-for="movie in store.movieList">
          <p>original title : {{ movie.original_title }}</p>
          <p>title : {{ movie.title }}</p>
          <p>language : {{ movie.original_language }}</p>
          <p>rate : {{ movie.vote_average }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '../src/assets/scss/partials/variables' as *;
</style>
