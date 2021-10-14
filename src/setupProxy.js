/**
 * @description Proxy 全局代理配置
 */
const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    // /api1 为 http://localhost:5000 别名，拦截请求检测到 /api1 会自动匹配此规则
    proxy("/api1", {
      target: "http://localhost:5000", // 转发目标地址
      // 控制服务器收到的响应头中 Host 字段的值 true 为 目标地址，false 为 项目地址
      changeOrigin: true, // 默认值为 false，需改为 true
      pathRewrite: { "^/api1": "" }, // 重写请求路径，将 /api1 替换为空串
    }),
    // /api2 为 http://localhost:5001 别名，拦截请求检测到 /api2 会自动匹配此规则
    proxy("/api2", {
      target: "http://localhost:5001", // 转发目标地址
      // 控制服务器收到的响应头中 Host 字段的值 true 为 目标地址，false 为 项目地址
      changeOrigin: true, // 默认值为 false，需改为 true
      pathRewrite: { "^/api2": "" }, // 重写请求路径，将 /api2 替换为空串
    })
  );
};
