<template>
  <main class="row mt-5 ml-3">
    <div
      class="card-movie_container col-12 col-sm-6 col-lg-3"
      v-for="(m, index) in movies"
      :key="index"
    >
      <CardMovie :movie="m" />
    </div>
  </main>
</template>

<script>
import CardMovie from "@/components/Movie";

import TMDBApi from "@/api/requestTMDB";

// import axios from "axios";

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
    // axios
    //   .get(`${TMDBApi.BASE_URL}/trending/movie/day${TMDBApi.API_KEY}`)
    //   .then((res) => (this.movies = res.data.results))
    //   .catch((err) => console.error(err));

    TMDBApi.get("/trending/movie/day")
      .then((res) => (this.movies = res.data.results))
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped></style>
