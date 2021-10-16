import { subscribe } from "pubsub-js";
import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  state = {
    list: [],
    isFirst: true,
    isLoading: false,
    Message: "",
  };
  componentDidMount() {
    subscribe("updata List", (msg, data) => {
      this.setState(data);
    });
  }
  render() {
    const { list, isFirst, isLoading, Message } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎使用 GitHub 用户搜索功能，请输入用户名称点击搜索...</h2>
        ) : isLoading ? (
          <h2>正在请求，请耐心等待</h2>
        ) : Message.length ? (
          <h2>{Message}</h2>
        ) : (
          list.map((item) => {
            return (
              <div key={item.id} className="card">
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img
                    alt="head_portrait"
                    src={item.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
