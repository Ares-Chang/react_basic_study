import React from 'react';

// 受控组件
class App extends React.Component {
  state = {
    userName: '',
    passWord: ''
  }

  handleButton = (e) => {
    e.preventDefault()  // 阻止 form 跳转
    const { userName, passWord } = this.state
    console.log(`你输入的用户名为：${userName}，输入的密码为：${passWord}`)
  }

  render() {
    return (
      <form onSubmit={this.handleButton}>
        {/* 动态更改数据状态，只要用户触发，就会更改 */}
        用户名：<input onChange={(e) => this.setState({ userName: e.target.value })} type="text" />
        密码：<input onChange={(e) => this.setState({ passWord: e.target.value })} type="password" />
        <button>提交</button>
      </form>
    )
  }
}

export default App;
