import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/pages/Menu'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Button from '@/pages/Ui/button.vue'
import Modal from '@/pages/Ui/modal.vue'
import Notice from '@/pages/Ui/notice.vue'
import Message from '@/pages/Ui/message.vue'
import Tab from '@/pages/Ui/tabs.vue'
import FormLogin from '@/pages/Form/login.vue'
import Register from '@/pages/Form/register.vue'
import BasicTable from '@/pages/Table/basicTable.vue'
import HighTable from '@/pages/Table/highTable.vue'
import Order from '@/pages/order'
import City from '@/pages/city'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '/',
      name: 'Login',
      hidden: true,
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      hidden: true,
      component: Login
    },
    {
      path: '/menu',
      name: 'Menu',
      leaf: true,
      component: Menu,
      children: [{
        path: '/menu',
        name: 'Home',
        component: Home
      }]
    },
    {
      path: '/menu',
      name: 'Ui',
      component: Menu,
      children: [{
          path: '/menu/button',
          name: '按钮',
          component: Button
        },
        {
          path: '/menu/modal',
          name: '弹框',
          component: Modal
        },
        {
          path: '/menu/notice',
          name: '通知提醒',
          component: Notice
        },
        {
          path: '/menu/message',
          name: '全局Message',
          component: Message
        }, {
          path: '/menu/tabs',
          name: 'tab标签',
          component: Tab
        }
      ]
    },
    {
      path: '/menu',
      name: '表单',
      component: Menu,
      children: [{
          path: '/menu/formlogin',
          name: '登录',
          component: FormLogin
        },
        {
          path: '/menu/register',
          name: '注册',
          component: Register
        }
      ]
    },
    {
      path: '/menu',
      name: '表格',
      component: Menu,
      children: [{
          path: '/menu/basictable',
          name: '基本表格',
          component: BasicTable
        },
        {
          path: '/menu/hightable',
          name: '高级表格',
          component: HighTable
        }
      ]
    },
    {
      path: '/menu',
      name: '城市管理',
      leaf: true,
      component: Menu,
      children: [{
        path: '/city',
        name: '城市管理',
        component: City
      }]
    },
    {
      path: '/menu',
      name: '订单管理',
      leaf: true,
      component: Menu,
      children: [{
        path: '/order',
        name: '订单管理',
        component: Order
      }]
    }
  ]
})
