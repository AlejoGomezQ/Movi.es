<template>
  <div>
    <section class="genres-container">
      <h3>Generos</h3>
      <article class="genres-list d-flex row">
        <div
          class="genre col-12 col-lg-6 mb-3"
          v-for="(genre, id) in genres"
          :key="id"
        >
          <h4 :id="'id' + genre.id" class="genre-title">{{ genre.name }}</h4>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import TMDBApi from "@/api/requestTMDB";

// import axios from "axios";

//Styles
import "@/css/styles.css";

export default {
  name: "MovieGenres",

  data() {
    return {
      genres: {},
    };
  },

  created() {
    // axios
    //   .get(`${TMDBApi.BASE_URL}/genre/movie/list${TMDBApi.API_KEY}`)
    //   .then((res) => (this.genres = res.data.genres))
    //   .catch((err) => console.error(err));

    TMDBApi.get("/genre/movie/list")
      .then((res) => (this.genres = res.data.genres))
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
.genres-container {
  margin: 15px;
  height: 100vh;
}

.genres-list {
  margin-top: 30px;
}
.genre-title {
  margin-bottom: 8px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.genre-title::before {
  content: "••••";
  color: transparent;
  /* TODO: cambiar color por ID de la categoría */
  background-color: var(--idColor);
  border-radius: 17px;
  margin-right: 8px;
  width: 8px;
  height: 8px;
}
#id28 {
  --idColor: var(--yellow);
}
#id12 {
  --idColor: var(--red);
}
#id16 {
  --idColor: var(--green);
}
#id35 {
  --idColor: var(--lightBlue);
}
#id80 {
  --idColor: var(--darkBlue);
}
#id99 {
  --idColor: var(--purple-dark-1);
}
#id18 {
  --idColor: var(--purple-medium-1);
}
#id10751 {
  --idColor: var(--yellow);
}
#id14 {
  --idColor: var(--red);
}
#id36 {
  --idColor: var(--green);
}
#id27 {
  --idColor: var(--lightBlue);
}
#id10402 {
  --idColor: var(--darkBlue);
}
#id9648 {
  --idColor: var(--purple-dark-1);
}
#id10749 {
  --idColor: var(--purple-medium-1);
}
#id878 {
  --idColor: var(--yellow);
}
#id10770 {
  --idColor: var(--red);
}
#id53 {
  --idColor: var(--green);
}
#id10752 {
  --idColor: var(--lightBlue);
}
#id37 {
  --idColor: var(--darkBlue);
}
</style>
