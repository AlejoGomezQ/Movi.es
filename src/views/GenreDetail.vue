<template>
  <div>
    <h1 class="m-4">{{ this.genre.name }}</h1>
    <main class="row mt-5 ml-3">
    <div
      class="card-movie_container col-12 col-sm-6 col-lg-3"
      v-for="(m, index) in genreDetail"
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
  </div>
</template>

<script>
import CardMovie from "@/components/Movie";

import TMDBApi from "@/api/requestTMDB";

export default {
  name: "GenreDetail",

  components: {
    CardMovie
  },

  data() {
    return {
      genreDetail: "",
      genre: {
        id: "",
        name: ""
      },
    };
  },

  created() {
    this.genre.id = this.$route.params.id;
    this.genre.name = this.$route.params.name;
  },

  mounted() {
    TMDBApi.get("/discover/movie", {
      params: {
        with_genres: this.genre.id,
      },
    })
      .then((res) => (this.genreDetail = res.data.results))
      .catch((err) => console.error(err));
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
