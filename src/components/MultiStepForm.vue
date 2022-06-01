<template>
  <div class="prime-container container-lg">
    <ReturnButton v-if="$store.state.fieldset > 1" />
    <form action="#">
      <fieldset class="fs p-3" v-if="$store.state.fieldset === 1">
        <div class="row">
          <div class="col-12 col-md-6">
            <h1 class="fs_title">Sobre o profissional</h1>
            <h2 class="fs_sub_title">Dados do profissional</h2>
            <div class="mb-4">
              <label for="nome" class="form-label"> Nome completo* </label>
              <input
                v-model="nome"
                type="text"
                class="form-control col-sm-10"
                id="nome"
                placeholder="João dos Santos Silva"
              />
              <span class="validation" id="nome-validation"></span>
            </div>
            <div class="mb-4 d-grid col-10">
              <label for="cpf" class="form-label"> CPF* </label>
              <input
                v-model="cpf"
                type="text"
                class="form-control"
                id="cpf"
                placeholder="123.456.789-00"
                v-mask="'###.###.###-##'"
              />
              <span class="validation" id="cpf-validation"></span>
            </div>
            <div class="my-4 d-grid col-10">
              <label for="celular" class="form-label"> Número celular* </label>
              <input
                v-model="celular"
                type="text"
                class="form-control"
                id="celular"
                placeholder="(00) 91234-5678"
                v-mask="['(##) #####-####', '(##) ####-####']"
              />
              <span class="validation" id="celular-validation"></span>
            </div>
            <div class="row g-3">
              <div class="d-flex flex-column col-sm">
                <label for="estado" class="form-label"> Estado* </label>
                <select
                  v-model="estado"
                  name="estado"
                  id="estado"
                  class="form-select"
                  @change="getCities($event.target.value)"
                >
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
                <select
                  v-model="cidade"
                  name="cidade"
                  id="cidade"
                  class="form-select"
                >
                  <option
                    v-for="item in cities"
                    :key="item.id"
                    :value="item.nome"
                  >
                    {{ item.nome }}
                  </option>
                </select>
                <span class="validation" id="cidade-validation"></span>
              </div>
            </div>
            <ProgressBar :qtd="1" />
            <Button @click="validatePageOne" />
          </div>
          <Image :src="'desktop-pagina-1.png'" />
        </div>
      </fieldset>
      <fieldset class="fs p-3" v-if="$store.state.fieldset === 2">
        <div class="row">
          <div class="col-12 col-md-6">
            <h1 class="fs_title">Sobre o atendimento</h1>
            <h2 class="fs_sub_title">Detalhes do atendimento</h2>
            <div class="my-4">
              <label for="especialidade" class="form-label">
                Especialidade*
              </label>
              <select
                v-model="especialidade"
                class="form-select"
                id="especialidade"
              >
                <option
                  v-for="item in specialties"
                  :key="item.id"
                  :value="item.nome"
                >
                  {{ item.nome }}
                </option>
              </select>
              <span class="validation" id="especialidade-validation"></span>
            </div>
            <div class="my-4">
              <label for="preco" class="form-label">
                Informe o preço da consulta*
              </label>
              <div class="input-group">
                <span class="input-group-text text-white" id="basic-addon1">
                  R$
                </span>
                <input
                  v-model="preco"
                  type="text"
                  class="form-control"
                  id="preco"
                  @keydown="priceKeydown($event)"
                />
              </div>
              <span class="validation" id="preco-validation"></span>
            </div>
            <h6>Formas de pagamento*</h6>
            <Checkbox
              :checked="isDinheiroChecked"
              :id="'dinheiro'"
              :label="'Em dinheiro'"
              :value="'Em dinheiro'"
              @click="isDinheiroChecked = !isDinheiroChecked"
            />
            <Checkbox
              :checked="isPixChecked"
              :id="'pix'"
              :label="'Pix'"
              :value="'Pix'"
              @click="isPixChecked = !isPixChecked"
            />
            <div class="checkbox">
              <div class="form-check my-3 px-5 py-3">
                <input
                  data-bs-toggle="collapse"
                  href="#creditoCollapse"
                  aria-expanded="false"
                  aria-controls="creditoCollapse"
                  class="form-check-input"
                  type="checkbox"
                  value="Credito"
                  id="credito"
                />
                <label class="form-check-label checkbox-label" for="credito">
                  Cartão de crédito
                </label>
              </div>
              <div class="collapse pb-3" id="creditoCollapse">
                <p class="mt-2">Parcelamento em</p>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qtd_vezes"
                    id="uma"
                    value="1x, sem juros"
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
                    id="duas"
                    value="2x, sem juros"
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
                    id="tres"
                    value="3x, sem juros"
                  />
                  <label class="form-check-label" for="tres_vez">
                    3x, sem juros
                  </label>
                </div>
              </div>
            </div>
            <span class="validation" id="pagamento-validation"></span>
            <ProgressBar :qtd="2" />
            <Button @click="validatePageTwo" />
          </div>
          <Image :src="'desktop-pagina-2.png'" />
        </div>
      </fieldset>
      <fieldset class="fs p-3" v-if="$store.state.fieldset === 3">
        <div class="row">
          <div class="col-12 col-md-6 px-5">
            <h1 class="fs_title">Revisão do cadastro</h1>
            <p class="info-field d-grid py-1">
              <span class="label fw-bold">Nome completo</span
              ><span class="info">{{ $store.state.physicianInfo.nome }}</span>
            </p>
            <p class="info-field d-grid py-1">
              <span class="label fw-bold">CPF</span
              ><span class="info">{{ $store.state.physicianInfo.cpf }}</span>
            </p>
            <p class="info-field d-grid py-1">
              <span class="label fw-bold">Número de telefone ou celular</span
              ><span class="info">{{
                $store.state.physicianInfo.celular
              }}</span>
            </p>
            <p class="info-field d-grid py-1">
              <span class="label fw-bold">Estado</span
              ><span class="info">{{ $store.state.physicianInfo.estado }}</span>
            </p>
            <p class="info-field d-grid py-1">
              <span class="label fw-bold">Cidade</span
              ><span class="info">{{ $store.state.physicianInfo.cidade }}</span>
            </p>
            <p class="info-field d-grid py-1">
              <span class="label fw-bold">Especialidade principal</span
              ><span class="info">{{
                $store.state.physicianInfo.especialidade
              }}</span>
            </p>
            <p class="info-field d-grid py-1">
              <span class="label fw-bold">Preco da consulta</span
              ><span class="info">{{ $store.state.physicianInfo.preco }}</span>
            </p>
            <p class="info-field d-grid py-1">
              <span class="label fw-bold">Formas de pagamento da consulta</span>
              <span
                class="info"
                v-for="item in $store.state.physicianInfo.pagamento"
                :key="item"
                >{{ item }}</span
              >
            </p>
            <router-link to="/about" class="router-link btn"
              >Cadastrar profissional</router-link
            >
            <button
              class="btn edit-cadastro"
              @click="$store.commit('decreaseFildset', 2)"
            >
              Editar cadastro
            </button>
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
import ReturnButton from "./ReturnButton.vue";
import Image from "./Image.vue";
import Checkbox from "./Checkbox.vue";
import { mask } from "../../node_modules/vue-the-mask";
import axios from "axios";
export default {
  name: "MultStepForm",
  components: {
    ProgressBar,
    Button,
    Image,
    Checkbox,
    ReturnButton,
  },
  data() {
    return {
      states: null,
      cities: null,
      specialties: null,
      nome: this.$store.state.physicianInfo.nome,
      cpf: this.$store.state.physicianInfo.cpf,
      celular: this.$store.state.physicianInfo.celular,
      estado: this.$store.state.physicianInfo.estado,
      cidade: this.$store.state.physicianInfo.cidade,
      especialidade: this.$store.state.physicianInfo.especialidade,
      preco: this.$store.state.physicianInfo.preco,
      isDinheiroChecked: false,
      isPixChecked: false,
    };
  },
  directives: { mask },
  methods: {
    priceKeydown(e) {
      console.log(e.key);
      if (!/\d|,|Backspace/.test(e.key)) {
        e.preventDefault();
      }
    },
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

      return name.value;
    },
    validateCPF() {
      const cpf = document.getElementById("cpf");
      const validation = document.getElementById("cpf-validation");
      const regex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;

      if (!regex.test(cpf.value)) {
        validation.innerText = "CPF inválido";
      }
      return cpf.value;
    },
    validatePhone() {
      const phone = document.getElementById("celular");
      const validation = document.getElementById("celular-validation");
      const regex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/;

      if (!regex.test(phone.value)) {
        validation.innerText = "Número de tefefone inválido";
        return false;
      }
      return phone.value;
    },
    validadeState() {
      const state = document.getElementById("estado");
      const validation = document.getElementById("estado-validation");

      if (!state.value) {
        validation.innerText = "Selecione um estado";
        return false;
      }

      return state.options[state.selectedIndex].text;
    },
    validadeCity() {
      const city = document.getElementById("cidade");
      const validation = document.getElementById("cidade-validation");

      if (!city.value) {
        validation.innerText = "Selecione um cidade";
        return false;
      }

      return city.value;
    },
    validateSpecialty() {
      const specialty = document.getElementById("especialidade");
      const validation = document.getElementById("especialidade-validation");

      if (specialty.value === "#") {
        validation.innerText = "Selecione uma especialidade";
        return false;
      }

      return specialty.value;
    },
    validatePrice() {
      let price = document.getElementById("preco");
      const validation = document.getElementById("preco-validation");

      if (price.value.length === 0) {
        validation.innerText = "Informe um valor";
        return false;
      }

      price = parseFloat(price.value.replace(",", "."));

      if (price < 30) {
        validation.innerText = "Valor mínimo 30,00";
        return false;
      }

      if (price > 350) {
        validation.innerText = "Valor máximo 350,00";
        return false;
      }

      return price;
    },
    validatePayment() {
      let pix = document.getElementById("pix");
      let dinheiro = document.getElementById("dinheiro");
      let credito = document.getElementById("credito");
      let parcelas = document.querySelector('input[type="radio"]:checked');
      const validation = document.getElementById("pagamento-validation");

      if (!pix.checked && !dinheiro.checked && !credito.checked) {
        validation.innerText = "Selecione ao menos uma forma de pagamento";
        return false;
      }

      if (credito.checked && !parcelas) {
        validation.innerText = "Selecione uma das opções de parcelamento";
        return false;
      }
      pix = pix.checked ? pix.value : "";
      dinheiro = dinheiro.checked ? dinheiro.value : "";
      credito = credito.checked ? credito.value + " " + parcelas.value : "";

      return { pix, dinheiro, credito };
    },
    validatePageOne() {
      const nome = this.validateName();
      const cpf = this.validateCPF();
      const celular = this.validatePhone();
      const estado = this.validadeState();
      const cidade = this.validadeCity();

      if (nome && cpf && celular && estado && cidade) {
        this.$store.commit("addPhysicianInfo", {
          nome,
          cpf,
          celular,
          estado,
          cidade,
        });
        this.$store.commit("increaseFieldset");
      }
    },
    validatePageTwo() {
      const especialidade = this.validateSpecialty();
      const preco = this.validatePrice();
      const pagamento = this.validatePayment();

      if (especialidade && preco && pagamento) {
        this.$store.commit("addPhysicianInfo", {
          especialidade,
          preco,
          pagamento,
        });
        this.$store.commit("increaseFieldset");
      }
    },
    async getStates() {
      const res = await axios(
        "https://api-teste-front-end-fc.herokuapp.com/estados"
      );
      return res.data;
    },
    async getCities(stateId) {
      const res = await axios(
        `https://api-teste-front-end-fc.herokuapp.com/estados/${stateId}/cidades`
      );
      this.cities = res.data;
    },
    async getSpecialties() {
      const res = await axios(
        "https://api-teste-front-end-fc.herokuapp.com/especialidades"
      );
      return res.data;
    },
    async getCPF(cpf) {
      const res = await axios(
        `https://api-teste-front-end-fc.herokuapp.com/profissionais?cpf=${cpf}`
      );
      return res.data;
    },
  },
  async mounted() {
    this.states = await this.getStates();
    this.specialties = await this.getSpecialties();
  },
  watch: {
    cpf: {
      handler: async function (value) {
        if (value.length === 14) {
          const a = await this.getCPF(value.replace(/\.|-/g, ""));
          const validation = document.getElementById("cpf-validation");
          if (a.length > 0) {
            validation.innerText = "CPF já cadastrado";
          } else {
            validation.innerText = "";
          }
        }
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.prime-container {
  position: relative;
  max-width: 900px;
  padding: 0 !important;
}
.fs {
  position: relative;
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

.checkbox {
  background: rgb(245, 245, 245);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.checkbox-label {
  margin-left: 30px;
}
.collapse {
  margin-left: 80px;
}

.router-link,
.edit-cadastro {
  background: var(--secondary);
  padding: 5px;
  margin: 10px 0;
  width: 100%;
  border-radius: 20px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  }
}

.edit-cadastro {
  color: var(--primary);
  background: white;
}
</style>
