import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Header extends Component {
	static propTypes = {
		addTodo: PropTypes.func.isRequired
	}
	handleKeyDown = (e) => {
		if (e.keyCode !== 13 || !e.target.value.trim()) return	// 按回车进入，否则退出,值为空也退出
		this.props.addTodo({
			id: Date.now(),
			title: e.target.value.trim(),
			done: false
		})
		e.target.value = ''	// 添加成功，置空输入
	}
	render() {
		return (
			<div className="header">
				<input onKeyDown={this.handleKeyDown} type="text" placeholder="输入任务名称，按回车键确认" />
			</div>
		);
	}
}

export default Header;