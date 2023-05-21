<template>
    <header>
        <h1>Create Task</h1>       
        <button>Create Task</button>
    </header>

    <div class = "black-bg" v-if = "isTaskFormOpen == true">
      <div class = "white-bg">
        <form id = "task">
          <p>task name</p>
          <input type = "text" id = "taskName" name = "task name">

          <p>task contents</p>
          <input type = "text" id = "taskContent" name = "task contents">

          <p>dead line</p>
          <input type = "date" id = "deadLine" name = "dead line">

          <p>complelete</p>
          <input type = "checkbox" id = "complelete" name = "complelete">
        </form>
        <button>Create Task</button>
      </div>
    </div>

</template>
  
<script>
    
</script>
  
<style>
</style>