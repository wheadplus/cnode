<template>
  <div id="topic">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="">
    </div>
    <div v-else>
      <div id="topic-panel">
        <div class="topic-header">
          <h1 class="topic-title">{{topic.title}}</h1>
          <ul class="topic-info">
            <li>发布于 {{topic.create_at | formatDate}}</li>
            <li>作者 {{topic.author.loginname}}</li>
            <li>{{topic.visit_count}} 次浏览</li>
            <li>来自 {{topic.tab | formatTab}}</li>
          </ul>
          
        </div>
        <!-- markdown内容 -->
        <div v-html="topic.content" id='content' class="topic-content ">
        </div>
      </div>
      <div id="reply-pannel" v-if="topic.reply_count > 0">
        <div class="reply-header">
          <span>{{ topic.reply_count }} 回复</span>
        </div>
        <div class="reply-content">
          <ul>
            <li v-for="(reply,index) in topic.replies" class="reply">

              <router-link :to="{name:'user',params:{
                username:reply.author.loginname
              }}"><img :src="reply.author.avatar_url" ></router-link>
              
              <div class="cell">
                <span class="reply-author">{{reply.author.loginname}}</span>
                <span class="reply-info">{{ index+1 }}楼•{{reply.create_at | formatDate}}</span>
                
                <!-- <span v-if="reply.ups.length>0">
                  {{reply.ups.length}}
                </span>
                <span class="reply-time"></span>
                <span v-if="topic.author.loginname == reply.author.loginname">
                  作者
                </span> -->
                <div id="content " class="reply-word" v-html="reply.content"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="markdown">
        <!-- <VmMarkdown theme="default"
            width="1000px" 
            height="600px" 
            v-on:gethtml="showHtml"
            :defaultText="intro">
        </VmMarkdown> -->
      </div>
    </div>
  </div>
</template>

<script>
import VmMarkdown from 'vm-markdown'
export default {
  name: 'Article',
  data () {
    return {
      isLoading:true,
      topic: {}
    }
  },
  components:{
    VmMarkdown
  },
  methods: {
    getTopic(){
      this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`).then(res=>{
        //通过 this.$route.params.id 获取router传递值
        //console.log(res.data)
         
        this.isLoading = false
        this.topic = res.data.data
      }).catch(function(err){
        console.log(err)
      })
    }
  },
  beforeMount(){
    
    this.getTopic()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

  @import url('../assets/markdown-github.css');
  /* topic */
  #topic {
    width: 90%;
    margin: 0 auto;
    background-color: #e1e1e1;
  }
  #topic-panel {
    
    background-color: #fff;
    border-radius: 3px;
    
    margin-bottom: 20px ;
  }
  #reply-pannel {
    /* margin-top: 20px; */
    border-radius: 3px;
    background-color: #fff;
   
  }
  .topic-header {
    padding: 10px;
  }
  .topic-content {
    margin: 0 10px;
    border-top: 1px solid #e5e5e5;
    padding: 10px;
  }
  
  /* topic-heder */
   .topic-title {
     font-size: 22px;
     margin: 8px 0;
   }
   .topic-info {
      font-size: 12px;
      color: #838383;
   }
   .topic-info li {
     float: left;
     margin-left: 20px;
   }
   .topic-info::after {
     content: '';
     display: block;
     clear: both;

   }
   /* reply-pannel */
  .reply-header {
    padding: 10px;
    background: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  .reply-header span {
    color: #444;
  }
  .reply-content {
    position: relative;
     
  }
  .reply-content img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    position: absolute;
    cursor: pointer;
    
  }
  .reply-content .reply {
    border: 1px solid #f0f0f0;
    border-bottom: none;
    padding: 20px 10px 40px;
  }
  .reply-content .reply:last-child{
    border-bottom: 1px solid #f0f0f0;
  }
  .reply .cell {
    margin-left: 40px;
  }
  .reply .reply-author{
    color: #666;
    font-weight: 700;
  }
  .reply-info {
    font-size : 11px;
    color : #08c;
  }
  .reply-word {
    margin-top: 5px;
  }
</style>
