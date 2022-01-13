/**
 * 该文件专门为 reducer 生成 action 对象
 */
import {INCREMENT,DECREMENT} from './constant'
/**
 * 生成 increment 方法
 * @param {*} data
 * @returns 生成的 action 对象
 */
export const createIncrement = data => ({ type: INCREMENT, data })

/**
 * 生成 decrement 方法
 * @param {*} data
 * @returns 生成的 action 对象
 */
export const createDecrement = data => ({ type: DECREMENT, data })
