import React from 'react';

// 非受控组件
class App extends React.Component {
  handleButton = (e) => {
    e.preventDefault()  // 阻止 form 跳转
    const { userName, passWord } = this
    console.log(`你输入的用户名为：${userName.value}，输入的密码为：${passWord.value}`)
  }

  render() {
    return (
      <form onSubmit={this.handleButton}>
        用户名：<input ref={e => this.userName = e} type="text" />
        密码：<input ref={e => this.passWord = e} type="password" />
        <button>提交</button>
      </form>
    )
  }
}

export default App;
