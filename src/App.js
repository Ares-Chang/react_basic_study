import React from 'react';
import PropTypes from 'prop-types'

// String 型 Refs Demo
class App extends React.Component {
  showText = () => {
    // 通过 this.refs 调用
    const { input } = this.refs
    alert(input.value)
  }
  render() {
    return (
      <div>
        {/* 直接 ref='name' */}
        <input ref="input" onBlur={this.showText} type="text" placeholder="失去焦点弹窗输入内容！" />
      </div>
    )
  }
}

export default App;
