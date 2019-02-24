<template>
  <div>
    <div>
      <router-link to="/creator">Create new character here</router-link>
      <router-link to="/login">Login in to use one of your previous characters</router-link>
    </div>
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
