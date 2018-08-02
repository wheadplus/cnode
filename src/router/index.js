import Vue from 'vue'
import Router from 'vue-router'
import TopicLists from '@/components/TopicLists'
import Article from '@/components/Article'
import UserInfo from '@/components/UserInfo'
import SideBar from '@/components/SideBar'
import HomeSideBar from '@/components/HomeSideBar'
Vue.use(Router)

export default new Router({
  routes: [
    { 
      name:"root",
      path: '/',
      components: {
        main: TopicLists,
        sideBar: HomeSideBar
      }
    },
    {
      name: 'topic',
      path: '/topic/:id&author:authorName',
      components: {
        main: Article,
        sideBar:SideBar
      }
    },
    {
      name: 'user',
      path: '/user/:username',
      components: {
        main: UserInfo,
        sideBar: HomeSideBar
      }
    }
  ]
})
