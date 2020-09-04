//引入组件
import Foo from '../../components/Foo'
import Bar from '../../components/Bar'
import Login from '../../components/Login'
import Register from '../../components/Register'
import  HomeTemplate from '../../components/HomeTemplate'
import  OrderList  from '../../components/OrderList'
import  CourseList  from  '../../components/CourseList'
import  Course  from  '../../components/Course'

// 路径和组件关系   es6语法
export default [
  { path: '/', component: Login }, //默认路径为Login
  { path: '/foo', component: Foo },
    { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/home', component: HomeTemplate,
    children: [ //使用vue-router 需要引入
      {path: 'course/list',component: CourseList},
      {path: 'order/list',component: OrderList},
      {path: 'course/:courseNo',component: Course}
    ]
  },
  { path: '/bar', component: Bar }
]
