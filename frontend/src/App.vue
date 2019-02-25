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
</style>
