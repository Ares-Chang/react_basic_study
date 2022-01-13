/**
 * 该文件用于暴露一个 store 对象，整个应用只应该有一个 store 对象
 */

import { createStore } from 'redux' // 引入 createStore ，用于创建核心 store 对象
import reducer from './reducer' // 引入 reducer

export default createStore(reducer) // 暴露 store
