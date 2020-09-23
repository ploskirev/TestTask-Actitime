<template>
  <section class="features">
    <h1 class="main-heading">Features</h1>
    <p class="description">
      Some of&nbsp;the features and advantages that we&nbsp;provide for those
      of&nbsp;you who store data in&nbsp;this Data Warehouse.
    </p>
    <Slider />
  </section>
</template>

<script>
import Slider from '../components/Slider.vue';

export default {
  name: 'Home',
  components: {
    Slider
  },
  metaInfo: {
    title: 'actiTIME - Features',
    meta: [
      {name: 'description', content: 'Features page - actiTIME test task'},
      {name: 'keywords', content: 'actiTIME, Features'}
    ]
  }
};
</script>

<style lang="scss" scoped>
/* autoprefixer grid: autoplace */

@import '../assets/styles/variables.scss';

.features {
  padding: 130px 0 151px 0;
}

.main-heading {
  margin-bottom: 41px;
  color: $accent;
}

.description {
  width: 650px;
  margin: 0 auto 57px auto;
  font-size: 23px;
  font-weight: 400;
  line-height: 1.65;
  color: $text;
}

@media (max-width: 1319px) {
  .features {
    padding-top: 51px;
    padding-bottom: 92px;
  }
}

@media (max-width: 767px) {
  .features {
    padding-top: 57px;
    padding-bottom: 73px;
  }

  .main-heading {
    margin-bottom: 45px;
    padding: 0 20px;
  }

  .description {
    width: 100%;
    padding: 0 20px;
    margin-bottom: 54px;
  }
}
</style>
