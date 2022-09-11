import React, { Component } from "react";
import data from "./danhSachGhe.json";
import "./BaiTapBookingTicket.css";
import DatVe from "./DatVe";
import DanhSachGhe from "./DanhSach";
export default class BaiTapMovie extends Component {
  render() {
    return (
      <div
        style={{
          background: "url(./images/bgmovie.jpg) no-repeat",
          backgroundSize: "cover",
        }}
        className="h-[800px] BTMoive"
      >
        <div className="overlay">
          <div className="max-w-7xl py-6 mx-auto bookingMovie ">
            <div className="flex">
              <DatVe data={data} />
              <DanhSachGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
