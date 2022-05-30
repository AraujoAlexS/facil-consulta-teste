<template>
  <div class="prime-container container-lg">
    <form action="#">
      <fieldset class="fs p-3" v-if="$store.state.fieldset === 1">
        <div class="row border">
          <div class="col-12 col-md-6">
            <h1 class="fs_title">Sobre o profissional</h1>
            <h2 class="fs_sub_title">Dados do profissional</h2>
            <div class="mb-4">
              <label for="nome" class="form-label"> Nome completo* </label>
              <input type="text" class="form-control col-sm-10" id="nome" />
              <span class="validation" id="nome-validation"></span>
            </div>
            <div class="mb-4 d-grid col-10">
              <label for="cpf" class="form-label"> CPF* </label>
              <input
                type="text"
                class="form-control"
                id="cpf"
                v-mask="'###.###.###-##'"
              />
              <span class="validation" id="cpf-validation"></span>
            </div>
            <div class="my-4 d-grid col-10">
              <label for="celular" class="form-label"> Número celular* </label>
              <input
                type="text"
                class="form-control"
                id="celular"
                v-mask="['(##) #####-####', '(##) ####-####']"
              />
              <span class="validation" id="celular-validation"></span>
            </div>
            <div class="row g-3">
              <div class="d-flex flex-column col-sm">
                <label for="estado" class="form-label"> Estado* </label>
                <select
                  name="estado"
                  id="estado"
                  class="form-select"
                  @change="getCities($event.target.value)"
                >
                  <option value="#" selected>Selecione</option>
                  <option
                    v-for="item in states"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.nome }}
                  </option>
                </select>
                <span class="validation" id="estado-validation"></span>
              </div>
              <div class="d-flex flex-column col-sm">
                <label for="cidade" class="form-label"> Cidade* </label>
                <select name="cidade" id="cidade" class="form-select">
                  <option value="#" selected>Selecione</option>
                  <option
                    v-for="item in cities"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.nome }}
                  </option>
                </select>
                <span class="validation" id="cidade-validation"></span>
              </div>
            </div>
            <ProgressBar :qtd="1" />
            <Button @click="validatePageOne" />
            <!--@click="$store.commit('increaseFieldset')"-->
          </div>
          <Image :src="'desktop-pagina-1.png'" />
        </div>
      </fieldset>
      <fieldset class="fs border p-3" v-if="$store.state.fieldset === 2">
        <div class="row">
          <div class="col-12 col-md-6">
            <h1 class="fs_title">Sobre o atendimento</h1>
            <h2 class="fs_sub_title">Detalhes do atendimento</h2>
            <div class="my-4">
              <label for="especialidade" class="form-label">
                Especialidade*
              </label>
              <select class="form-select" id="especialidade">
                <option value="#">Selecione</option>
                <option
                  v-for="item in specialties"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.nome }}
                </option>
              </select>
            </div>
            <div class="my-4">
              <label for="preco" class="form-label">
                Informe o preço da consulta*
              </label>
              <div class="input-group">
                <span class="input-group-text text-white" id="basic-addon1">
                  R$
                </span>
                <input type="text" class="form-control" id="preco" />
              </div>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="dinheiro"
                id="dinheiro"
              />
              <label class="form-check-label" for="dinheiro">
                Em dinheiro
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="pix"
                id="pix"
              />
              <label class="form-check-label" for="pix"> Pix </label>
            </div>
            <div class="form-check">
              <input
                data-bs-toggle="collapse"
                href="#creditoCollapse"
                aria-expanded="false"
                aria-controls="creditoCollapse"
                class="form-check-input"
                type="checkbox"
                value="credito"
                id="credito"
              />
              <label class="form-check-label" for="credito">
                Cartão de crédito
              </label>
            </div>
            <div class="collapse" id="creditoCollapse">
              <p class="mt-2">Parcelamento em</p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="qtd_vezes"
                  id="uma_vez"
                />
                <label class="form-check-label" for="uma_vez">
                  1x, sem juros
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="qtd_vezes"
                  id="duas_vez"
                />
                <label class="form-check-label" for="duas_vez">
                  2x, sem juros
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="qtd_vezes"
                  id="tres_vez"
                />
                <label class="form-check-label" for="tres_vez">
                  3x, sem juros
                </label>
              </div>
            </div>
            <ProgressBar :qtd="2" />
            <Button />
          </div>
          <Image :src="'desktop-pagina-2.png'" />
        </div>
      </fieldset>
      <fieldset class="fs border p-3" v-if="$store.state.fieldset === 3">
        <div class="row">
          <div class="col-12 col-md-6">
            <h1 class="fs_title"></h1>
            <router-link to="/about_copy">About copy</router-link>
          </div>
          <Image :src="'desktop-pagina-3.png'" />
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import Button from "./Button.vue";
import Image from "./Image.vue";
import { mask } from "../../node_modules/vue-the-mask";
import axios from "axios";
export default {
  name: "MultStepForm",
  components: {
    ProgressBar,
    Button,
    Image,
  },
  data() {
    return {
      states: null,
      cities: null,
      specialties: null,
    };
  },
  directives: { mask },
  methods: {
    validateName() {
      const name = document.getElementById("nome");
      const validation = document.getElementById("nome-validation");

      if (name.value.length === 0) {
        validation.innerText = "Campo obrigatório vazio";
        return false;
      }

      if (name.value.length < 3) {
        validation.innerText = "Nome muito curto, mínimo de 3 dígitos";
        return false;
      }

      if (name.value.length > 48) {
        validation.innerText = "Nome muito longo, máximo de 48 dígitos";
        return false;
      }

      return true;
    },
    validateCPF() {
      const cpf = document.getElementById("cpf");
      const validation = document.getElementById("cpf-validation");
      const regex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;

      if (!regex.test(cpf.value)) {
        validation.innerText = "CPF inválido";
      }
      return true;
    },
    validatePhone() {
      const phone = document.getElementById("celular");
      const validation = document.getElementById("celular-validation");
      const regex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/;

      if (!regex.test(phone.value)) {
        validation.innerText = "Número de tefefone inválido";
        return false;
      }
      return true;
    },
    validadeState() {
      const state = document.getElementById("estado");
      const validation = document.getElementById("estado-validation");

      if (state.value === "#") {
        validation.innerText = "Selecione um estado";
        return false;
      }

      return true;
    },
    validadeCity() {
      const city = document.getElementById("cidade");
      const validation = document.getElementById("cidade-validation");

      if (city.value === "#") {
        validation.innerText = "Selecione um cidade";
        return false;
      }

      return true;
    },
    validatePageOne() {
      const nome = this.validateName();
      const cpf = this.validateCPF();
      const celular = this.validatePhone();
      const estado = this.validadeState();
      const cidade = this.validadeCity();

      if (nome && cpf && celular && estado && cidade) {
        this.$store.commit("increaseFieldset");
      }
    },
    async getStates() {
      const res = await axios(
        "https://api-teste-front-end-fc.herokuapp.com/estados"
      );
      return res.data;
    },
    async getCities(value) {
      const res = await axios(
        `https://api-teste-front-end-fc.herokuapp.com/estados/${value}/cidades`
      );
      this.cities = res.data;
    },
    async getSpecialties() {
      const res = await axios(
        "https://api-teste-front-end-fc.herokuapp.com/especialidades"
      );
      return res.data;
    },
  },
  async mounted() {
    this.states = await this.getStates();
    this.specialties = await this.getSpecialties();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.prime-container {
  border: solid 1px black;
  max-width: 900px;
  padding: 0 !important;
}
.fs {
  background: white;
  border-radius: 40px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);

  &_title {
    margin: 25px 0;
    color: var(--primary);
    font-size: 2rem;
  }

  &_sub_title {
    margin: 25px 0;
    font-size: 1.4rem;
  }
}

input,
select {
  border: solid 1px var(--primary);
  font-size: 14px;

  &:checked {
    background: var(--primary);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 1px 2px var(--primary-shadow);
  }
}
.input-group {
  span {
    background: var(--primary);
    border: solid 2px var(--primary);
  }
}
.validation {
  font-size: 12px;
  padding: 2px;
  color: red;
}
</style>
