<template>
  <div id="app">
    <MoviHeader :name="names" />
    <SideMenu />
    <router-view />
    <MoviFooter />
  </div>
</template>

<script>
import MoviHeader from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import MoviFooter from "@/components/Footer";

import API_URL from "@/api/requestTMDB";

import axios from "axios";

export default {
  name: "app",

  components: {
    MoviHeader,
    SideMenu,
    MoviFooter,
  },

  data() {
    return {
      names: ["Carlos Marin", "Pedro Perez", "Maria Cañas", "Julian Galvez"],

      movies: {},
    };
  },

  created() {
    axios
      .get(`${API_URL}`)
      .then((res) => (this.movies = res))
      .catch((err) => console.error(err));
  },
};
</script>

<style>
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
