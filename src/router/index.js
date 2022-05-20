import Vue from "vue";
import VueRouter from "vue-router";

//Views
import Home from "@/views/Home";
import MovieDetail from "@/views/MovieDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie-detail",
    name: "MovieDetail",
    component: MovieDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
