<template>
  <div class="moke-page registration-page">
    <h1 class="moke-heading registration-heading">Registration page</h1>
    <form action="#" @submit.prevent="register" class="registration-form">
      <div class="registration-form__item">
        <label for="email" class="registration-form__label">email</label>
        <input 
          type="email" 
          id="email" 
          class="registration-form__input" 
          v-model="email" 
          placeholder="abc@abc.abc"
          tabindex="0"
        >
      </div>
      <div class="registration-form__item">
        <label for="pass" class="registration-form__label">password</label>
        <input 
          type="password" 
          id="pass" 
          class="registration-form__input" 
          v-model="password" 
          placeholder="min 6 characters"
          tabindex="0"
        >
      </div>
      <input 
        :disabled="inProcess" 
        type="submit" 
        value="Sign Up" 
        class="button" 
        @click="register"
        tabindex="0"
      >
      <div class="registration-form__err">{{error}}</div>
    </form>
    <div class="link-wrapper">
      or you can 
      <router-link 
        to="/login" 
        class="link-wrapper__link"
        tabindex="0"
      >
        Login
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  metaInfo: {
    title: 'actiTIME - Registration',
    meta: [
      {name: 'description', content: 'Registration page - actiTIME test task'},
      {name: 'keywords', content: 'actiTIME, Registration'}
    ]
  },
  data() {
    return {
      inProcess: false,
      name: 'Registration',
      email: this.$store.getters.emailFSU || '',
      password: ''
    }
  },
  computed: {
    error() {
      (this.$store.getters.error) && (this.inProcess = false);
      return this.$store.getters.error;
    },
    updatedEmail() {
      return this.$store.getters.emailFSU;
    }
  },
  watch: {
    updatedEmail() {
      this.email = this.updatedEmail;
    }
  },
  methods: {
    register() {
      this.inProcess = true;
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
@import '../assets/styles/mixins.scss';

.registration-page {
  justify-content: flex-start;
  padding-top: 30px;
}

.registration-heading {
  margin-bottom: 100px;
}

.registration-form {
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
</style>
