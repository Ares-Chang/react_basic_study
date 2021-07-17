import React from 'react';
import PropTypes from 'prop-types'

// createRef Demo
class App extends React.Component {
  myRef = React.createRef()
  showText = () => {
    alert(this.myRef.currenst.value)
  }
  render() {
    return (
      <div>
        {/* createRef 绑定式 */}
        <input ref={this.myRef} onBlur={this.showText} type="text" placeholder="失去焦点弹窗输入内容！" />
      </div>
    )
  }
}

export default App;
