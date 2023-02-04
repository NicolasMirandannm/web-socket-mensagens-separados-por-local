<template>
  <div class="container">
    
    <div class="panel">
      <div class="title">
        <a>EMITS de {{ location }}</a>
      </div>
      <div class="msg">
        <a>Mensagem: {{ msg }}</a>
      </div>
    </div>

  </div>
</template>

<script>
import { io } from 'socket.io-client';

export default {
  data() {
    return {
      location: '',
      msg: ''
    }
  },
  mounted() {
    if(localStorage.getItem("Location") === '' || !(localStorage.getItem("Location")))  {
      this.$router.push('/')
    }
    this.location = localStorage.getItem("Location") || ''
  },
  created() {
    const socket = io('http://localhost:3000/')   
    
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 200px;
  width: 400px;

}

.title {
  height: 40px;
  background-color: #4f7ca7;
  border: 1px solid #2c3e50;
  border-radius: 3px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

a {
  font-weight: bolder;
  font: 600;
  color: #2c3e50;
}

</style>
