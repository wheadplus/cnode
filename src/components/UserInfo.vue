<template>
  <div>
    <div class="box">
      <div class="box-header">主页 /</div>
      <div class="box-content">
        <div>
          <img :src="userInfo.avatar_url"><span class="loginname">{{userInfo.loginname}}</span>
        </div>
        <div class="point"> 积分</div>
        <p class="" > 个话题收藏</p>
        <p><i>icon</i><span>@github</span></p>
        <p>注册时间 </p>
      </div>
      
    </div>
    <div class="box">
      <div class="box-header">最近创建的话题</div>
      <div class="box-content">
        <li v-for="list in lists" class="cell">
          <img :src="list.author.avatar_url">
          <span class="num_count">
            <span class="reply_count">{{ list.reply_count }}</span >
            <span class="separator">/</span>
            <span class='visit_count'>{{ list.visit_count }}</span>
          </span>
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
          <!-- {{list}} -->
        </li>
      
      </div>
      <div class="footer">
        <p>查看更多<span></span></p>
      </div>
    </div>
    <div class="box">
      <div class="box-header">最近参与的话题</div>
      <div class="box-content">
        <li v-for="list in lists" class="cell">
          <img :src="list.author.avatar_url">
          <span class="num_count">
            <span class="reply_count">{{ list.reply_count }}</span >
            <span class="separator">/</span>
            <span class='visit_count'>{{ list.visit_count }}</span>
          </span>
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
          <!-- {{list}} -->
        </li>
      
      </div>
      <div class="footer">
        <p>查看更多<span></span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      
    }
  },
  methods: {
    getUserData(){
      this.$http.get(` https://cnodejs.org/api/v1/user/${this.$route.params.username}`).then(
        res=>{
          console.log(res.data)
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

</style>
