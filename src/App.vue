<template>
  <div id="app">
    <Header />
    <div role="main">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header, Footer
  }
}
</script>

<style lang="scss">
/* autoprefixer grid: autoplace */

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import './assets/styles/variables.scss';

.moke-page {
  height: calc(100vh - 287px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.moke-heading {
  color: $accent;
}

*:focus {
  outline: 1px solid transparentize($color: $third, $amount: .7);
}

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  display: -ms-grid;
  grid-template-rows: 90px 1fr 197px;
  -ms-grid-rows: 90px 1fr 197px;
  min-height: 100vh;
  min-width: 100vw;
  -webkit-tap-highlight-color: transparent;

  div[role="main"] {
    -ms-grid-row: 2;
    min-height: calc(100vh - 287px);
    align-self: center;
    justify-self: center;
    width: 1320px;
    margin: 0 auto;
    text-align: center;

    h1 {
      font-size: 40px;
      font-weight: 700;
    }
  }
}

@media (max-width: 1319px) {
  #app {
    grid-template-rows: 86px 1fr 177px;

    div[role="main"] {
      width: 100vw;
    }
  }
}

@media (max-width: 767px) {
  #app {
    grid-template-rows: 80px 1fr 344px;

    div[role="main"] {
      h1 {
        font-size: 35.5px;
      }
    }
  }
}
</style>
