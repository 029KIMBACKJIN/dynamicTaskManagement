<template>
    <div>
        <h1>Main Task</h1>
        <button @click="toggle()">Create Task</button>
    </div>

    <div class = "black-bg" v-if = "isTaskFormOpen == true">
      <div class = "white-bg">
        <form id = "task">
          <p>task name</p>
          <input type = "text" name = "title" v-model = "title">

          <p>task contents</p>
          <input type = "text" name = "contents" v-model = "contents">

          <p>dead line</p>
          <input type = "date" name = "deadLine" v-model = "deadLine">

          <p>complelete</p>
          <input type = "checkbox" name = "complelete" v-model = "complelete">
        </form>
        <button v-on:click="createTask">Create Task</button>
      </div>
    </div>
    <!-- 태스크 뿌려질 곳 -->

</template>
  
<script>
  export default {
    name: 'UserSettings',
    data(){
      return {
        isTaskFormOpen : false,
        task: {
          title: '',
          contents: '',
          deadLine: '',
          complelete: ''
        }
      }
    },
    methods: {
      toggle: function() {
        if(this.isTaskFormOpen == true) this.isTaskFormOpen = false;
        else this.isTaskFormOpen = true;
      },
      createTask: function() {
        
      }
    }
  }
</script>
  
<style>
.black-bg{
  width: auto;
  height: auto;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg{
  width: auto;
  background: white;
  border-radius: 30px;
  padding: 20px;
}
</style>