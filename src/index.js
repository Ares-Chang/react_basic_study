import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import './index.css';
import App from './App'
import store from './components/ReduxDemo/redux/store'
import reportWebVitals from './reportWebVitals'

const params = { sex: '女', age: 18 }
ReactDOM.render(
  // 严格模式下不可以用新版生命周期，不安全
  // <React.StrictMode>
  //   <App {...params} />
  // </React.StrictMode>,

  <BrowserRouter>
    <App {...params} />
  </BrowserRouter>,
  document.getElementById('root')
)

// 全局监控数据更新
store.subscribe(() => {
  ReactDOM.render(
    <BrowserRouter>
      <App {...params} />
    </BrowserRouter>,
    document.getElementById('root')
  )
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
