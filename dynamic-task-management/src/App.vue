<template>
  <header>
    <UserTopbar></UserTopbar>
  </header>
  
  <body>
    <router-view></router-view>
    
    
  </body>
  


</template>

<script>
import UserTopbar from "./components/UserTopbar.vue";

export default {
  name: 'App',
  components: {
    UserTopbar,
    
  },
  data() {
    return{};
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
