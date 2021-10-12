import React, { Component } from 'react';

class List extends Component {
	handleChange = (e) => {
		console.log(e)
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
									<input type="checkbox" checked={item.done} onChange={this.handleChange} />
									<span>{item.title}</span>
								</div>
								<div>
									<button>删除</button>
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