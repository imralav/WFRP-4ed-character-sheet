<template>
  <router-link :to="to">
    <div class="wrapper">
        <slot>Go to {{to}}</slot>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'moduleLink',
    props: ['to'],
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    max-width: 200px;
    max-height: 200px;
    padding: 25px;
    border: 1px solid #8d1a25;
    border-radius: 15px;
    overflow-wrap: break-spaces;

    a {
      color: #8d1a25;
      font-size: 20px;
      text-decoration: none;
      text-align: center;
    }

    &:hover {
      border: 2px solid #b62230;

      a {
        color: #b62230;
      }
    }
  }
</style>
