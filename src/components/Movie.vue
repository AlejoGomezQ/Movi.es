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
        <a @click.prevent="goToMovie(movie.id)" class="btn">Ver detalle</a>
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

  filters: {
    textLength(value) {
      return `${value.subString(0, 100)}...`;
    },
  },

  computed: {
    fullImageUrl() {
      return `${this.imageUrl}${this.movie.poster_path}`;
    },
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
.card {
  width: 18rem;
}

.btn {
  border: 1px solid #ff535b;
  color: #ff535b;
}

.btn:hover {
  background: #ff535b;
  color: #ffffff;
}
</style>
