// 引入redux
import { createStore } from 'redux'

// 创建(1)store:仓库，只负责接收保存数据;(2)function函数就是reducer的具体体现
const store = createStore(function (state, action) {
    console.log('初始值：', state, action)
    switch (action.type) {
        case 'add': return state + action.num
    }
    return 0
})

// （3）改变reducer状态，只能通过发送action
function a(num) {
    return {
        type: 'add',
        num
    }
}
//通过dispatch触发reducer，reducer一旦被触发就会计算新的值返回给store
store.dispatch(a(1))


console.log(store.getState())
// 暴露
export default store




// 1、store,只负责接收和保存值，不负责任何运算,reducer返回的值，就会被直接保存在store中
// 2、reducer： 计算者, 通过各种计算，返回新的状态给store，
// 3、action:通知，如果想要通知reducer进行状态改变，只能发送一个action

//我只是来做gitub更新测试的