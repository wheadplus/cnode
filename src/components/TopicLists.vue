<template>
  <div class="content">
    <!-- 数据请求是展示loading -->
    <div class="loading" v-if="isLoading">

      <img src="../assets/loading.gif" alt="">
    </div>
    <!-- topic 列表 -->
    <ul class="topics" v-else>
      <li class="topic-nav">
        <span class="cur-tab">全部</span>
        <span>精华</span>
        <span>分享</span>
        <span>问答</span>
        <span>招聘</span>
        <span>客户端测试</span>
      </li>
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
    </ul>
  </div>
</template>

<script>

export default {
  name: 'TopicLists',
  data () {
    return {
      lists : [],
      isLoading: false,
      pageNum: 1
    }
  },
  methods: {
    getTopics(){
      this.$http.get('https://cnodejs.org/api/v1/topics',{params:{
        page: this.pageNum,
        limit: 20
      }}).then(res=>{
        //console.log(res.data.data)
        //JSON.stringify(res)
        this.lists = res.data.data
        this.isLoading = false
      }).catch(function(err){
        console.log(err)
      })
    }
  },
  beforeMount(){
    this.isLoading = true
    this.getTopics()
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    max-width: 80%;
    margin:0 auto;

  }
  .loading {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .topics {
    background-color: #fff;
  }
  .cell {
    border: 1px solid #f0f0f0;
    border-top: none;
    height: 50px;
    padding: 10px;
    position: relative;
    list-style: none;
  }
  .topic-nav {
    border: 1px solid #f0f0f0;
    border-top: none;
    height: 40px;
    padding: 10px;
    background: #f6f6f6;
    border-radius: 3px 3px 0 0;
    list-style: none;
  }
  .topic-nav > span {
    color: #80bd01;
    margin: 0 10px;
    cursor: pointer;
  }
  .topic-nav > span:hover:not(.cur-tab) {
    color: #08c;
    text-decoration: none;
  }
  .topic-nav > .cur-tab {
    background: #80bd01;
    color: #fff;
    padding: 4px;
    border-radius: 3px;
  } 
  .cell:nth-child(2){
    border-top:1px solid #f0f0f0;
  }
  .cell:hover {
   background: #f6f6f6;
  }
  .cell img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
  .num_count {
    display: inline-block;
    width: 70px;
    text-align: center;
  }
  .cell .separator {
    font-size: 10px;
    margin:-3px;
  }
  .cell .reply_count{
    color:  #9e78c0;
  }
  .cell .visit_count{
    font-size: 10px;
    color: #b4b4b4;
  }
  .cell .tag {
    border-radius: 3px;
    font-size: 12px;
    padding: 3px 4px;
    margin-right: 4px;
  }
  .cell .put_normal {
    background-color: #e5e5e5;
    color: #999;
  }

  .put_good,.put_top {
    background-color: #80bd01;
    color: #fff;
  }
  .cell .title {
    color: #333;
    cursor: pointer;
    display: inline-block;
    max-width: 70%;
    white-space:nowrap; 
    overflow:hidden; 
    text-overflow:ellipsis; 
    vertical-align: middle;
  }
  .cell .title:visited {
    color: #888;
  }
  .cell .last_reply {
    position:absolute;
    right: 10px;
    min-width: 50px;
    text-align: right;
    font-size: 11px;
    line-height: 25px;
    color: #778087;
  }
</style>
