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
import axios from "axios";

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
  async mounted() {
    const tg = window.Telegram.WebApp;
    tg.MainButton.text = "Continue";
    tg.MainButton.isVisible = true;
    tg.MainButton.color = "#000000";
    tg.MainButton.textColor = "#ff13a7";

    tg.onEvent("mainButtonClicked", () => {
      axios.post(
        "https://localhost:5000/sendData",
        {
          text: "continue",
        }
      );
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
