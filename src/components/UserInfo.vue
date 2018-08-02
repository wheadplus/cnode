<template>
  <div>
    <div class="box ">
      <div class="box-header">主页 /</div>
        <div class="box-content info">
          <div>
            <img :src="userData.avatar_url"><span class="loginname">{{userData.loginname}}</span>
          </div>
          <div class="score">{{userData.score}} 积分</div>
          
          <p><i class="icon">icon</i><span>@{{userData.githubUsername}}</span></p>
          <p>注册时间 {{userData.create_at | formatDate}}</p>
        </div>
    </div>

    <div class="box topic">
      <div class="box-header">最近创建的话题</div>
        <div class="box-content">
          <li v-for="list in userData.recent_topics">
            <img :src="list.author.avatar_url">
           
            <span class="tag" :class="[{put_good:(list.good == true),put_top:(list.top == true),put_normal:(list.top != true && list.good != true)}]">
              {{ list.tab| formatTab }}
            </span>
            <router-link :to="{
              name:'topic',
              params:{
                id: list.id,
                authorName:list.author.loginname
              }
            }"><a class="title">{{list.title}}</a></router-link>
            <span class="last_reply">{{list.last_reply_at | formatDate}}</span>
          </li>
        </div>  
    </div>
    
    <div class="box topic">
      <div class="box-header">最近参与的话题</div>
        <div class="box-content">
          <li v-for="list in userData.recent_replies">
            <img :src="list.author.avatar_url">
            
            <span class="tag" :class="[{put_good:(list.good == true),put_top:(list.top == true),put_normal:(list.top != true && list.good != true)}]">
              {{ list.tab| formatTab }}
            </span>
            <router-link :to="{
              name:'topic',
              params:{
                id: list.id,
                authorName:list.author.loginname
              }
            }"><a class="title">{{list.title}}</a></router-link>
            <span class="last_reply">{{list.last_reply_at | formatDate}}</span>
          </li>
        </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      userData:{},
      lists: []
    }
  },
  methods: {
    getUserData(){
      this.$http.get(` https://cnodejs.org/api/v1/user/${this.$route.params.username}`).then(
        res=>{
          console.log("see  me")
          console.log(res.data)
          this.userData = res.data.data
          this.lists = this.userData.recent_topics
        }
      )
      
    }
  },
  beforeMount(){
    this.getUserData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    margin: 0 20px 20px 20px;
  }
  .box-header {
    background-color: #f6f6f6;
    padding: 10px;
    color: #80bd01;
    border-radius: 3px 3px 0 0;
  }
  .box-content {
    background-color: #fff;
  }
  .box-content img {
    width: 40px;
    height: 40px;
    border-radius: 3px;
    vertical-align: middle;
  }
  .box-content .loginname {
    margin-left: 10px;
    color: #778087
  }
  .box .footer {
    padding: 10px;
    background: #f6f6f6;
    color: #666;
  }
  .box .footer .arrow {
    font-size: 11px;
  }
  .box-content .score {
    font-size: 14px;
    margin: 10px;
    color: #4444;
  }
  .box p {
    margin-top: 10px;
    color: #778087;
  }
  .box .icon {
    margin-right: 10px;
  }
  .info {
    padding: 10px;
  }
  .box-content li {
    border: 1px solid #f0f0f0;
    padding: 10px;
    position: relative;
  }
  .topic img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  } 
  .topic .tag {
    border-radius: 3px;
    font-size: 12px;
    padding: 3px 4px;
    margin-right: 4px;
  }
   .topic .put_normal {
    background-color: #e5e5e5;
    color: #999;
  }

  .put_good,.put_top {
    background-color: #80bd01;
    color: #fff;
  }
  .topic .title {
    color: #333;
    cursor: pointer;
    display: inline-block;
    max-width: 70%;
    white-space:nowrap; 
    overflow:hidden; 
    text-overflow:ellipsis; 
    vertical-align: middle;
  }
  .topic .title:visited {
    color: #888;
  }
  .topic .last_reply {
    position:absolute;
    right: 10px;
    min-width: 50px;
    text-align: right;
    font-size: 11px;
    line-height: 25px;
    color: #778087;
  }
</style>
