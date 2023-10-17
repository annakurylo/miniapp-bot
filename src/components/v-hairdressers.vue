<template>
  <div class="v-hairdressers">
    <div class="v-hairdressers__list">
      <v-hairdressers-item
        v-for="hairdresser in hairdressers"
        :key="hairdresser.instagram"
        :hairdresser_data="hairdresser"
      />
    </div>
  </div>
</template>

<script>
import hairdressers from "./../../hairdressers";
import vHairdressersItem from "./v-hairdressers-item";

export default {
  name: "v-hairdressers",
  components: { vHairdressersItem },
  props: {},
  data() {
    return {
      hairdressers: hairdressers,
    };
  },
  methods: {},
  mounted() {
    const tg = window.Telegram.WebApp;
    tg.MainButton.text = "Показати перукарів в чаті";
    tg.MainButton.isVisible = true;
    tg.MainButton.color = "#ff13a7";
    tg.MainButton.textColor = "#000000"
    tg.onEvent("mainButtonClicked", () => {
      tg.sendData("hairderessers");
    });
  },
};
</script>

<style lang="scss" scoped>
.v-hairdressers {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
