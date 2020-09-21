<template>
  <div class="moke-page login-page">
    <h1 class="moke-heading login-heading">Login page</h1>
    <div class="logout-wrapper" v-if="user">
      <h2 class="username">Hello, {{user}}</h2>
      <button class="button" @click="logout">Logout</button>
    </div>
    <form action="#" class="login-form" @submit.prevent="login" v-else>
      <div class="login-form__item">
        <label for="email" class="login-form__label">email</label>
        <input 
          type="email" 
          id="email" 
          class="login-form__input" 
          v-model="email" 
          placeholder="abc@abc.abc"
          tabindex="0"
        >
      </div>
      <div class="login-form__item">
        <label for="pass" class="login-form__label">password</label>
        <input 
          type="password" 
          id="pass" 
          class="login-form__input" 
          v-model="password" 
          placeholder="min 6 characters"
          tabindex="0"
        >
      </div>
      <input 
        :disabled="inProcess" 
        type="submit" 
        value="Login" 
        class="button" 
        @click.prevent="login"
        tabindex="0"
      >
      <div class="login-form__err">{{error}}</div>
    </form>
    <div class="link-wrapper">
      or you can 
      <router-link 
        to="/registration" 
        class="link-wrapper__link"
        tabindex="0"
      >
        Sign Up
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  metaInfo: {
    title: 'actiTIME - Login',
    meta: [
      {name: 'description', content: 'Login page - actiTIME test task'},
      {name: 'keywords', content: 'actiTIME, Login'}
    ]
  },
  data: () => ({
    email: '',
    password: '',
    inProcess: false
  }),
  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      (this.$store.getters.error) && (this.inProcess = false);
      return this.$store.getters.error;
    }
  },
  methods: {
    login() {
      this.inProcess = true;
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      });
    },
    logout() {
      this.inProcess = false;
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
@import '../assets/styles/mixins.scss';

.login-page {
  justify-content: flex-start;
  padding-top: 30px;
}

.login-heading {
  margin-bottom: 100px;
}

.login-form {
  width: 500px;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    & {
      width: 90%;
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    color: $text;

    @media (max-width: 767px) {
      & {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }

  &__label {
    flex: 1 1 200px;
    text-align: left;

    @media (max-width: 767px) {
      & {
        flex: 0 0 16px;
        margin-bottom: 10px;
      }
    }
  }

  &__input {
    flex: 2 1 350px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid $primary;
    padding: 0 10px;

    &::placeholder {
      color: #a9a0b6;
    }

    &:focus {
      outline-color: $secondaryHov;
    }

    @media (max-width: 767px) {
      & {
        flex: 0 0 40px;
        width: 100%;
      }
    }
  }

  &__err {
    min-height: 40px;
    font-size: 12px;
    color: tomato;
  }
}

.link-wrapper {
  color: $text;
  font-size: 14px;
  margin-bottom: 30px;

  &__link {
    @include link($secondary, $secondaryHov, $secondary);
    font-weight: 700;
  }
}

.logout-wrapper {
  width: 500px;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    & {
      width: 90%;
    }
  }
}

.username {
  margin-bottom: 30px;
  color: $text;
}

.button {
  @include button(30%, 40px, 16px, #fff, $primary, $primaryHov);
  align-self: center;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    & {
      width: 150px;
    }
  }
}
</style>
