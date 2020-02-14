// 引入redux
import { createStore } from 'redux'

// 创建(1)store:仓库，只负责接收保存数据;(2)function函数就是reducer的具体体现
export default createStore((state = [], action) => {
    // console.log(action.housedetail)
    switch (action.type) {
        case "add_house": return [...new Set([action.housedetail, ...state])]
        default: return state
    }
})

