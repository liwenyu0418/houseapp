import React, { Component } from 'react'
// 引入antd design mobile
import { TabBar } from 'antd-mobile'
// 引入组件
import Main from './main/main'
import Chat from './chat/chat'
import History from './history/history'
import My from './my/my'

export default class Home extends Component {
	state = {
		selectedTab: 'main',//默认选中标签
		// 导航列表
		navlist: [
			{ title: '首页', key: 'main', icon: 'homeb', selectedicon: 'home' },
			{ title: '微聊', key: 'chat', icon: 'chatb', selectedicon: 'chat' },
			{ title: '足迹', key: 'history', icon: 'historyb', selectedicon: 'history' },
			{ title: '我的', key: 'my', icon: 'myb', selectedicon: 'my' }]
	}
	// 	渲染内容函数
	renderContent() {
		// 根据当前选中的标签判断跳转的页面
		switch (this.state.selectedTab) {
			case 'main': return <Main />
			case 'chat': return <Chat />
			case 'history': return <History />
			case 'my': return <My />
		}

	}
	render() {
		return (
			<div>
				<div style={{ position: 'fixed', height: '100%', width: '100%', bottpm: 0 }}>
					{/* unselectedTintColor：未选中的字体颜色 
                        tintColor：选中的字体颜色	
                        barTintColor：tabbar 背景色
                    */}
					<TabBar
						unselectedTintColor="#949494"
						tintColor="#33A3F4"
						barTintColor="white"
					>
						{/* icon：默认展示图片
                selectedIcon：选中后的展示图片	 */}
						{this.state.navlist.map(obj => <TabBar.Item
							title={obj.title}
							key={obj.key}
							icon={<div style={{
								width: '22px',
								height: '22px',
								background: `url(${require('../../assets/images/' + obj.icon + '.svg')}) center center /  21px 21px no-repeat`
							}}
							/>
							}
							selectedIcon={<div style={{
								width: '22px',
								height: '22px',
								background: `url(${require('../../assets/images/' + obj.selectedicon + '.svg')}) center center /  21px 21px no-repeat`
							}}
							/>
							}
							selected={this.state.selectedTab === obj.key}
							onPress={() => {
								this.setState({
									selectedTab: obj.key,
								});
							}}
						>
							{/* 渲染部分 */}
							{this.renderContent()}
						</TabBar.Item>)}
					</TabBar>

				</div >
			</div >
		)
	}

}

