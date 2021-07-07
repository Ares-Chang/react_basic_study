import React from 'react';

// 有状态组件数据更新 简写版
class App extends React.Component {
  state = { isHost: true, wind: '微风' }  // 类内赋值会自行注册初始化
  render() {
    const { isHost, wind } = this.state
    return <h2 onClick={this.changeWeather}>今天天气很{isHost ? "炎热" : "凉爽"},{wind}</h2>
  }

  changeWeather = () => { // 箭头函数内是没有 this 的 this 指向父级
    const { isHost } = this.state
    this.setState({ isHost: !isHost })
  }
}
export default App;
