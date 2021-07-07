import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 函数式组件
// function App() {
//   return (
//     <div className="App">
//       <h1>我是函数式组件。</h1>
//     </div>
//   )
// }
/**
 * 执行了 ReactDom.render(<App />, document.getElementById('root')) 之后，发生了什么？
 *  1. React 解析组件标签，找到 App 组件。
 *  2. 发现组件是函数定义的，随后调用该函数，将返回的虚拟 DOM 转为真实 DOM，随后呈现在页面中。
 */

// // 类式组件
// class App extends React.Component { // React 中使用类注册组件，必须继承 React.Component
//   render() {  // 类式组件必须包含 render，并且 render 必须有返回值。
//     return <h2>我是类式组件</h2>
//   }
// }
/**
 * 执行了 ReactDom.render(<App />, document.getElementById('root')) 之后，发生了什么？
 *  1. React 解析组件标签，找到 App 组件。
 *  2. 发现组件是类定义的，随后 new 出现该类的实例。并通过该实例调用到原型上的 render 方法。
 *  3. 将 render 返回的虚拟 DOM 转为真实 DOM，随后呈现在页面中。
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
