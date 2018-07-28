import Vue from 'vue'
import Router from 'vue-router'
import TopicLists from '@/components/TopicLists'
import Article from '@/components/Article'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      name:"root",
      path: '/',
      components: {
        main: TopicLists
      }
    },
    {
      name: 'topic',
      path: '/topic/:id',
      components: {
        main: Article
      }
    },
    {
      name: 'user',
      path: '/user/:username',
      components: {
        main: UserInfo
      }
    }
  ]
})
