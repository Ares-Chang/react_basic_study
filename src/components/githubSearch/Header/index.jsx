import axios from "axios";
import { publish } from "pubsub-js";
import React, { Component } from "react";

export default class Header extends Component {
  handleSearch = async () => {
    const {
      keyWordElement: { value: keyWord },
    } = this;
    // 取消首次加载并设置 Loading
    publish("updata List", {
      isFirst: false,
      isLoading: true,
    });
    try {
      const {
        data: { items },
      } = await axios(`/api1/search/users2?q=${keyWord}`);
      // 请求成功关闭 loading 并更新数据
      publish("updata List", {
        list: items,
        isLoading: false,
        Message: "",
      });
    } catch (error) {
      // 请求失败，提示错误
      publish("updata List", {
        isLoading: false,
        Message: "请求失败，请刷新！",
      });
    }
  };
  render() {
    return (
      <section className="jumbotron" style={{ padding: "20px" }}>
        <h3 className="jumbotron-heading">搜索 GitHub 用户</h3>
        <div>
          <input
            ref={(e) => (this.keyWordElement = e)}
            type="text"
            placeholder="请输入用户名称..."
          />
          &nbsp;<button onClick={this.handleSearch}>搜索</button>
        </div>
      </section>
    );
  }
}
