import React, { Component } from 'react'
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
	/**
	 * @description 更改列表完成状态 
	 * @param {Number} id id 值
	 * @param {Boolean} done 当前状态，是否完成
	 */
	updateTodo = (id, done) => {
		const { todos } = this.state
		let newTodos = todos.map(item => {
			return item.id === id ? { ...item, done } : item
		})
		this.setState({ todos: newTodos })
	}
	/**
	 * @description 用于删除一个 todo 项
	 * @param {Number} id ID 值
	 */
	deleteTodo = (id) => {
		const { todos } = this.state
		this.setState({ todos: todos.filter(item => item.id !== id) })
	}
	/**
	 * @description 全选/全不选 todo 列表
	 * @param	{Boolean} done 判断所有项中是否有未选中状态，如果有返回 true 全部选择，如未有，返回 false 全不选
	 */
	checkAllTodo = (done) => {
		const { todos } = this.state
		this.setState({
			todos: todos.map(item => {
				return { ...item, done }
			})
		})
	}
	/**
	 * @description 清除所有已完成的任务项
	 */
	clearAllDone = () => {
		const { todos } = this.state
		this.setState({ todos: todos.filter(item => !item.done) })
	}
	render() {
		const { todos } = this.state
		return (
			<div className="TodoList">
				<Header addTodo={this.addTodo}></Header>
				<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
				<Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}></Footer>
			</div>
		)
	}
}

export default TodoList

