<template>
  <div class="home">
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
  border: solid 2px red;
  height: 100vh;
  display: grid;
  align-items: center;
}
</style>
