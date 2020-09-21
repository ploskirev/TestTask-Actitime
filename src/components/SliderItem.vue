<template>
  <article class="post" :class="{post_new: item.isNew}">
    <h2 class="post__heading">{{item.heading}}</h2>
    <p class="post__text">{{item.text}}</p>
    <router-link :to="`/feature/${item.id}`" class="post__link" tabindex="0">
      Learn more
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
        <path d="M15 15.0007L21 8.00073L15 1.00073" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 8.00073H1" stroke="#9C69E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </router-link>
    <div class="post__number">{{item.id}}</div>
  </article>
</template>

<script>
export default {
  name: 'SliderItem',
  props: ['item']
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
@import '../assets/styles/mixins.scss';

.post {
  width: 390px;
  height: 358px;
  margin-bottom: 10px;
  position: relative;
  background-color: $sliderAccent;
  border-radius: 50px;
  padding: 50px 60px 41px 114px;
  text-align: left;
  color: $accent;
  box-shadow: 0 10px 0 #F5BD3F;

  &__heading {
    font-size: 25px;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 28px;
  }

  &__text {
    height: 160px;
    overflow: hidden;
    font-size: 16px;
    line-height: 1.65;
    color: $text;
    margin-bottom: 21px;
  }

  &__link {
    @include link($accent, $accentHov, $third);
    width: 140px;
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 1.6;
    font-weight: 700;
    letter-spacing: .005em;

    svg {
      margin-left: 24px;
    }
  }

  &__number {
    position: absolute;
    top: 31px;
    left: -64px;
    font-size: 202px;
    font-weight: 700;
    color: $primary;
  }

  &_new::before {
    content: 'new';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 69px;
    height: 34px;
    border-radius: 0 0 4px 4px;
    position: absolute;
    left: 115px;
    top: -6px;
    background-color: $third;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
  }
}

@media (max-width: 991px) {
  .post {
    padding-left: 118px;
    padding-right: 58px;
  }
}

@media (max-width: 767px) {
  .post {
    width: 100%;
    max-width: 390px;
    padding: 50px 30px;

    &__number {
      display: none;
    }

    &_new::before {
      left: 10%;
    }
  }
}
</style>
