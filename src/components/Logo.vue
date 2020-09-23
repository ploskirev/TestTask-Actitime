<template>
  <router-link to="/" class="logo-wrapper">
    <div class="logo" :class="{logo_colored: colored}"></div>
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    colored: Boolean
  }
}
</script>

<style lang="scss" scoped>

.logo-wrapper {
  display: block;
  height: 35px;
  width: 49px;
}

.logo {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 49px;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 20px;
    border-radius: 20px;
    background-color: #fff;
  }

  &::before {
    height: 20px;
  }

  &::after {
    height: 35px;
  }

  &_colored {
    &::before {
      background-color: #9C69E2;
    }

    &::after {
      background-color: #F063B8;
    }
  }
}
</style>
