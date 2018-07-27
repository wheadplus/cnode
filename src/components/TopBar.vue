<template>
  <header>
    <div class="layout">
      <img src="../assets/cnodejs_light.svg" alt="" class="logo">
      <!-- <span>
        <span></span>
        <input type="text">
      </span> -->
     
    <ul class="nav">
      <li>首页</li>
      <li>新手入门</li>
      <li>API</li>
      <li>关于</li>
      <li>注册</li>
      <li>登录</li>
    </ul>
    </div>
    
  </header>
</template>

<script>
export default {
  name: 'TopBar',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    background-color: #444;
    height: 50px;
  }
  .layout {
    max-width: 90%;
    margin:0 auto;
  }
  header .logo {
   max-width: 120px;
   margin-top: 10px;
   margin-left: 50px;
  }
  header .nav {
    float:right;
  }
  .nav li {
    display: inline-block;
    color: #ccc;
    line-height: 50px;
    background-color: transparent;
    margin-left: 20px;
    cursor: pointer;
  }
  .nav li:hover{
    color: white;
  }
  .nav li:last-child{
    margin-right: 20px;
  }
</style>
