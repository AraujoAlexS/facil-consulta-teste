<template>
  <div class="col-md-6 d-none d-lg-block d-md-block">
    <img class="img-fluid" :src="require('@/assets/' + src)" alt="" />
  </div>
</template>

<script>
export default {
  name: "Image",
  props: {
    src: String,
  },
};
</script>

<style lang="scss" scoped>
img {
  margin-top: 20%;
}
</style>
