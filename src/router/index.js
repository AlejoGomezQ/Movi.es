import Vue from "vue";
import VueRouter from "vue-router";

//Views
import Home from "@/views/Home";
import MovieDetail from "@/views/MovieDetail";
import MovieGenres from "@/views/MovieGenres";
import GenreDetail from "@/views/GenreDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "MovieDetail",
    component: MovieDetail,
  },
  {
    path: "/genres",
    name: "MovieGenres",
    component: MovieGenres,
  },
  {
    path: "/genre/:id/:name",
    name: "GenreDetail",
    component: GenreDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
