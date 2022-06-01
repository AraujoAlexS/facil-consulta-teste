<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-8">
        <h5 class="text-center pt-5">
          Obrigado por se juntar a nós
          <span>
            {{ $store.state.physicianInfo.nome.split(" ")[0] }}
          </span>
          !
        </h5>
        <img class="img-fluid" src="@/assets/pagina-4.jpg" />
      </div>
      <div class="col-12 col-md-4 d-grid">
        <FlipCard :front="'Saiba mais +'" :back="this.back" />
        <FlipCard :front="'Benfícios de trabalhar conosco'" :back="this.back" />
        <FlipCard :front="this.front" :back="this.back" />
      </div>
    </div>
  </div>
</template>

<script>
import FlipCard from "./FlipCard";
export default {
  components: {
    FlipCard,
  },
  data() {
    return {
      front: "Hover-me",
      back: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac est placerat, venenatis tellus a, pellentesque magna.",
    };
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  max-width: 900px;
  padding: 0;
  background: white;
  border-radius: 40px;
  overflow: hidden;
}

span {
  color: var(--primary);
  font-weight: bold;
}
</style>
