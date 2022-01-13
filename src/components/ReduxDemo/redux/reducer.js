/**
 * 创建一个 reducer 函数
 * @param {Object} perState 之前的状态
 * @param {Object} action 动作对象
 */
export default function reducer(perState = 0, action) {
  /**
   * type 为动作 key 值，用于判断
   * data 为传入数据
   */
  const { type, data } = action
  switch (type) {
    case 'increment':
      return perState + data
    case 'decrement':
      return perState - data
    default:
      // 初始化
      return perState
  }
  // 注：reducer 中不做业务处理，只是一个纯函数
}
