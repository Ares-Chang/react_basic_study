import React from 'react';
import ReactDOM from 'react-dom';

// 生命周期
class App extends React.Component {
  // 继承
  constructor(props) {
    /**
     * constructor 可以不写，如果写了必须调用 super()。
     */
    console.log('mount ---- constructor 调用了！')
    super(props)
    this.state = {
      count: 0, // 计数累加
    }
  }

  // 组件将要挂载的钩子
  UNSAFE_componentWillMount() {
    /**
     * 新版 componentWillMount 更名为 UNSAFE_componentWillMount 
     * 
     * 组件挂载之前执行此钩子
     */
    console.log('mount ---- UNSAFE_componentWillMount: 组件将要挂载了！')
  }

  // 组件挂载完毕的钩子
  componentDidMount() {
    /**
     * 组件挂载完毕之后会执行此钩子。
     */
    console.log('mount ---- componentDidMount: 组件挂载完成了！')
  }

  // 控制组件是否更新的钩子
  shouldComponentUpdate() {
    /**
     * 每次需要更新之前都会触发这个钩子，
     * 只有返回为 true，才会触发 render 进行页面渲染。
     * 返回 false 不做处理。
     * 
     * 这个钩子可以不写，不写的情况下默认返回 true。
     * 如果写了，必须要写返回值！！！ 
     */
    console.log('update ---- shouldComponentUpdate: 我确认为真 render 才能渲染！')
    return true
  }

  // 组件将要更新的钩子
  UNSAFE_componentWillUpdate() {
    /**
     * 新版 componentWillUpdate 更名为 UNSAFE_componentWillUpdate
     * 组件更新之前会执行此钩子。
     */
    console.log('update ---- UNSAFE_componentWillUpdate: 组件马上要更新了！')
  }

  // 组件更新完毕的钩子
  componentDidUpdate() {
    /**
     * 组件更新完毕之后会执行此钩子。
     */
    console.log('update ---- componentDidUpdate: 组件更新完成了！')
  }

  // 初始化渲染、状态更新之后都会触发的钩子
  render() {
    const { count } = this.state
    console.log(`${!count ? "mount" : "update"} ---- render: 每次需要渲染我都会触发！`)
    return (
      <div>
        <Children text='组件的生命周期' />
        <h2>当前求和：{count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>点我加1</button>
        <button onClick={this.unload}>卸载组件</button>
        <button onClick={this.force}>强制更新</button>
      </div>
    )
  }

  // 卸载组件的回调
  unload() {
    // 卸载组件
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  // 组件将要卸载的钩子
  componentWillUnmount() {
    /**
    * componentWillUnmount 会在组件卸载及销毁之前直接调用。
    * 可以在此方法中执行必要的清理操作，
    * 例如，清除 timer，取消网络请求或清除在 componentDidMount 中创建的订阅等。
    * componentWillUnmount 中不应调用 setState，因为该组件将永远不会重新渲染。
    * 组件实例卸载后，将永远不会再挂载它。
    */
    console.log('unload ---- componentWillUnmount: 组件将要卸载了！')
  }

  // 强制更新的回调
  force = () => {
    /**
     * 在不更改 state 中数据的情况下，强制重新渲染。
     * 不经过 shouldComponentUpdate 检验。
     */
    console.log('forceUpdate: 即将进入强制渲染流程！')
    this.forceUpdate()
  }
}

class Children extends React.Component {
  // props 更新会触发这个钩子
  UNSAFE_componentWillReceiveProps(props) {
    /**
     * 新版 componentWillReceiveProps 更名为 UNSAFE_componentWillReceiveProps
     * 
     * 父组件更新 props 之后会触发 UNSAFE_componentWillReceiveProps 钩子
     * 钩子会自带 props 参数，值为父组件传递的 props 属性
     * 
     * 但是！这个钩子第一次挂载并不会生效，只有在父组件再次更新之后才会触发这个钩子！！！
     */
    console.log('update ---- UNSAFE_: 父组件更新了，我也想更新~')
  }
  render() {
    return <h1>{this.props.text}</h1>
  }
}

export default App;
