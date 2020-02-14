import React, { Component } from 'react'
import { Carousel, Flex, WhiteSpace, WingBlank, Grid } from 'antd-mobile'
// 引入接口
import { gethouselist, IP } from '../../../api/apis'
// 引入样式
import './main.scss'
// 引入connect
import { connect } from 'react-redux'
// 导航数据
const data = [{
	icon: require('../../../assets/images/newhouse.jpg'),
	text: '新房',
}, {
	icon: require('../../../assets/images/secondhouse.jpg'),
	text: '二手房',
}, {
	icon: require('../../../assets/images/renthouse.jpg'),
	text: '租房',
}, {
	icon: require('../../../assets/images/officehouse.jpg'),
	text: '商铺写字楼',
}, {
	icon: require('../../../assets/images/sellhouse.jpg'),
	text: '卖房',
}, {
	icon: require('../../../assets/images/overseashouse.jpg'),
	text: '海外房产',
}, {
	icon: require('../../../assets/images/estatehouse.jpg'),
	text: '小区房价',
}, {
	icon: require('../../../assets/images/qaa.jpg'),
	text: '问答',
}];
class main extends Component {
	state = {
		value: '挑好房，上约家房地产APP',
		// 轮播状态
		imgdata: ['1', '2', '1'],
		imgHeight: 176,

		// 房产全百科
		realeStateEncyclopedia: [
			{ img: 'loan', title: '我要贷款' },
			{ img: 'houseloan', title: '房贷计算' },
			{ img: 'knowledge', title: '知识' },
			{ img: 'scan', title: '扫一扫' },],
		// 猜你喜欢
		lovelist: [{ "id": "1", name: '美的云溪郡', area: '仁寿县', range: "仁寿大道", type: "4室2厅", point: "117", price: "9000", imgs: "/imgs/1.jpg" }],

		// 高德地图
		mycity: '定位中'
	};

	//组件初始化完毕，可以发送ajax
	componentDidMount() {
		// this指向问题
		let _this = this;
		// 发送猜你喜欢ajax请求，获取后台数据
		gethouselist().then((res) => {
			// console.log(res.data)
			_this.setState({
				lovelist: res.data
			})
		})
		// 2、引入高德地图js文件后，在本页面调用相应的函数，要注意：window作用域问题和this指向问题
		//实例化城市查询类
		var citysearch = new window.AMap.CitySearch();
		//自动获取用户IP，返回当前城市
		citysearch.getLocalCity(function (status, result) {
			if (status === 'complete' && result.info === 'OK') {
				if (result && result.city && result.bounds) {
					var cityinfo = result.city;
					// var citybounds = result.bounds;
					// 显示当前城市名称
					// console.log(_this)
					_this.setState({
						mycity: cityinfo
					})
				}
			}
		});
	}

	render() {
		let { realeStateEncyclopedia, mycity } = this.state
		return (
			<div>
				<div className='header'>
					<label onClick={this.hrefClick.bind(this, '#/citylist')}>{mycity}▼</label>
					<div className='search_center' onClick={this.hrefClick.bind(this, '#/search')}>
						<img src={require('../../../assets/images/search.png')} alt='搜索' />
						< label > 挑好房，上约家房地产APP</label>
					</div>

					<img src={require('../../../assets/images/search_map.png')} alt='地图' onClick={this.hrefClick.bind(this, '#/map')} />
				</div>

				{/* 轮播 */}
				<div className='banner'>
					{/*infinite:是否循环播放
                    autoplay：自动播放
                    */}
					<Carousel
						autoplay
						infinite
					>
						{this.state.imgdata.map(val => (
							<img
								src={require(`../../../assets/images/banner${val}.jpg`)}
								alt=""
								key='val'
								style={{ width: '100%', verticalAlign: 'top' }}
								onLoad={() => {
									window.dispatchEvent(new Event('resize'));
									this.setState({ imgHeight: 'auto' });
								}}
							/>
						))}
					</Carousel></div>
				{/* 导航 */}
				<WhiteSpace size="lg" />
				<div className='nav' style={{ borderBottom: "10px solid #eee", paddingBottom: 20 }}>
					<WingBlank size="lg">
						{/*hasLine:是否有边框  */}
						<Grid data={data} hasLine={false} />

						{/* <div className="sub-title">
							{navdata.map((item, index) =>
								<div key={index} style={{ textAlign: 'center', marginTop: 10 }} >
									<img src={require('../../../assets/images/' + item.img + '.jpg')} alt='介绍' />
									<p>{item.title}</p>
								</div>)}
						</div> */}


					</WingBlank>
				</div>
				{/* 房产百科 */}
				<div className='houseProperty' style={{ borderBottom: "10px solid #eee", paddingBottom: 20 }}>
					<WingBlank size="lg">
						<WhiteSpace size="md" />
						<Flex >
							<h2 style={{ color: '#00B028' }}>房产全百科</h2>
							<p style={{ marginLeft: 5, color: '#484848' }}>专业的买房攻略</p>
						</Flex>
						<WhiteSpace size="sm" />
						<Flex wrap="wrap" justify="around">
							{realeStateEncyclopedia.map((item, index) =>
								<div key={index} style={{ textAlign: 'center', marginTop: 10, color: '#484848' }}>
									<img src={require(`../../../assets/images/${item.img}.jpg`)} alt='介绍' style={{ width: 30 }} />
									<p>{item.title}</p>
								</div>)}
						</Flex>
					</WingBlank>
				</div>
				{/* 猜你喜欢 */}
				<div className='like'>
					<WhiteSpace size="lg" />
					<h3 style={{ textIndent: 10 }}>猜你喜欢</h3>
					<WhiteSpace size="md" />
					{/* 遍历获取动态数据 */}
					{this.state.lovelist.map((obj) =>
						// <Flex justify="start">
						<div className='main_box' key={obj.id} onClick={this.detailClick.bind(this, obj)}>
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
						// </Flex>
					)}
				</div>
			</div >
		)
	}
	// 顶部城市，导航,点击跳转页面
	hrefClick(href) {
		window.location.href = href
	}
	// 点击猜你喜欢，增加一条到足迹
	detailClick(housedetail) {
		// 提交一个action,触发reducer进行计算
		this.props.dispatch({
			type: 'add_house',
			housedetail
		})
	}
	// 组建卸载,返回空的state
	componentWillUnmount = () => {
		this.setState = (state, callback) => {
			return;
		};
	}
}
// 
export default connect(() => {
	return
})(main)
