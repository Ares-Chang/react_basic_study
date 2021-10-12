import React, { Component, createContext } from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'
import './index.css'
/**
 * 练习组件拆分，组件通信等...
 */
export class TodoList extends Component {
	state = {
		todos: [ // 默认数据
			{ id: 1, title: '吃饭', done: false },
			{ id: 2, title: '睡觉', done: true },
			{ id: 3, title: '打豆豆', done: false },
		]
	}
	/**
	 * @description 父子通信，添加 TodoList 列表
	 * @param {Object} obj 列表对象 
	 */
	addTodo = (obj) => {
		this.setState({ todos: [obj, ...this.state.todos] })	// 添加到 List 列表，最新的在前面
	}
	render() {
		const { todos } = this.state
		return (
			<div className="TodoList">
				<Header addTodo={this.addTodo}></Header>
				<List todos={todos}></List>
				<Footer></Footer>
			</div>
		)
	}
}

export default TodoList

