<template>
  <div class="progress_bar d-flex align-items-center px-1 py-3">
    <div class="progress col-9">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: `${percent}%` }"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="progress_bar_label text-end col-3">{{ qtd }} de 2</div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    qtd: Number,
  },
  data() {
    return {
      percent: this.qtd * 50,
    };
  },
};
</script>

<style scoped></style>
