//引入组件
import Foo from '../../components/Foo'
import Bar from '../../components/Bar'
import Login from '../../components/Login'

// 路径和组件关系   es6语法
export default [
  { path: '/', component: Login }, //默认路径为Login
  { path: '/foo', component: Foo },
    { path: '/login', component: Login },
  { path: '/bar', component: Bar }
]
