<template>
  <div>
    <div class="card mr-2 mb-3">
      <slot name="movieImage"></slot>
      <div class="card-body">
        <slot name="movieTitle"></slot>
        <slot name="movieOverview"></slot>
        <slot name="btnMovieDetail"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMovie",
};
</script>

<style scoped>
.card {
  width: 18rem;
}
</style>
