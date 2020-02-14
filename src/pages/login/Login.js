import React, { Component } from 'react'
// 引入antd-mobile
import { WhiteSpace, Flex, InputItem, WingBlank, Button, Toast } from 'antd-mobile'
// 引入路由
import { Link } from 'react-router-dom'
//引入scss
import './Login.scss'
// 引入接口
import { login } from '../../api/apis'
export default class Login extends Component {
	state = {
		user: '',
		pwd: '',
		olduser: '',//验证时需要老用户名
		oldpwd: ''//老密码
	}
	render() {
		let { user, pwd } = this.state
		return (
			<div>
				{/* 上下留白：WhiteSpace */}
				<WhiteSpace size="xl" />
				{/* flex布局 */}
				<Flex justify="center">
					<div style={{ height: 150 }}>
						<img style={{ width: 120, marginTop: 30 }} src={require('../../assets/images/logo.png')} alt='logo' />
					</div>
				</Flex>

				{/* 两侧留白：WingBlank */}
				<WingBlank style={{ marginTop: 70 }}>
					<InputItem
						placeholder="请输入用户名"
						clear
						value={user}
						onChange={val => this.setState({ user: val })}
					>
						<div style={{ backgroundImage: `url(${require('../../assets/images/user.svg')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
					</InputItem>
					<WhiteSpace size="md" />
					<InputItem
						placeholder="请输入密码"
						clear
						type='password'
						value={pwd}
						onChange={val => this.setState({ pwd: val })}
					>
						<div style={{ backgroundImage: `url(${require('../../assets/images/pwd.svg')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
					</InputItem>
					<WhiteSpace size="lg" />
					<Button
						activeStyle={{ backgroundColor: ' rgb(56, 150, 166)' }}
						style={{ backgroundColor: '#00B028', color: '#fff' }}
						onClick={this.loginbtn}
					>登录</Button>
					<WhiteSpace size="md" />
					<Flex justify="between">
						<Link to='/reg'>手机快速注册</Link>
						<Link to='/forgetpwd'>忘记密码？</Link>
					</Flex>

				</WingBlank>
				<div className='bottom'>
					<p>登录/注册即代表同意《约家房地产用户协议》</p>
				</div>
			</div >
		)
	}
	//点击登录发送请求
	loginbtn = () => {
		// 优化代码
		// 当前的用户名和密码
		let user = this.state.user
		let pwd = this.state.pwd

		// 判断：如果当前用户名密码和老的一致，则return,阻止发送ajax请求
		if (this.state.olduser === user && this.state.oldpwd === pwd) return

		// 把当前的用户名密码赋值给老的
		this.setState({
			olduser: user,
			oldpwd: pwd
		})
		console.log('测试')
		// 发送ajax请求
		login(user, pwd).then((res) => {
			if (res.data === 'ok') {
				// 登录成功，跳转到首页
				window.location.href = '#/'
			} else {
				Toast.offline('请检查您的用户名和密码！！！', 3);//3：自动关闭的延时，单位秒
			}
		})

	}
}
