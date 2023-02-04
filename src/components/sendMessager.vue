<template>
  <div class="container">
    
    <div class="messager">
      <div class="title">{{ local }}</div>
      <input class="input-msg" v-model="msg" type="text" placeholder="Escreva sua mensagem..."/>
      <button class="button" @click="publishMsg()">
        Enviar
      </button>
    </div>
  </div>
</template>

<script>
import api from '../services/api-connection.ts'

export default {
  name: "send-messager",
  props: ['local'],
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    publishMsg() {
      api.post('/message/create', {message: this.msg, local: this.local}).then(res => {
        console.log('mensagem enviado para' + localStorage.getItem('Location'))
      })
      this.msg = ''
    }
  },
}
</script>

<style scoped>

.container {
  background: rgb(157, 161, 196);
  height: 130px;
  width: 300px;
  border-radius: 3px;
  box-shadow: 1px 1px 2px;
}

.messager {
display: flex;
flex-direction: column;
padding: 0;
}

.title {
  margin-bottom: 25px;
  margin-top: -10px;
  font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
  font-weight: 700;
  background: #9995b4;
  padding: 4px;
  box-shadow: 1px 1px 1px;
  border-radius: 2px;
}

.button {
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
  font-size: 12px;
  font-weight: 700;
  margin: 0;
  max-width: none;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button:hover,
.button:focus {
  opacity: .75;
}

.input-msg {
  margin-bottom: 4px;
  height: 20px;
  border-radius: 3px;
  border: 0px;
}

</style>