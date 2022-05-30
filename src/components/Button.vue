<template>
  <div class="d-grid gap-2">
    <button class="btn btn-primary" type="button">Próximo</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {},
};
</script>

<style scoped lang="scss">
button {
  background: var(--primary);
  border: none;
  border-radius: 20px;
  color: white;
  text-transform: uppercase;

  &:hover {
    background: var(--primary-dark);
  }

  &:focus {
    background: var(--primary-active);
  }
}
</style>
