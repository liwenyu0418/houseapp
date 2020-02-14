import React, { Component } from 'react'
// 引入connect
import { connect } from 'react-redux'
import { IP } from '../../../api/apis'
// 引入scss样式
import './history.scss'
class history extends Component {
    render() {
        // console.log(this)
        return (
            <div className='my_history'>
                <div className='title'>我的足迹</div>
                {this.props.state.map((obj) =>
                    <div className='main_box' key={obj.id} >
                        {/* 左边图片 */}
                        <div className='img_box'>
                            <img src={IP + obj.imgs} alt='推荐' />
                        </div>
                        {/* 右侧 */}
                        <div className='contentbox' >
                            <div className='leftcon'>
                                <h3 className='name'>{obj.name}</h3>
                                <p>
                                    <span>{obj.area}</span>
                                    <span>{obj.range}</span>
                                </p>
                                <p>
                                    <span>{obj.type}</span>
                                    <span>{obj.point + '平'}</span>
                                </p>
                            </div>
                            <div className='rightcon'>
                                {obj.price + '/平'}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
export default connect(state => {
    return { state }
})(history)