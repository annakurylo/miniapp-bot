<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  padding: 0;
  max-width: 425px;
  margin: 0 auto;
  font-family: Cormora;
  background-color: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
}
</style>
