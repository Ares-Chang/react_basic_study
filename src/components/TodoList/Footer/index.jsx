import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div>
					<input type="checkbox" />
					<span>已完成0/全部2</span>
				</div>
				<div>
					<button>清除已完成任务</button>
				</div>
			</div>
		);
	}
}

export default Footer;