import React, { Component } from 'react'

import './Map.scss'
export default class Map extends Component {
    state = {
        selectcity: ''
    }
    render() {
        return (
            <div className='my_map' style={{ width: '100%', height: '100%' }}>
                <div className='map_title'>
                    <p className='back' onClick={this.clickBack}>返回</p>
                    <p className='myposition'>我的位置</p>
                </div>

                {/* <div style={{ width: '100%', height: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>您当前所在城市：{this.state.selectcity}</div> */}
                {/* 定义一个装地图的盒子 */}
                <div id="container" style={{ width: '100%', height: '100%' }}></div>

            </div>
        )
    }

    // 点击返回
    clickBack = () => {
        window.location.href = '#/'
    }

    componentDidMount() {
        // 改变this指向
        // let _this = this
        var map = new window.AMap.Map('container', {
            resizeEnable: true
        });
        var options = {
            'showButton': true,//是否显示定位按钮
            'buttonPosition': 'LB',//定位按钮的位置
            /* LT LB RT RB */
            'buttonOffset': new window.AMap.Pixel(10, 20),//定位按钮距离对应角落的距离
            'showMarker': true,//是否显示定位点
            'markerOptions': {//自定义定位点样式，同Marker的Options
                'offset': new window.AMap.Pixel(-18, -36),
                'content': '<img src="https://a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:36px;height:36px"/>'
            },
            'showCircle': true,//是否显示定位精度圈
            'circleOptions': {//定位精度圈的样式
                'strokeColor': '#0093FF',
                'noSelect': true,
                'strokeOpacity': 0.5,
                'strokeWeight': 1,
                'fillColor': '#02B0FF',
                'fillOpacity': 0.25
            }
        }
        window.AMap.plugin(["AMap.Geolocation"], function () {
            var geolocation = new window.AMap.Geolocation(options);
            map.addControl(geolocation);
            geolocation.getCurrentPosition()
        });
        //3、渲染到页面
        // var map = new window.AMap.Map("container", {
        //     resizeEnable: true,
        //     center: [116.397428, 39.90923],
        //     zoom: 13
        // });
        //获取用户所在城市信息

        // //2、引入高德地图，实例化城市查询类
        // var citysearch = new window.AMap.CitySearch();
        // //自动获取用户IP，返回当前城市
        // citysearch.getLocalCity(function (status, result) {
        //     if (status === 'complete' && result.info === 'OK') {
        //         if (result && result.city && result.bounds) {
        //             var cityinfo = result.city;
        //             // var citybounds = result.bounds;
        //             _this.setState({
        //                 selectcity: cityinfo
        //             })
        //             //地图显示当前城市
        //             // map.setBounds(citybounds);
        //         }
        //     } else {
        //         console.log(result.info)
        //     }
        // });

    }
}
