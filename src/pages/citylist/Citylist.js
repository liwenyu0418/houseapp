import React, { Component } from 'react'
// 引入better-sctoll
import BScroll from 'better-scroll'
import './Citylist.scss'
// 引入城市列表json
import citylist from '../../json/citylist/city.json'
export default class Citylist extends Component {
    render() {
        return (
            <div className='citylist_box'>
                <div className='citylist_title'>
                    <p className='back' onClick={this.clickBack}>返回</p>
                    <p className='select_city'>城市选择</p>
                </div>

                {/* 左边列表 */}
                <div className='citylist_box_left'>
                    {/* ul是better-scroll必须用的容器，且class固定为content*/}
                    <ul className="content">
                        {citylist.map(obj =>
                            <div id={obj.title} key={obj.title} style={{ margin: 10 }}>
                                <h3 >{obj.title}</h3>
                                {obj.child.map(list =>
                                    <p style={{ lineHeight: 2 }} key={list}>{list}</p>
                                )}
                            </div>
                        )}
                    </ul>
                </div>
                {/* 右边滚轮 */}
                <div className='citylist_box_right' onTouchMove={this.moveRigthTitle.bind(this)}>
                    {citylist.map(obj =>
                        <p key={obj.title}
                            onClick={this.clickRightTitle.bind(this, obj.title)}
                            className='randomName'
                        >{obj.title}</p>
                    )}
                </div>
            </div>
        )
    }
    // 点击返回
    clickBack() {
        window.location.href = '#/'
    }
    // 右侧标题点击事件
    clickRightTitle(title) {
        // scrollToElement滚动到的目标元素
        this.leftBox.scrollToElement('#' + title, 500)
    }
    // 右侧标题触摸事件
    moveRigthTitle(e) {
        // touches是触摸事件的一个方法，e.touches[0]可以获取第一根手指的触屏事件对象
        // console.log(e.touches[0])

        // 要想获取当前手指的坐标，必须指定获取的是哪个手指的坐标
        // console.log(e.touches[0].clientX, e.touches[0].clientY)
        // document.elementFromPoint的作用：可以根据当前的x\y坐标，获取此坐标对用的DOM元素
        let target = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
        if (target.className == 'randomName') {
            this.leftBox.scrollToElement('#' + target.innerHTML, 500)
        }
    }
    componentDidMount() {
        // 初始化滚轮，第一个参数是获取的容器
        // 把BScroll注册到this上
        this.leftBox = new BScroll('.citylist_box_left')
    }
}
