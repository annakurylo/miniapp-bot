<template>
  <div class="v-navigation">
    <div class="navigation">
        <router-link :to="{ name: 'hairdressers' }">
            <a href="">Перукарі</a>
        </router-link>
        <router-link :to="{ name: 'services' }">
            <a href="">Послуги та ціни</a>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: "v-navigation",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.v-navigation {
}
</style>
