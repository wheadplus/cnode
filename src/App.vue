<template>
  <div id="app">
    <TopBar/>
    <TopicLists/>
    <!-- <router-view/> -->
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
ul,li {
  list-style: none;
}
</style>
