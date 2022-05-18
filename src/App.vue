<template>
  <div id="app">
    <MoviHeader :name="names" />
    <router-view />
  </div>
</template>

<script>
import MoviHeader from "@/components/Header";

export default {
  name: "app",

  components: {
    MoviHeader,
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
