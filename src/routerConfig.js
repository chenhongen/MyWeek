// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

// import BlankLayout from './layouts/BlankLayout';
// import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import SearchBar from './pages/SearchBar';

import Loadable from 'react-loadable';
import { Loading } from "@icedesign/base";

const BlankLayout = Loadable({
  loader: () => import(/* webpackChunkName: "BlankLayout" */'./layouts/BlankLayout'),
  loading: Loading,
  delay: 300,
})
const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */'./pages/Home'),
  loading: Loading,
  delay: 300
})
const SearchBar = Loadable({
  loader: () => import(/* webpackChunkName: "SearchBar" */'./pages/SearchBar'),
  loading: Loading,
  delay: 300
})

const routerConfig = [
  {
    path: '/search',
    layout: BlankLayout,
    component: SearchBar,
  },
  {
    path: '/',
    layout: BlankLayout,
    component: Home,
  },
  {
    path: '*',
    layout: BlankLayout,
    component: NotFound,
  },
];

export default routerConfig;
