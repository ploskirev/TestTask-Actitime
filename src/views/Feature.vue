<template>
  <div class="moke-page feature-page">
    <h1 class="moke-heading feature-heading">{{topic.heading}}</h1>
    <p class="feature-text">{{topic.text}}</p>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  metaInfo: {
    title: 'actiTIME - Feature',
    meta: [
      {name: 'description', content: 'Feature page - actiTIME test task'},
      {name: 'keywords', content: 'actiTIME, Feature'}
    ]
  },
  data: function() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    topic: function() {
      return this.$store.getters.topicById(this.id);
    }
  }
}
</script>

<style lang="scss" scoped>
/* autoprefixer grid: autoplace */

@import '../assets/styles/variables.scss';

.feature-page {
  justify-content: flex-start;
  padding: 30px;

  @media (max-width: 8px) {
    & {
      padding: 30px 20px;
    }
  }

  .feature-heading {
    margin-bottom: 40px;
  }

  .feature-text {
    width: 80%;
    font-size: 18px;
    color: $text;
    line-height: 1.6;

    @media (max-width: 8px) {
      & {
        width: 100%;
      }
    }
  }
}
</style>
