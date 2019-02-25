<template>
  <div class="wrapper">
      <module-link to="/creator">Create new character here</module-link>
      <module-link to="/login">Log in in to use one of your previous characters</module-link>
  </div>
</template>

<script>
  import ModuleLink from './ModuleLink';

  export default {
    name: 'home',
    components: {
      ModuleLink,
    },
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
