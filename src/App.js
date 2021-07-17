import React from 'react';
import PropTypes from 'prop-types'

// 回调型 Refs Demo
class App extends React.Component {
  showText = () => {
    alert(this.input.value)
  }
  setDome = (e) => {
    this.input = e
  }
  render() {
    return (
      <div>
        {/* class 绑定式 */}
        <input ref={this.setDome} onBlur={this.showText} type="text" placeholder="失去焦点弹窗输入内容！" />
      </div>
    )
  }
}

export default App;
