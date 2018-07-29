<template>
  <div class="author-info">
    <div class="author-summay">
      
      <div class="side-content login-tips">
       <p class="cnode">CNode：Node.js专业中文社区</p>
       <div class="tips">您可以 <a href="">登录</a> 或 <a href=""> 注册 </a>,也可以</div>
       <div><span class="login-btn">通过 GitHub 登录</span></div>
      </div>
    </div>
    <div class="recent-topics adv">
      
      <div class="side-content ">
        <ul>
          <li><img src="../assets/adv1.jpg" alt=""></li>
          <li><img src="../assets/adv2.jpg" alt=""></li>
          <li><img src="../assets/adv3.jpg" alt=""></li>
          <li><img src="../assets/adv4.jpg" alt=""></li>
        </ul>
      </div>
    </div>
    <div class="recent-topics friend">
      <div class="top-bar">友情社区</div>
      <div class="side-content">
        <ul>
          <li><img src="../assets/friend1.png" alt=""></li>
          <li><img src="../assets/friend2.png" alt=""></li>
          <li><img src="../assets/friend3.png" alt=""></li>
          <li><img src="../assets/friend4.jpg" alt=""></li>
        </ul>
      </div>
    </div>
    <div class="recent-replies url">
      <div class="top-bar">客户端二维码</div>
      <div class="side-content">
        <img src="../assets/url.jpg" alt="">
        <p><a href="">客户端源码地址</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSideBar',
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
  /*  */
  .login-tips .cnode{
    font-size: 14px;
    word-break: break-word;
  }
  .login-tips .tips {
    margin: 20px 0;
  }
  .login-btn {
    color: #fff;
    background-color: #5bc0de;
    border-radius: 3px;
    font-size: 14px;
    letter-spacing: 2px;
    padding: 8px 15px;
    line-height: 28px;
    vertical-align: middle;
    cursor: pointer;
  }
  ..login-btn :hover {
    background-color: #289abd;
  }
  .adv img{
    width: 100%;
    height: auto;
  }
  .friend img {
     width: 60%;
    height: auto;
  }
  .url .side-content {
    text-align: center;
    margin-bottom: 20px;
  }
  .url img {
     width: 60%;
    height: auto;
  }
</style>
