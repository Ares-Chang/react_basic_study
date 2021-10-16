import React, { Component } from "react";
import Header from "./Header";
import List from "./List";

export default class GitHubSearch extends Component {
  render() {
    return (
      <div style={{ padding: "40px" }}>
        <Header />
        <List />
      </div>
    );
  }
}
