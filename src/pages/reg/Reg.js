import React, { Component } from 'react'
import { InputItem, WingBlank, List, WhiteSpace, Checkbox, Button } from 'antd-mobile'
import { Link } from 'react-router-dom'
// 引入注册接口
import { reg } from '../../api/apis'
const AgreeItem = Checkbox.AgreeItem
export default class Reg extends Component {
    state = {
        tel: '',
        pwd: '',

    }
    render() {
        return (
            <div>
                {/* 上下留白：WhiteSpace */}
                <WhiteSpace size="xl" />
                <WingBlank size="lg">
                    <List style={{ backgroundColor: '#F5F5F9' }}>
                        <InputItem
                            clear
                            placeholder="请输入手机号"

                        ></InputItem>
                        <InputItem
                            clear
                            placeholder="请输入密码"
                        ></InputItem>
                        <InputItem
                            clear
                            placeholder="请输入验证码"
                        ></InputItem>
                    </List>
                    <AgreeItem >
                        我已同意<Link to='/'>《用户协议》</Link>及<Link to='/'>《隐式权政策》</Link>
                    </AgreeItem>
                    <WhiteSpace size="lg" />
                    <Button
                        style={{ backgroundColor: '#00B028', color: '#fff' }}
                        onClick={this.regBtn}
                    >注册</Button>
                    <WhiteSpace size="lg" />
                    <Link to='/login'>已有账号</Link>
                </WingBlank>
            </div>
        )
    }
    // 点击注册按钮事件函数
    // regBtn = () => {

    //     reg()
    // }
}
