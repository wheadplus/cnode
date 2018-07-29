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
        <div>
          <img :src="userInfo.avatar_url"><span class="loginname">{{userInfo.loginname}}</span>
        </div>
        <div class="point"> </div>
        <p class="" > 个话题收藏</p>
        <p><i>icon</i><span>@github</span></p>
        <p>注册时间 </p>
      </div>
      
    </div>
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
