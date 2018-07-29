<template>
  <div class="author-info">
    <div class="author-summay">
      <div class="top-bar">作者</div>
      <div class="side-content">
        <div>
          <img :src="userInfo.avatar_url"><span class="loginname">{{userInfo.loginname}}</span>
        </div>
        <div class="point">积分:{{userInfo.score}}</div>
        <p class="sign" >“ 这家伙很懒，什么个性签名都没有留下。 ”</p>
      </div>
    </div>
    <div class="recent-topics">
      <div class="top-bar">作者其他话题</div>
      <div class="side-content">
        <li v-for="list in topicLimitBy5" class="side-title">
          <router-link :to="{
          name:'topic',
          params:{
            id: list.id,
            authorName:list.author.loginname
          }
        }">
          {{list.title}}
          </router-link>
          
        </li>
      </div>
    </div>
    <div class="recent-replies">
      <div class="top-bar">最近回复的话题</div>
      <div class="side-content">
        <li v-for="list in replyLimitBy5" class="side-title">
          {{list.title}}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      userInfo: {}
    }
  },
  computed:{
    topicLimitBy5(){
      if(this.userInfo.recent_topics){
        return this.userInfo.recent_topics.slice(0,5)
      }
    },
    replyLimitBy5(){
      if(this.userInfo.recent_replies){
        return this.userInfo.recent_replies.slice(0,5)
      }
    }
  },
  methods: {
    getSideInfo(){
      
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.authorName}`).then(res=>{
        console.log(res.data)
        this.userInfo = res.data.data
        console.log(this.userInfo)
      }).catch(function(err){
        console.log(err)
      })
    }
  },
  beforeMount(){
    this.getSideInfo()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .author-info {
    background-color:#e1e1e1;
  }
  .author-summay {
    margin-bottom: 20px;
    
  }
  .author-info .top-bar {
    border-radius: 3px 3px 0 0;
    background-color: #f6f6f6;
    color: #444;
    padding: 10px;
  }
  .side-content {
    padding: 10px 10px 20px 10px;
    background-color: #fff;
    margin-bottom: 20px;
  }
  .side-title,a {
    max-width: 270px;
    font-size: 14px;
    color:#778087;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin:10px 0;
    text-decoration: none;
  }
  .author-summay img {
    width: 46px;
    height: 46px;
    border-radius: 3px;
    vertical-align: middle;
  }
  .author-summay .loginname {
    color: #778087;
    font-size: 16px;
    margin-left: 10px;
   
  }
  .author-summay .point {
    margin: 20px 0 10px;
  }

  .author-summay .sign {
    font-style: italic;
  }
</style>
