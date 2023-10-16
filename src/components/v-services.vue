<template>
  <div class="v-services">
    <div class="v-services__list">
      <v-services-item
        v-for="service in services"
        :key="service.group"
        :service_data="service"
      />
    </div>
  </div>
</template>

<script>
import services from "./../../services";
import vServicesItem from "./v-services-item";
export default {
  name: "v-services",
  components: { vServicesItem },
  props: {},
  data() {
    return {
      services: services,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.v-services {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
