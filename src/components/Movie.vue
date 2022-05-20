<template>
  <div>
    <div class="card mr-2 mb-3">
      <img
        class="card-img-top"
        :src="fullImageUrl"
        :alt="movie.original_title"
      />
      <div class="card-body">
        <h5 class="card-title">{{ movie.original_title }}</h5>
        <p class="card-text">
          {{ movie.overview }}
        </p>
        <a href="/movie-detail" class="btn btn-primary">Ver detaller</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMovie",

  data() {
    return {
      imageUrl: "https://image.tmdb.org/t/p/w500",
    };
  },

  props: {
    movie: {
      type: Object,
      required: true,
    },
  },

  computed: {
    fullImageUrl() {
      return `${this.imageUrl}${this.movie.poster_path}`;
    },
  },
};
</script>

<style scoped>
.card {
  width: 18rem;
}
</style>
