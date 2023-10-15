<template>
  <div class="v-hairdressers-item">
    hello
    <img class="v-hairdressers-item__img" :src="imgLink" />
  </div>
</template>

<script>
export default {
  name: "v-hairdresser-item",
  components: {},
  props: {
    hairdresser_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    imgLink() {
      const FILENAME = this.hairdresser_data.image;
      return require(`./../assets/img/${FILENAME}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-hairdressers {
}
</style>
