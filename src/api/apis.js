// 引入axios和qs
import axios from 'axios'
// qs是内置的，不用安装
import qs from 'qs'

// export const IP = 'http://172.16.14.211:80'//学校IP
// export const IP = 'http://192.168.0.106:80'//寝室IP
export const IP = 'http://192.168.43.169:80'//寝室IP
const req = axios.create({
    baseURL: IP,
    timeout: 10000//超时
})

// 登录接口
//参数acc：用户名，pwd：密码
export function login(acc, pwd) {
    return req.post('/login.php', qs.stringify({ acc, pwd }))
}
//注册接口
export function reg(acc, pwd) {
    return req.post('/reg.php', qs.stringify({ acc, pwd }))
}
//验证码接口
export function valitecode() {
    return req.get('/valitecode.php')
}
//房产列表接口
export function gethouselist() {
    return req.get('/gethouselist.php')
}
