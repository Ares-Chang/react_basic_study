import React, { Component } from 'react'
import store from './redux/store'

class ReduxDemo extends Component {
  my_input = React.createRef()
  state = {
    value: 1 // 当前选项值
  }

  // // 局部监测数据更新
  // componentDidMount() {
  //   // 检测 redux 中状态的变化，只要变化，就调用 render
  //   store.subscribe(() => {
  //     this.setState({}) // render 重新渲染
  //   })
  // }

  /**
   * 更改 select 选项触发
   * @param {Object} e 触发对象
   */
  changeSelect = e => {
    this.setState({
      value: Number(e.target.value)
    })
  }
  /**
   * 增加
   */
  add = () => {
    const { value } = this.state
    store.dispatch({
      type: 'increment',
      data: value
    })
  }
  /**
   * 减少
   */
  minus = () => {
    const { value } = this.state
    store.dispatch({
      type: 'decrement',
      data: value
    })
  }
  /**
   * 奇数加
   */
  oddAdd = () => {
    const { value } = this.state
    if (!(store.getState() % 2)) return false // 偶数弹出
    store.dispatch({
      type: 'increment',
      data: value
    })
  }
  /**
   * 偶数加
   */
  evenAdd = () => {
    const { value } = this.state
    if (store.getState() % 2) return false // 奇数弹出
    store.dispatch({
      type: 'increment',
      data: value
    })
  }
  /**
   * 异步加
   */
  asyncAdd = () => {
    const { value } = this.state
    // 模拟请求
    setTimeout(() => {
      store.dispatch({
        type: 'increment',
        data: value
      })
    }, 3000)
  }
  render() {
    return (
      <div style={{ padding: '0 20px' }}>
        <span>当前计数 {store.getState()}</span>
        <div style={{ marginTop: '10px' }}>
          <select
            onChange={e => this.changeSelect(e)}
            style={{ marginRight: '4px' }}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          <button onClick={() => this.add()}>+</button>
          <button onClick={() => this.minus()}>-</button>
          <button onClick={() => this.oddAdd()}>奇数加</button>
          <button onClick={() => this.evenAdd()}>偶数加</button>
          <button onClick={() => this.asyncAdd()}>异步加</button>
        </div>
      </div>
    )
  }
}

export default ReduxDemo
