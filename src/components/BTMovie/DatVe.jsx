import React, { Component } from "react";
import Ghe from "./Ghe";

export default class DatVe extends Component {
  render() {
    const { data } = this.props;
    // console.log(data);
    return (
      <div className="movie-left w-4/5">
        <h1 style={{ color: "#fbbf0b" }} className="text-4xl text-center w-4/5">
          ĐẶT VÉ XEM PHIM CYBERLEARN.VN
        </h1>
        <div className="screen">
          <p className="text-white text-2xl text-center mt-5">Màn hình</p>
        </div>

        <table
          style={{
            borderSpacing: "8px",
            borderCollapse: "separate",
            width: "73%",
          }}
        >
          <tbody>
            {data.map((item, index) => {
              return <Ghe dataGhe={item} key={index} hangGhe={item.hang} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
