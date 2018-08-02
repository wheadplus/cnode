<template>
  <div id="app">
    <div id="wrap">
      <TopBar/>  
      <div class="container" > 
        <div id="main">
          <router-view name="main"></router-view>
      </div>
        <div id="sideBar">
          <router-view name="sideBar"></router-view>
        </div>
        <!-- <div class="side"></div> -->
    </div>  
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

#wrap {
  background-color: #e1e1e1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.container {
  flex: auto;
  display: flex;
  margin-top: 20px;
  padding-bottom: 30px;
}
#main {
  flex: auto;
}
#sideBar {
  width: 20%;
  margin-right: 100px;
}


</style>
