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
