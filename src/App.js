import React from 'react';
import PropTypes from 'prop-types'

// props 组件传值
// class App extends React.Component {
//   static propTypes = {
//     // name: React.propTypes.string, // 15.x 之前写法
//     name: PropTypes.string,  // 16.x 之后写法，不是必须的
//     sex: PropTypes.string.isRequired,  // isRequired 后缀，标识这具值是必传的
//     age: PropTypes.number.isRequired
//   }
//   static defaultProps = { // 设置默认值，如果没有传值会使用默认值。
//     name: 'Jack'
//   }
//   render() {
//     return (
//       <ul>
//         <li>姓名：{this.props.name}</li>
//         <li>性别：{this.props.sex}</li>
//         <li>年龄：{this.props.age}</li>
//       </ul>
//     )
//   }
// }

function App(props) {
  console.log(props)
  return (
    <ul>
      <li>姓名：{props.name}</li>
      <li>性别：{props.sex}</li>
      <li>年龄：{props.age}</li>
    </ul>
  )
}
App.propTypes = {
  name: PropTypes.string,  // 16.x 之后写法，不是必须的
  sex: PropTypes.string.isRequired,  // isRequired 后缀，标识这具值是必传的
  age: PropTypes.number.isRequired
}
App.defaultProps = { // 设置默认值，如果没有传值会使用默认值。
  name: 'Jack'
}

export default App;
