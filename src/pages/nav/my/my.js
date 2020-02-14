import React, { Component } from 'react'
import { List } from 'antd-mobile'
import './my.scss'

// 内容循环
const Item = List.Item;


export default class my extends Component {
    state = {
        datalist: [{ img: '' }, { img: 'integral1', text: '我的积分' }, { img: 'subscription', text: '我的订阅' }, { img: 'linkman', text: '微聊联系人' }, { img: '' }, { img: 'comouter', text: '房贷计算器' }, { img: 'house', text: '我的房子' }, { img: '' }, { img: 'history', text: '我的看房记录' }, { img: 'qa', text: '我的问答' }, { img: '' }, { img: 'set', text: '设置' }, { img: 'set', text: '反馈' }]
    }

    render() {
        return (
            <div className='my_box'>
                <div className='my_header'>
                    {/* 头部上 */}
                    <div className='header_top'>
                        <img className='avater' src={require('../../../assets/images/avatar.jpg')} alt='头像' />
                        <div className='header_content'>
                            <div className='header_conleft'>
                                <p style={{ fontSize: 20 }}><span onClick={this.changeClick.bind(this, '#/login')}>登陆</span>/<span onClick={this.changeClick.bind(this, '#/reg')}>注册</span></p>
                                <p>可以与经纪人发起聊天</p>
                            </div>
                            <img className='set' src={require('../../../assets/images/set.png')} alt='设置' />
                        </div>
                    </div>
                    {/* 头部下 */}
                    <div className='header_bottom'>
                        <div style={{ borderRight: '1px solid #eee', paddingRight: 30 }}>
                            <p className='num'>0</p>
                            <p><img src={require('../../../assets/images/money.png')} alt='图片' /><span>钱包</span></p>
                        </div>
                        <div style={{ borderRight: '1px solid #eee', paddingRight: 30 }}>
                            <p className='num'>0</p>
                            <p><img src={require('../../../assets/images/discounts.png')} alt='图片' /><span>优惠</span></p>
                        </div>
                        <div>
                            <p className='num'>0</p>
                            <p><img src={require('../../../assets/images/integral.png')} alt='图片' /><span>积分</span></p>
                        </div>

                    </div>
                </div>
                {/* 主体部分 */}
                <div className='my_content'>
                    <div className='content_box'>
                        {/*thumb：缩略图
                         arrow：箭头方向  horizontal右 */}
                        <List>
                            {this.state.datalist.map(obj => {
                                if (obj.img != '') {
                                    return <Item
                                        thumb={require('../../../assets/images/' + obj.img + '.png')}
                                        arrow="horizontal"
                                        key={obj.text}
                                    >{obj.text}</Item>
                                } else return <div style={{ backgroundColor: '#F4F4F4', height: 10 }} ></div>
                            })
                            }
                        </List>
                    </div>
                </div>
            </div >
        )
    }
    // 

    changeClick(href) {
        window.location.href = href
    }
}
