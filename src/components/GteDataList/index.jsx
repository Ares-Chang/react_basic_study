import axios from "axios";
import React, { Component } from "react";
import qs from "querystring"; // 处理URL拼接库

export default class GetDataList extends Component {
  /**
   * @description 学习测试 axios 请求及 proxy 代理，需提前开启本地测试服务器
   */
  getStudentData = async () => {
    let res = await axios("http://localhost:3000/api1/students");
    console.log(res);
  };
  getCarData = async () => {
    let res = await axios("http://localhost:3000/api2/cars");
    console.log(res);
  };
  render() {
    // query 传值
    console.log("query 传值：", qs.parse(this.props.location.search.slice(1)));
    return (
      <div>
        <button onClick={this.getStudentData}>点击请求学生数据</button>
        <button onClick={this.getCarData}>点击请求汽车数据</button>
      </div>
    );
  }
}
