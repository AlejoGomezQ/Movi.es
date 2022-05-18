<template>
  <div id="app">
    <MoviHeader :name="names" />
    <SideMenu />
    <MoviFooter />
    <router-view />
  </div>
</template>

<script>
import MoviHeader from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import MoviFooter from "@/components/Footer";

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
    };
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
