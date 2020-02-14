import React from 'react';

import './assets/styles/common.scss'
// 引入使用实例：
import Nav from './pages/nav/Nav'
import Login from './pages/login/Login'
import Reg from './pages/reg/Reg'
import Forgetpwd from './pages/forgetpwd/Forgetpwd'
import Citylist from './pages/citylist/Citylist'
import Search from './pages/search/Search'
import Map from './pages/map/Map'

// 引入路由
import { HashRouter, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={Nav}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/reg' component={Reg}></Route>
        <Route path='/forgetpwd' component={Forgetpwd}></Route>
        <Route path='/citylist' component={Citylist}></Route>
        <Route path='/search' component={Search}></Route>
        <Route path='/map' component={Map}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
