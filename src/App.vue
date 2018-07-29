<template>
  <div id="app">
    <div class="bg" >
      <TopBar/>  
      <div class="container" >
       
       <div id="sideBar">
        <router-view name="sideBar"></router-view>
       </div>
       <div id="main">
         <router-view name="main"></router-view>
       </div>
      </div>
        <!-- <div class="side"></div> -->
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
.bg {
  background-color: #e1e1e1;
}
.container {
  width: 90%;
  margin: 0 auto;
  padding: 20px 0 60px;
}
#main {
  width: 85%;
}
#sideBar{
  width: 300px;
  height: 100px;
  float: right;
}	

</style>
