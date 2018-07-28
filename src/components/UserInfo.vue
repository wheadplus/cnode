<template>
  <div>
    <!-- <div id="user-header">
      <div class="title">
        主页 /
      </div>
      <div class="cell">
        <img src="" alt="">
        <span>{{}}</span>
        <div>{{}}</div>
        <div>{{}}个话题收藏</div>
        <div><i></i> <a href="">@{{}}</a></div>
        <div>注册时间{{}}</div>
      </div>
    </div>
    <div class="pannel" v-for="">
      <div class="title">{{}}</div>
      <ul>
        <li v-for=''>
          <img src="" alt="">
          <span>
            <span class="reply_count">{{  }}</span >
            <span class="separator">/</span>
            <span class='visit_count'>{{  }}</span>
          </span>
          <router-link :to="{
            name:'topic',
            params:{
              id: list.id
            }
          }"><a class="title">{{list.title}}</a></router-link>
          <span class="last_reply">{{list.last_reply_at | formatDate}}</span>
        </li>
      </ul>
    </div> -->
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
