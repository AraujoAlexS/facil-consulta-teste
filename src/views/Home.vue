<template>
  <div class="home">
    <MultiStepForm msg="Welcome to Your Vue.js App" />
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
