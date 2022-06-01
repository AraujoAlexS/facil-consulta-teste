<script></script>
<template>
  <router-view />
</template>

<style lang="scss">
:root {
  --primary: #483698;
  --primary-dark: #261d52;
  --primary-active: #260c97;
  --primary-shadow: #48369850;
  --secondary: #ffe766;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: var(--secondary);
  width: 100vw;
  height: auto;
  position: relative;
  text-align: left !important;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
