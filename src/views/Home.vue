<template>
  <div class="home border">
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
.home {
  min-height: 100vh;
  height: auto;
  display: grid;
  align-items: center;
}
</style>
