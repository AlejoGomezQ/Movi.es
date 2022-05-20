<template>
  <main class="row mt-5 ml-3">
    <div class="card-movie_container col-12 col-sm-6 col-lg-3" v-for="(m, index) in movies" :key="index">
      <CardMovie :movie="m" />
    </div>
  </main>
</template>

<script>
import CardMovie from "@/components/Movie";

import API_URL from "@/api/requestTMDB";

import axios from "axios";

export default {
  name: "Home",

  components: {
    CardMovie,
  },

  data() {
    return {
      movies: [],
    };
  },

  created() {
    axios
      .get(`${API_URL}`)
      .then((res) => (this.movies = res.data.results))
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped></style>
