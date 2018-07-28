<template>
  <div id="app">
    <div class="container">
      <TopBar/>
      <main>
        <div class="container"><router-view name="main"></router-view></div>
        <div class="side"></div>
      </main>
      
      
    </div>  
  </div>
</template>

<script>

import TopBar from './components/TopBar'
import TopicLists from './components/TopicLists'
export default {
  name: 'App',
  components:{
    TopBar,
    TopicLists
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important
  
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
ul,li {
  list-style: none;
}
.container {
  background-color: #e1e1e1;
}
</style>
