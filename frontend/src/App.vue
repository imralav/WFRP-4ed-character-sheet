<template>
  <section id="container">
    <Header></Header>
    <transition name="route-fade" appear mode="out-in">
      <router-view/>
    </transition>
  </section>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Dosis:400,700');

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'Dosis', sans-serif;
  }

  #container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 100;
      pointer-events: none;
      box-shadow: inset 0 0 150px -30px rgb(110, 20, 29);
    }
  }

  .route-fade-enter-active {
    transition: opacity .5s ease-out;
  }

  .route-fade-leave-active {
    transition: opacity .3s ease-in;
  }

  .route-fade-enter, .route-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
