<template>
  <div class="wrapper col-md-6 d-none d-lg-block d-md-block">
    <div class="center">
      <img class="img-fluid" :src="require('@/assets/' + src)" alt="" />
    </div>
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
.wrapper {
  position: relative;
}
.center {
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
}
</style>
