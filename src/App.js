import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import GteDataList from "./components/GteDataList";
import GitHubSearch from "./components/githubSearch";
import { Switch, Route, Link, NavLink, Redirect } from "react-router-dom";

// 生命周期
class App extends React.Component {
  // 继承
  constructor(props) {
    /**
     * constructor 可以不写，如果写了必须调用 super()。
     */
    console.log("mount ---- constructor 调用了！");
    super(props);
    this.state = {
      count: 0, // 计数累加
    };
  }

  // 组件挂载完毕的钩子
  componentDidMount() {
    /**
     * 组件挂载完毕之后会执行此钩子。
     */
    console.log("mount ---- componentDidMount: 组件挂载完成了！");
  }

  // 组件从 Props 中获取派生状态挂载完毕
  static getDerivedStateFromProps(props, state) {
    /**
     * 这个钩子并不常用，钩子有两个传值，props 为组件传递过来的值，state 为初始设置的值。
     * 这个钩子必须有返回值，返回值可以为 null 或者 状态对象
     *
     * 如果返回的是状态对象，那么 state 的值在任何时候都取决于 props。
     * 简单来说，如果这里返回了 props 状态值，那么以后 state 中存在的值就不能修改了！
     *
     * 官方表示派生状态会导致代码冗余，并使组件难以维护。慎用！！！
     */
    console.log(
      `${
        !state.count ? "mount" : "update"
      } ---- getDerivedStateFromProps: 组件派生状态挂载完毕！`
    );
    return props;
  }

  // 控制组件是否更新的钩子
  shouldComponentUpdate() {
    /**
     * 每次需要更新之前都会触发这个钩子，
     * 只有返回为 true，才会触发 render 进行页面渲染。
     * 返回 false 不做处理。
     *
     * 这个钩子可以不写，不写的情况下默认返回 true。
     * 如果写了，必须要写返回值！！！
     */
    console.log(
      "update ---- shouldComponentUpdate: 我确认为真 render 才能渲染！"
    );
    return true;
  }

  // 在更新之前获取快照
  getSnapshotBeforeUpdate(prevProps, prevState) {
    /**
     * getSnapshotBeforeUpdate() 会在最近一次渲染输出（提交到 DOM 节点）之前调用。
     * 钩子有两个传值，preProps 和 preState，值为更新修改之前的 props 和 state。
     * 钩子触发时必须有返回值，返回值可选为 null 或 快照(任何类型值都可以作为快照返回)。
     * 返回值将作为参数传递给 componentDidUpdate()
     *
     * 注：此场景使用并不见，使用几率不高。
     */
    console.log("update ---- getSnapshotBeforeUpdate: 在更新之前获取快照！");
    return null;
  }

  // 组件更新完毕的钩子
  componentDidUpdate(prevProps, prevState, snapshot) {
    /**
     * 钩子有三个参数:
     * prevProps: 更新修改之前的 props
     * prevState: 更新修改之前的 state
     * snapshot: getSnapshotBeforeUpdate 传递过来的快照
     *
     * 组件更新完毕之后会执行此钩子。
     */
    console.log("update ---- componentDidUpdate: 组件更新完成了！");
  }

  // 初始化渲染、状态更新之后都会触发的钩子
  render() {
    const { count } = this.state;
    console.log(
      `${!count ? "mount" : "update"} ---- render: 每次需要渲染我都会触发！`
    );
    return (
      <div>
        <h1>组件的生命周期</h1>
        <h2>当前求和：{count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>
          点我加1
        </button>
        <button onClick={this.unload}>卸载组件</button>
        <button onClick={this.force}>强制更新</button>
        <hr />
        <div className="list-group" style={{ display: "flex" }}>
          <NavLink className="list-group-item" to="/todolist/1">
            TodoList 案例
          </NavLink>
          <NavLink className="list-group-item" to="/getdatalist?id=2">
            Axios 请求案例
          </NavLink>
          <NavLink
            className="list-group-item"
            to={{
              pathname: "/githubsearch",
              state: {
                id: 3,
              },
            }}
          >
            GitHub 用户搜索案例
          </NavLink>
        </div>
        {/* 路由注册 */}
        <Switch>
          <Route path="/todolist/:id" component={TodoList} />
          <Route path="/getdatalist" component={GteDataList} />
          <Route path="/githubsearch" component={GitHubSearch} />
          {/* 兜底重定向，查无路由跳转到首页 */}
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }

  // 卸载组件的回调
  unload() {
    // 卸载组件
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  // 组件将要卸载的钩子
  componentWillUnmount() {
    /**
     * componentWillUnmount 会在组件卸载及销毁之前直接调用。
     * 可以在此方法中执行必要的清理操作，
     * 例如，清除 timer，取消网络请求或清除在 componentDidMount 中创建的订阅等。
     * componentWillUnmount 中不应调用 setState，因为该组件将永远不会重新渲染。
     * 组件实例卸载后，将永远不会再挂载它。
     */
    console.log("unload ---- componentWillUnmount: 组件将要卸载了！");
  }

  // 强制更新的回调
  force = () => {
    /**
     * 在不更改 state 中数据的情况下，强制重新渲染。
     * 不经过 shouldComponentUpdate 检验。
     */
    console.log("forceUpdate: 即将进入强制渲染流程！");
    this.forceUpdate();
  };
}

export default App;
