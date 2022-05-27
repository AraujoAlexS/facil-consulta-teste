<template>
  <div class="container">
    <form action="#" class="d-flex">
      <fieldset class="fs border p-3">
        <h1 class="fs_title">Sobre o profissional</h1>
        <h2 class="fs_sub_title">Dados do profissional</h2>
        <div class="mb-3">
          <label for="nome" class="form-label"> Nome completo* </label>
          <input
            type="email"
            class="form-control col-sm-10"
            id="nome"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="cpf" class="form-label"> CPF* </label>
          <input
            type="email"
            class="form-control"
            id="cpf"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="celular" class="form-label"> Número celular* </label>
          <input
            type="email"
            class="form-control"
            id="celular"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="row g-3">
          <div class="d-flex flex-column col-sm">
            <label for="estado" class="form-label"> Estado* </label>
            <select name="estado" id="estado">
              <option value="Selecione" selected>Selecione</option>
            </select>
          </div>
          <div class="d-flex flex-column col-sm">
            <label for="cidade" class="form-label"> Cidade* </label>
            <select name="cidade" id="">
              <option value="Selecione" selected>Selecione</option>
            </select>
          </div>
        </div>
        <ProgressBar :qtd="1" />
      </fieldset>
      <fieldset class="fs border p-3">
        <h1 class="fs_title">Sobre o atendimento</h1>
        <h2 class="fs_sub_title">Detalhes do atendimento</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Nome completo*
          </label>
          <input
            type="email"
            class="form-control col-sm-10"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"> CPF* </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Número celular*
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="row g-3">
          <div class="d-flex flex-column col-sm">
            <label for="estado" class="form-label"> Estado* </label>
            <select name="estado" id="estado">
              <option value="Selecione" selected>Selecione</option>
            </select>
          </div>
          <div class="d-flex flex-column col-sm">
            <label for="cidade" class="form-label"> Cidade* </label>
            <select name="cidade" id="">
              <option value="Selecione" selected>Selecione</option>
            </select>
          </div>
        </div>
        <ProgressBar :qtd="2" />
      </fieldset>
      <fieldset class="fs border p-3">
        <h1 class="fs_title"></h1>
        <router-link to="/about_copy">About copy</router-link>
      </fieldset>
    </form>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
export default {
  name: "MultStepForm",
  components: {
    ProgressBar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  border: solid 1px black;
}
form {
}

.fs {
  background: white;
}
</style>
