<template>
  <div class="v-services-item">
    <div class="v-services-item__group">
      <div class="v-services-item__group-name">
        {{ service_data.group }}
      </div>
      <div class="v-services-item__group-gap">
        <div
        v-for="service in service_data.pool"
        :key="service.service"
        class="v-services-item__group-list"
      >
        <div class="v-services-item__group-list-name">{{service.service}}</div>
        <div class="v-services-item__group-list-price">{{service.price }}₴</div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-services-item",
  components: {},
  props: {
    service_data: {
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
};
</script>

<style lang="scss" scoped>
.v-services-item {
    &__group {
        display: flex;
        flex-direction: column;
        gap: 10px;
        box-shadow: 0 0 8px 0 #000000;
        padding: 0 0 10px 0;
        &-name {
            background-color: #ff13a7;
            color: #000000;
            padding: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
            border: 3px solid black;

        }
        &-gap {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        &-list {
            padding: 0 5px;
            overflow: hidden;
            &-name {
                font-style: italic;
            }
            &-name:first-child {
                float: left;
            }
            &-price {
                color: #ffffff;
                background-color:#000000;
                padding: 2px 10px;
                border-radius: 10px; 
                margin: 0 0 0 5px;
            }
            &-price:last-child {
                float: right;
            }
            div:first-child:after, div:last-child:before {
                content: "";
                display: inline-block;
                width: .25em;
              }

        }
        &-list:after {
            content: "\A0";
            display: block;
            overflow: hidden;
            border-bottom: 2px dotted #ff13a7;
            margin-top: -4px;
        }
    }
}
</style>
