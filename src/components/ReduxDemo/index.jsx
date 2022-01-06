import React, { Component } from "react";

class ReduxDemo extends Component {
  state = {
    num: 0,
    value: 1, // 当前选项值
  };
  /**
   * 更改 select 选项触发
   * @param {Object} e 触发对象
   */
  changeSelect = (e) => {
    this.setState({
      value: Number(e.target.value),
    });
  };
  /**
   * 奇数加
   */
  oddAdd = () => {
    const { value, num } = this.state;
    if (!(num % 2)) return false; // 偶数弹出
    this.setState({
      num: num + value,
    });
  };
  /**
   * 偶数加
   */
  evenAdd = () => {
    const { value, num } = this.state;
    if (num % 2) return false; // 奇数弹出
    this.setState({
      num: num + value,
    });
  };
  /**
   * 异步加
   */
  asyncAdd = () => {
    const { value, num } = this.state;
    // 模拟请求
    setTimeout(() => {
      this.setState({
        num: num + value,
      });
    }, 3000);
  };
  render() {
    const { num } = this.state;
    return (
      <div style={{ padding: "0 20px" }}>
        <span>当前计数 {num}</span>
        <div style={{ marginTop: "10px" }}>
          <select
            onChange={(e) => this.changeSelect(e)}
            style={{ marginRight: "4px" }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={() => this.oddAdd()}>奇数加</button>
          <button onClick={() => this.evenAdd()}>偶数加</button>
          <button onClick={() => this.asyncAdd()}>异步加</button>
        </div>
      </div>
    );
  }
}

export default ReduxDemo;
