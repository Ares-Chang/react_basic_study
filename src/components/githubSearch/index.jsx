import React, { Component } from "react";
import Header from "./Header";
import List from "./List";

export default class GitHubSearch extends Component {
  render() {
    // state 传值
    console.log("state 传值：", this.props.location.state);
    return (
      <div style={{ padding: "40px" }}>
        <Header />
        <List />
      </div>
    );
  }
}
