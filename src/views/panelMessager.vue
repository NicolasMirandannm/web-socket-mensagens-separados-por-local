<template>
  <div class="container">
    <div class="wrapper">
      <div v-for="(local, i) in locations" :key="i">
        <send-messager :local="local.name"></send-messager>
      </div>
    </div>
  </div>
</template>

<script>
import SendMessager from '../components/sendMessager'
import api from '../services/api-connection.ts'

export default {
  name: "panel-messager",
  components: {
    "send-messager": SendMessager
  },
  data() {
    return {
      locations: [],
    };
  },
  mounted() {
    api.get("/location").then((res) => {

      const locationsArr = res.data.map((local) => {
        return {
          name: local
        }
      })

      this.locations = locationsArr;
    })
  },
};
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wrapper {
  padding: 20px 10px;
  height: 600px;
  width: 700px;
  background-color: rgb(206, 206, 228);
  border-radius: 3px;
  box-shadow: 2px 2px 3px solid#8f8f8f;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>