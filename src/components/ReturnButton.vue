<template>
  <button class="btn my-4" @click="$store.commit('decreaseFildset', 1)">
    &#10094;
  </button>
</template>

<script>
export default {
  name: "ReturnButton",
  props: {},
};
</script>

<style lang="scss" scoped>
button {
  font-size: 20px;
  color: var(--primary);
  left: 0px;
  top: 0px;

  transition: all 0.2s ease-in-out;
  &:hover {
    background: var(--primary-active);
    color: white;
  }
}
</style>
