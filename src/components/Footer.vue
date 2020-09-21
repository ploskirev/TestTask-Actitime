<template>
  <footer class="footer">
    <div class="content">
      <Logo :colored="false" class="logo-wrapper" />
      <div class="links">
        <router-link to="/about" class="links__item">About Us</router-link>
        <router-link to="/policy" class="links__item">Privacy Policy</router-link>
      </div>
      <form class="subscribe-block" action="#" @submit.prevent="toRegistration">
        <input 
          type="email" 
          placeholder="Enter your email" 
          class="subscribe-block__input" 
          v-model="email"
        >
        <input 
          type="submit" 
          ref="submit" 
          value="Sign Up Now" 
          class="subscribe-block__submit" 
          @click.prevent="toRegistration"
        >
      </form>
    </div>
  </footer>
</template>

<script>
import Logo from './Logo.vue';

export default {
  name: 'Footer',
  components: {
    Logo
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    toRegistration() {
      this.$store.commit('setEmailFSU', this.email);
      (this.$route.path !== '/registration') && this.$router.push('/registration');
      this.email = '';
      this.$refs.submit.blur();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
@import '../assets/styles/mixins.scss';

.footer {
  display: flex;
  align-items: center;
  min-height: 197px;
  background-color: $primary;
}

.content {
  width: 1320px;
  margin: 0 auto;
  display: grid;
  justify-items: end;
  align-items: center;
  grid-template-columns: 49px 412px 1fr;
  justify-content: space-between;
  color: #fff;
}

.links {

  &__item {
    @include link(#fff, $secondaryHov, $secondary);
    margin-left: 54px;
    font-weight: 500;
    white-space: nowrap;
  }
}

.subscribe-block {
  display: flex;

  &__input {
    width: 419px;
    height: 48px;
    margin-right: 33px;
    border: none;
    border-radius: 4px;
    padding: 0 15px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 48px;
    font-weight: 400;
    color: #a9a0b6;

    &::placeholder {
      color: #a9a0b6;
    }

    &:focus {
      outline-color: $secondaryHov;
    }
  }

  &__submit {
    @include button(148px, 48px, 16px, #fff, $secondary, $secondaryHov);
    font-family: Roboto, sans-serif;
    width: 148px;
    height: 48px;
  }
}

@media (max-width: 1319px) {
  .footer {
    min-height: 177px;
    padding-top: 15px;
  }

  .content {
    width: 100vw;
    padding: 0 32px;
    grid-template-columns: 49px 171px 1fr;
    align-items: start;
  }

  .logo-wrapper {
    margin-top: 6px;
  }

  .links {
    display: flex;
    flex-direction: column;

    &__item {
      line-height: 2.8;
    }
  }

  .subscribe-block {
    &__input {
      width: 247px;
      margin-right: 38px;
    }
  }
}

@media (max-width: 991px) {
  .content {
    padding: 0 24px;
  }
}

@media (max-width: 767px) {
  .footer {
    padding: 58px 20px 52px 20px;
  }

  .content {
    width: 100%;
    padding: 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: stretch;
    grid-template-areas: 
      'logo links'
      'form form';
  }

  .logo-wrapper {
    grid-area: logo;
    margin-left: 4px;
  }

  .links {
    grid-area: links;
    justify-self: end;
    margin-bottom: 34px;

    &__item {
      line-height: 2.7;
    }
  }

  .subscribe-block {
    flex-direction: column;
    align-items: center;
    grid-area: form;

    &__input {
      width: 100%;
      margin: 0 auto 20px auto;
    }
  }
}
</style>
