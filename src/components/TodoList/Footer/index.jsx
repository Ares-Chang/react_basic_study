import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Footer extends Component {
	static propTypes = {
		todos: PropTypes.array.isRequired,
		checkAllTodo: PropTypes.func.isRequired,
		clearAllDone: PropTypes.func.isRequired,
	}
	/**
	 * @description 触发 全选/全部取消 按钮
	 */
	handleCheckAll = (e) => {
		this.props.checkAllTodo(e.target.checked)
	}
	/**
	 * @description 清除所有已经完成的任务项
	 */
	handleClearAll = () => {
		this.props.clearAllDone()
	}
	render() {
		const { todos } = this.props
		// 通过 reduce 方法计算完成事项数值
		const doneCount = todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
		const total = todos.length
		return (
			<div className="footer">
				<div>
					<input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleCheckAll} />
					<span>已完成{doneCount}/全部{total}</span>
				</div>
				<div>
					<button onClick={this.handleClearAll}>清除已完成任务</button>
				</div>
			</div>
		);
	}
}

export default Footer;