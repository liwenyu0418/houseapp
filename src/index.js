import React from 'react';
import ReactDOM from 'react-dom';
// 引入store
import store from './store'
// 引入react-redux的容器：Provider，可以让Provider包围下的所有组件拿到state状态，不管层级有多深
import { Provider } from 'react-redux'

// 引入全局antd-mobile样式
import 'antd-mobile/dist/antd-mobile.css'
// 引入顶级组件
import App from './App';

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));


