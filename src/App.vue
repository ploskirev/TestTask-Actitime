<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import './assets/styles/variables.scss';

.moke-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.moke-heading {
  color: $accent;
}

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-rows: 90px 1fr 197px;
  min-height: 100vh;
  -webkit-tap-highlight-color: transparent;

  main {
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

    main {
      width: 100vw;
    }
  }
}

@media (max-width: 767px) {
  #app {
    grid-template-rows: 80px 1fr 344px;

    main {
      h1 {
        font-size: 35.5px;
      }
    }
  }
}
</style>
