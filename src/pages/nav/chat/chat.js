import React, { Component } from 'react'
import './chat.scss'
export default class chat extends Component {
    render() {
        return (
            <div className='chat_box'>

                <div className='dialog_box'>
                    <img src={require('../../../assets/images/avatar.jpg')} alt='头像' />
                    <p>置业顾问：<span>李小葱</span></p>
                    <p>专业服务诚信做人诚心做事！</p>
                    <p className='chat_btn'>我要聊天</p>
                </div>
            </div>
        )
    }
}
