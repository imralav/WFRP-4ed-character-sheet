<template>
  <section id="container">
    <Header></Header>
    <router-view/>
  </section>
</template>

<script>
  import Header from './components/Header';

  export default {
    name: 'App',
    components: {
      Header,
    },
  };
</script>

<style lang="scss">
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
