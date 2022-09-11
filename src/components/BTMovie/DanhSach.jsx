import React, { Component } from "react";
import { connect } from "react-redux";
import { removeGhe } from "../../store/Actions/BTMovieAction";

class DanhSach extends Component {
  render() {
    const { dsGhe } = this.props;
    const renderDanhSachGhe = () => {
      return dsGhe.map((item, index) => {
        return (
          <tr key={index}>
            <td className="border-[1px] p-3  border-white text-orange-400">
              {item.soGhe}
            </td>
            <td className="border-[1px] p-3  border-white text-orange-400">
              {item.gia.toLocaleString()}
            </td>
            <td className="border-[1px] p-3 border-white">
              <button
                className="text-2xl  text-red-600"
                onClick={() => this.props.dispatch(removeGhe(item.soGhe))}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </td>
          </tr>
        );
      });
    };
    return (
      <div className="movie-right  w-2/5">
        <h1 className="text-4xl text-white text-center ">
          DANH SÁCH GHẾ ĐÃ CHỌN
        </h1>
        <p className="text-white mt-3 text-2xl">
          <span className="DSgheDaDat"></span>
          Ghế đã đặt
        </p>
        <p className="text-white mt-3 text-2xl">
          <span className="DSgheDangChon"></span>
          Ghế đang chọn
        </p>{" "}
        <p className="text-white mt-3 text-2xl">
          <span className="DSgheChuaDat"></span>
          Ghế chưa đặt
        </p>
        <div className="h-[441px] overflow-auto mt-5">
          <table className=" w-full border-white border-[1px] ">
            <thead>
              <tr>
                <th className="border-[1px] p-3 border-white text-left text-white">
                  Số ghế
                </th>
                <th className="border-[1px] p-3 border-white text-left text-white">
                  Giá
                </th>
                <th className="border-[1px] p-3 border-white text-left text-white">
                  Hủy
                </th>
              </tr>
            </thead>
            <tbody>
              {renderDanhSachGhe()}

              <tr>
                <td className="border-[1px] p-3 border-white text-left text-white">
                  Tổng tiền
                </td>

                <td className="border-[1px] p-3  border-white text-orange-400">
                  {dsGhe
                    .reduce((total, item) => {
                      return (total += item.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducers) => {
  return {
    dsGhe: rootReducers.BTMovie.dsGhe,
  };
};

export default connect(mapStateToProps)(DanhSach);
