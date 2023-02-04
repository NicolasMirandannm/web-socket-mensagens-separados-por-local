<template>
  <div class="home">
    <img alt="Vue logo" height="150px" width="150px" src="../assets/logo.png" />
    <div style="margin">{{ location }}</div>
    <div class="container" v-if="location === ''">
      <h1>Selecione sua região</h1>
      <dropdown
        class="my-dropdown-toggle"
        :options="arrayValues"
        :selected="value"
        v-on:updateOption="methodToRunOnSelect"
        :placeholder="'Select a location'"
      >
        ></dropdown
      >
      <button v-if="value !== ''" class="button" @click="logar()"><a>Logar</a></button>
    </div>
    <div class="container" v-else>
      <button class="button" @click="deslogar()"><a>Deslogar</a></button>
    </div>
  </div>
</template>

<script>
import dropdown from "vue-dropdowns";
export default {
  name: "loginView",
  data() {
    return {
      arrayValues: [
        { name: "São Paulo" },
        { name: "Mato Grosso do Sul" },
        { name: "Minas Gerais" },
      ],
      value: "",
      location: "",
    };
  },
  components: {
    dropdown: dropdown,
  },
  created() {
    this.location = localStorage.getItem("Location") || ''
  },
  methods: {
    methodToRunOnSelect(payload) {
      this.value = payload;
    },

    logar() {
      localStorage.setItem("Location", this.value.name);
      this.location = localStorage.getItem("Location");
    },
    deslogar() {
      localStorage.removeItem("Location");
      this.location = ''
    }
  },
};
</script>

<style scoped>

.home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.container {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

a {
  font-weight: bolder;
  font: 600;
  color: #2c3e50;
}
.button {
  --b: 3px; /* border thickness */
  --s: 0.45em; /* size of the corner */
  --color: #373b44;

  
  cursor: pointer;
  padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #0000 90deg,
      var(--color) 0
    )
    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
    calc(100% - var(--b) - 2 * var(--_p));
  transition: 0.3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: 0.6em;
  font-size: 16px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button:hover,
.button:focus-visible {
  --_p: 0px;
  outline-color: var(--color);
  outline-offset: 0.05em;
}

.button:active {
  background: var(--color);
  color: #fff;
}
</style>
