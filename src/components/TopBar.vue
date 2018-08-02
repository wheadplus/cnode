<template>
  <header>
    <div class="layout">
      <router-link :to="'/'"><img src="../assets/cnodejs_light.svg" alt="" class="logo"></router-link>
      <span class="search">
        <span class="icon">O</span>  <input type="text">
      </span>
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
    list-style: none;
    
    cursor: pointer;
  }
  .nav li:hover{
    color: white;
  }
  .nav li:last-child{
    margin-right: 20px;
  }
  .search {
    position: relative;
   
    margin: 10px 0;
  }
  .search input {
    border: 0 ;
    background: #888;
    padding: 3px 5px 3px 22px;
    border-radius: 15px;
    margin-left: 10px;
    transition: all .4s;
    height: 30px;
    display: inline-block;
    margin-bottom: 10px;
    
  }
  .search input:focus{
    outline: 0;
    
  }
  .search input:hover {
    background: #fff;
  }
  .search .icon {
    position: absolute;
    top: 0;
    left: 20px;
  }
</style>
