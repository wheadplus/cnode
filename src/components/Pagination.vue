<template>
  <div class="pagination">
    <li @click="changeBtn" class="pagebtn">首页</li>
    <li @click="changeBtn" class="pagebtn">上一页</li>
    <li @click="changeBtn" class="pagebtn" v-if="showbtn">...</li>
    <li v-for='btn in pagebtns' @click="changeBtn(btn)" :class="[{currentPage:btn == currentPage},'pagebtn']">
      {{btn}}
    </li>
    <li @click="changeBtn" class="pagebtn">下一页</li>
    
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Pagination',
  data () {
    return {
      pagebtns: [1,2,3,4,5,'...'],
      currentPage: 1,
      showbtn: false
    }
  },
  methods:{
    changeBtn(page){
      //console.log(page)
      if(typeof page != 'number'){
        switch(page.target.innerText){
          case '上一页':
            $('li.currentPage').prev().click()
            break;
          case '下一页':
            $('li.currentPage').next().click() 
           break;
          case '首页':
            this.pagebtns = [1,2,3,4,5,'...']
            this.changeBtn(1)
            break
          case '...':
            break
        }
        return
      }

      this.currentPage = page
      if(page > 4){
        this.showbtn = true
      }else{
        this.showbtn = false
      }
      if(page == this.pagebtns[4]){
          this.pagebtns.shift()//头去一个元素，尾加一个元素
          this.pagebtns.splice(4,0,this.pagebtns[3]+1)
      }else if(page == this.pagebtns[0] && page !=1){
        this.pagebtns.unshift(this.pagebtns[0]-1,) //头＋1，尾去掉
        this.pagebtns.splice(5,1)
      }
      console.log(this.currentPage)
      this.$emit("handle",this.currentPage)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pagination {
  padding: 10px;
}
.pagination::after {
  content: "";
  display: block;
  clear: both;
}
.pagebtn {
  border: 1px solid #ddd;
  border-right: none;
  float: left;
  min-width: 30px;
  min-height: 31px;
  padding: 5px;
  text-align: center;
  color: #778087;
  line-height:  1.5rem;
}
.pagebtn:last-child{
  border-right: 1px solid #ddd;
}
.currentPage {
  background-color: black;
  color: #fff;
}

</style>
