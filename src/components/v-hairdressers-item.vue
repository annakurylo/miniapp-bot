<template>
  <div class="v-hairdressers-item">
    <div class="v-hairdressers-item__general">
      <div class="v-hairdressers-item__general-img">
        <img :src="imgLink" />
      </div>
      <div class="v-hairdressers-item__general-name">
        {{ hairdresser_data.name }}
      </div>
    </div>
    <div class="v-hairdressers-item__about">
      <div class="v-hairdressers-item__about-description">
        <div class="v-hairdressers-item__about-description-text">
          {{ hairdresser_data.description }}
        </div>
        <div class="v-hairdressers-item__about-description-insta">
          <a
            :href="hairdresser_data.instagram"
            class="v-hairdressers-item__about-description-insta-link"
          >
            Instagram
          </a>
        </div>
      </div>

      <div class="v-hairdressers-item__about-services">
        <div class="v-hairdressers-item__about-services-text">My services:</div>
        <div class="v-hairdressers-item__about-services-list">
          {{ getServices }}
        </div>
      </div>
      <div class="v-hairdressers-item__about-workdays">
        <div class="v-hairdressers-item__about-workdays-text">Workdays:</div>
        <ul class="v-hairdressers-item__about-workdays-list">
          <li v-for="(day, idx) in getWorkdays" :key="idx">{{ day }}</li>
        </ul>
      </div>
    </div>
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
    getServices() {
      return (
        this.hairdresser_data.services.map((s) => s.toLowerCase()).join(", ") +
        "."
      );
    },
    getWorkdays() {
      return this.hairdresser_data.workDays;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-hairdressers-item {
  display: flex;
  gap: 10px;
  box-shadow: 0 0 8px 0 #000000;

  &__general {
    flex: 0 0 40%;
    display: flex;
    flex-direction: column;
    //gap: 10px;
    &-img {
      position: relative;
      min-height: 270px;
      border: 3px solid black;
    }

    &-name {
      text-align: center;
      background-color: black;
      color: #ff13a7;
      padding: 10px;
    }
  }
  &__about {
    //border: 3px solid #ff13a7;
    padding: 0 0 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    &-description {
      display: flex;
      flex-direction: column;
      gap: 5px;

      &-text {
        background-color: #ff13a7;
        color: rgb(0, 0, 0);
        font-style: italic;
        border: 3px solid black;
        padding: 10px;
      }
      &-insta {
        padding: 0px;
        justify-content: center;
        display: flex;
        &-link {
          text-decoration: none;
          color: #ff13a7;
          background-color: #000000;
          padding: 10px 20px;
          border-radius: 10px;
        }
      }
    }

    &-services {
      display: flex;
      flex-direction: column;
      padding: 0 1px 0 0;
      &-text {
        //margin: 0 0 10px 0;
        text-align: center;

        color: #ff13a7;
        font-weight: 700;
      }
      &-list {
      }
    }

    &-workdays {
      display: flex;
      flex-direction: column;
      &-text {
        text-align: center;
        color: #ff13a7;
        font-weight: 700;
      }
      &-list {
        margin: 0;
        padding: 0;
        //padding: 0px 0 10px 0px;
        list-style-type: none;
      }
      &-list li {
        background: url("./../assets/icons/forward-button.png") 0 1px no-repeat;
        padding: 0px 0px 0px 20px;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
}
</style>
