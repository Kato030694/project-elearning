import React, { Component } from "react";
import { Link }  from "react-router-dom";
export default class CourseItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card p-3">
        <img src={item.hinhAnh} style= {{width: "100%", height: "250px"}}alt="" />
        <p className="lead">{item.tenKhoaHoc}</p>
        <p className="lead">{item.biDanh}</p>
        <p className="lead">{item.soLuongHocVien}</p>
        <Link to={`/detail/${item.maKhoaHoc}`} className="btn btn-success">Submit</Link>
      </div>
    );
  }
}
