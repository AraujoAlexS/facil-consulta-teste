<template>
  <div class="main">
    <MultiStepForm />
  </div>
</template>

<script>
// @ is an alias to /src
import MultiStepForm from "@/components/MultiStepForm.vue";

export default {
  name: "Home",
  components: {
    MultiStepForm,
  },
};
</script>

<style lang="scss">
.main {
  min-height: 100vh;
  height: auto;
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>
