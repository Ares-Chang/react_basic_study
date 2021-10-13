import React, { Component } from 'react';
import PropTypes from 'prop-types'

class List extends Component {
	// props 规则限制
	static propTypes = {
		todos: PropTypes.array.isRequired,
		updateTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired
	}
	/**
	 * @description 触发列表状态单选框
	 * @param {Number} id id 值
	 * @returns 返回回调事件，React 中的一种传值写法
	 */
	handleChange = (id) => {
		return (e) => {
			this.props.updateTodo(id, e.target.checked)	// 传递给父组件，更改列表状态
		}
	}
	/**
	 * @description 触发删除按钮事件，区别高阶函数，React 中另外一种传值方法
	 * @param {Number} id ID 传值
	 */
	handleDelete = (id) => {
		// confirm 弹窗确定，是否删除
		window.confirm('确定删除吗？') && this.props.deleteTodo(id)	// 传值给父组件，删除对应项
	}
	render() {
		const { todos } = this.props
		return (
			<div className="list">
				<ul>
					{todos.map(item => {
						return (
							<li key={item.id}>
								<div>
									<input type="checkbox" checked={item.done} onChange={this.handleChange(item.id)} />
									<span>{item.title}</span>
								</div>
								<div>
									<button onClick={() => this.handleDelete(item.id)}>删除</button>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		);
	}
}

export default List;