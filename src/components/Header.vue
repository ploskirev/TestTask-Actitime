<template>
  <header class="header">
    <Logo :colored="true" />
    <input type="checkbox" id="menu-toggler" v-model="menuToggle">
    <div class="nav-btn-wrapper">
      <nav class="main-menu">
        <input type="checkbox" id="submenu-toggler" v-model="submenuToggle">
        <ul class="main-menu__general">
          <li class="main-menu__item" @click="updateMenu">
            <router-link class="main-menu__link" to="/about">about</router-link>
          </li>
          <li class="main-menu__item main-menu__item_subcontainer">
            <label for="submenu-toggler" class="main-menu__submenu-label">
              Help
              <div class="main-menu__arrow"></div>
            </label>
            <ul class="main-menu__sub">
              <li class="main-menu__item" @click="updateMenu">
                <router-link 
                  class="main-menu__link" 
                  to="/userguide"
                >
                  User&nbsp;Guide
                </router-link>
              </li>
              <li class="main-menu__item" @click="updateMenu">
                <router-link 
                  class="main-menu__link" 
                  to="/support"
                >
                  Contact&nbsp;Support
                </router-link>
              </li>
            </ul>
          </li>
          <li class="main-menu__item" @click="updateMenu">
            <router-link class="main-menu__link" to="/">Features</router-link>
          </li>
        </ul>
      </nav>
      <div class="button-wrapper" @click="updateMenu">
        <router-link 
          to="/registration" 
          class="button"
        >
          {{user ? 'Logout' : 'Sign Up'}}
        </router-link>
      </div>
    </div>
    <label for="menu-toggler" class="header__burger">
      <div></div>
    </label>
  </header>
</template>

<script>
import Logo from './Logo.vue';

export default {
  name: 'Header',
  components: {
    Logo
  },
  data() {
    return {
      menuToggle: false,
      submenuToggle: false
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    updateMenu() {
      this.menuToggle = false;
      this.submenuToggle = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
@import '../assets/styles/mixins.scss';

@keyframes depth {
  0% {
    z-index: -1;
  }
  99% {
    z-index: -1;
  }
  100% {
    z-index: 1;
  }
}

#menu-toggler,
#submenu-toggler {
  display: none;
}

.header {
  display: grid;
  grid-template-columns: 49px 1fr;
  justify-items: end;
  align-items: center;
  align-content: end;
  min-height: 90px;
  width: 1320px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;

  &__burger {
    display: none;
  }
}

.nav-btn-wrapper {
  display: grid;
  grid-template-columns: 270px 1fr;
  width: 100%;
  justify-items: end;
  padding-left: 130px;
  align-items: center;
}
    
.main-menu {
  &__general {
    display: flex;
    color: $accent;
  }

  &__submenu-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  &__arrow {
    display: block;
    width: 7px;
    height: 7px;
    margin-left: 5px;
    margin-bottom: 5px;
    border-radius: 1px;
    border: 2px solid $accent;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
    transition: transform .3s;
  }

  &__sub {
    display: none;
    position: absolute;
    top: calc(100%);
    left: -23px;
    border: 1px solid $primary;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 0 #E2CEFE;
    font-weight: 400;
    white-space: nowrap;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 18px;
      height: 18px;
      border: 1px solid $primary;
      border-right: none;
      border-bottom: none;
      top: calc(0px - 10px);
      left: 59px;
      background-color: #fff;
      transform: rotate(45deg);
    }

    .main-menu__item {
      padding: 0;
      font-size: 16px;
      line-height: 220%;
      color: $accent;

      &:hover {
        color: $accentHov;
      }
    }
  }

  &__item {
    display: flex;
    align-items: center;
    position: relative;
    padding: 20px 0;
    cursor: pointer;
    transition: color .3s;

    @media (min-width: 1320px) {
      &:not(:last-child) {
        margin-right: 51px;
      }
    }

    &:hover {
      color: $accentHov;

      @media (min-width: 1320px) {
        .main-menu__arrow {
          transform: rotate(225deg);
          border-color: $accentHov;
        }

        & > .main-menu__sub {
          display: block;
        }
      }
    }
  }
}

.button {
  @include button (180px, 60px, 18px, #fff, $primary, $primaryHov);
}

@media (max-width: 1319px) {
  .header {
    position: relative;
    width: 100vw;
    min-height: 86px;
    padding: 0 31px;
    grid-template-columns: 49px 1fr;
    align-content: center;

    &__burger {
      display: block;
      position: relative;
      width: 36px;
      height: 24px;
      cursor: pointer;

      &::before,
      &::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        width: 36px;
        height: 3px;
        background-color: $accent;
        transition: transform .3s;
        transform-origin: center;
      }

      &::before {
        top: 0;
      }

      &::after {
        bottom: 0;
      }

      & > div {
        position: absolute;
        top: calc(50% - 1.5px);
        width: 36px;
        height: 3px;
        background-color: $accent;
        opacity: 1;
        transition: opacity .2s;
      }
    }
  }

  .nav-btn-wrapper {
    display: block;
    position: absolute;
    z-index: 2;
    width: 100vw;
    top: 85px;
    left: -100vw;
    background-color: #fff;
    padding-left: 0;
    box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.15);
    transition: left .8s;
  }

  .main-menu {
    &__general {
      display: grid;
      grid-auto-rows: minmax(75px, auto);
    }

    &__item {
      height: 75px;
      padding-left: 32px;
      padding-right: 32.5px;
      border-bottom: 1px solid #d6b9ff;
      background-color: #fff;
      margin-right: 0;
      font-size: 27px;
      transition: margin-bottom .5s;

      &:first-child {
        border-top: 1px solid #d6b9ff;
      }
    }

    &__link {
      width: 100%;
      line-height: 72.5px;
    }

    &__arrow {
      width: 13px;
      height: 13px;
      border-width: 4px;
      transform: translateY(5px) rotate(-45deg);
    }

    &__submenu-label {
      width: 100%;
      line-height: 75px;
      cursor: pointer;
    }
  }

  .button-wrapper {
    height: 148px;
    display: flex;
    align-items: center;

    .button {
      margin: auto;
    }
  }

  #menu-toggler:checked {
    & ~ label.header__burger {
      &::before {
        transform: translateY(14px) rotate(45deg);
      }

      &::after {
        transform: translateY(-7px) rotate(-45deg);
      }

      & > div {
        opacity: 0;
      }
    }

    & + .nav-btn-wrapper {
      left: 0;

      .main-menu {
        &__sub {
          position: absolute;
          z-index: -1;
          display: block;
          left: 0;
          top: -100%;
          width: 100%;
          border-radius: 0;
          border: none;
          border-top: 1px solid #d6b9ff;
          border-bottom: 1px solid #d6b9ff;
          box-shadow: none;
          padding: 0;
          transition: all .5s;

          .main-menu__item {
            border: none;
            background-color: #f9f4ff;
            padding-left: 62px;
            font-size: 25px;
            height: 72.5px;

            &:hover {
              color: $accentHov;
            }
          }

          &::after {
            display: none;
          }
        }

        #submenu-toggler:checked {
          & + .main-menu__general {
            .main-menu__item_subcontainer {
              margin-bottom: 148px;

              .main-menu__arrow {
                transform: rotate(45deg);
              }
              
              & .main-menu__sub {
                transform: translateY(148px);
                animation: depth 0.5s linear forwards;
                z-index: 1;
              }
            }
          }
        } 
      }
    }
  }
}

@media (max-width: 991px) {
  .header {
    padding: 0 24px;
  }
}

@media (max-width: 767px) {
  .header {
    min-height: 80px;
    padding: 0 20px;
  }
}
</style>
