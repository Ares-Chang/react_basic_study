import React from 'react';
// function App() {
// jsx 基础学习
// const text = 'Hello,React';
// return (
// 虚拟 DOM 只能有一个根标签并且不需要引号
// <div className="App"> {/* 样式类名指定不要用 class，要使用 className。 */}
//   <span style={{ fontSize: '24px' }}>{text}</span> {/* 内联样式要用对象形式写。 */}
//   <br /> {/* 标签必须闭合 */}
//   <p>这是一个小写字母</p>
//   {/* <P>这里会报错，因为找不到对应的组件。</P> */}
// </div>
// );

// // 循环列表
// const dataList = ['Angular', 'React', 'Vue']
// return (
//   <div className="App">
//     <ul>
//       {dataList.map((item, index) => <li key={index}>{item}</li>)}
//     </ul>
//   </div>
// );

// // 函数式组件
// console.log(this); // 此处 this 是 undefined，因为处于严格模式中。
// return (
//   <div className="App">
//     <h1>我是函数式组件。</h1>
//   </div>
// )
// }

// 有状态组件更新数据
// class App extends React.Component {
//   constructor(props) {
//     super(props)  // constructor 要求必须调用 super 继承。
//     this.state = { isHost: true, wind: '微风' } // 设置 state 状态，必须为 {}。内部存放要使用的数据。
//     this.changeWeather = this.changeWeather.bind(this)  // 为函数重新指定 this，如果不重新指定内部 this 为 undefined
//   }
//   render() {
//     const { isHost, wind } = this.state // 简写，方便下方调用。
//     // 事件注册。
//     return <h2 onClick={this.changeWeather}>今天天气很{isHost ? "炎热" : "凉爽"},{wind}</h2>
//   }

//   changeWeather() {
//     // console.log(this)  // 经 bind() 指向，应为 App 类，否则为 undefined。

//     // 状态不可直接更改，要使用 setState 更改。
//     // this.isHost = !this.isHost // 错误，数据更改，但是 React 不认可，无法刷新页面。
//     const { isHost } = this.state
//     this.setState({ isHost: !isHost })  // 正确写法，setState 是一种更新，不是替换！！！
//   }
// }

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
