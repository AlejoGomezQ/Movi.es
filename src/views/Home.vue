<template>
  <main class="row mt-5 ml-3">
    <div
      class="card-movie_container col-12 col-sm-6 col-lg-3"
      v-for="(m, index) in movies"
      :key="index"
    >
      <CardMovie>
        <img
          slot="movieImage"
          class="card-img-top"
          :src="'https://image.tmdb.org/t/p/w500' + m.poster_path"
          :alt="m.original_title"
        />
        <h5 slot="movieTitle" class="card-title">{{ m.original_title }}</h5>
        <p slot="movieOverview" class="card-text">{{ m.overview }}</p>
        <a slot="btnMovieDetail" @click.prevent="goToMovie(m.id)" class="btn">Ver detalle</a>
      </CardMovie>
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
      imageUrl: "https://image.tmdb.org/t/p/w500",
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

  methods: {
    goToMovie(id) {
      this.$router.push({
        name: "MovieDetail",
        params: {
          id,
        },
      });
    },
  },
};
</script>

<style scoped>
.btn {
  border: 1px solid #ff535b;
  color: #ff535b;
}

.btn:hover {
  background: #ff535b;
  color: #ffffff;
}
</style>
