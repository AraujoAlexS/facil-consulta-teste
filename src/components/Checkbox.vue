<template>
  <div class="form-check my-3 px-5 py-3 checkbox">
    <input
      class="form-check-input"
      type="checkbox"
      :value="this.value"
      :id="this.id"
    />
    <label class="form-check-label" for="dinheiro"> {{ this.label }} </label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    id: String,
    value: String,
    label: String,
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  background: rgb(245, 245, 245);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
input {
  border: solid 1px var(--primary);
  font-size: 14px;
  margin-left: 20px;

  &:checked {
    background: var(--primary);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 1px 2px var(--primary-shadow);
  }
}
label {
  margin-left: 30px;
}
</style>
