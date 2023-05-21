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

</style>
