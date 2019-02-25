<template>
  <router-link to="/">
    <header>
      <h1>Warhammer Fantasy Roleplay</h1>
      <h2>4th edition</h2>
    </header>
  </router-link>
</template>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }
  header {
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    h1, h2 {
      margin: 2px 0;
      font-weight: bold;
    }

    h1 {
      font-size: 45px;
      color: #baac2a;
      text-shadow: -1px 0 #8d1a25, 0 1px #8d1a25, 1px 0 #8d1a25, 0 -1px #8d1a25;
    }

    h2 {
      font-size: 40px;
      color: #858890;
      text-shadow: -1px 0 #8d1b1f, 0 1px #8d1b1f, 1px 0 #8d1b1f, 0 -1px #8d1b1f;
    }

    &:hover {
      h1 {
        color: #c9ba2d;
      }
      h2 {
        color: #a2a5af;
      }
    }
  }
</style>
