import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleGhe } from "../../store/Actions/BTMovieAction";

class Ghe extends Component {
  render() {
    const { dataGhe, dsGhe } = this.props;

    const renderHangGhe = () => {
      return dataGhe.danhSachGhe.map((item, index) => {
        // Trạng thái ghế đã chọn
        let cssGheDaChon = "";
        let disable = false;
        if (item.daDat) {
          cssGheDaChon = "gheDuocChon";
          disable = true;
        }

        // Trạng thái ghế đang chọn
        let cssGheDangChon = "";
        let position = dsGhe.findIndex((ghe) => ghe.soGhe === item.soGhe);
        // console.log(position);
        if (position !== -1) {
          cssGheDangChon = "gheDangChon";
        }
        return (
          <Fragment key={index}>
            <td>
              <button
                className={`ghe ${cssGheDaChon} ${cssGheDangChon} !h-full block`}
                disabled={disable}
                onClick={() => this.props.dispatch(handleGhe(item))}
              >
                {item.soGhe}{" "}
              </button>
            </td>
          </Fragment>
        );
      });
    };

    const renderHangGheTrong = () => {
      return dataGhe.danhSachGhe.map((item, index) => {
        return (
          <td key={index}>
            <button
              className={`rowNumber !h-full block`}
              onClick={() => alert(123)}
              disabled
            >
              {item.soGhe}{" "}
            </button>
          </td>
        );
      });
    };
    const renderGhe = () => {
      return dataGhe.hang === "" ? (
        <Fragment>
          <tr>
            <td className="rowNumber">{dataGhe.hang}</td>
            {renderHangGheTrong()}
          </tr>
        </Fragment>
      ) : (
        <Fragment>
          <tr>
            <td className="rowNumber">{dataGhe.hang}</td>
            {renderHangGhe()}
          </tr>
        </Fragment>
      );
    };

    return (
      // <tr>
      //   {/* {dataGhe.map((item) => {
      //     return <td className="rowNumber">{item.hang}</td>;
      //   })} */}

      //   {/* <td className="rowNumber">{ghe.soGhe}</td> */}
      // </tr>
      <Fragment>{renderGhe()}</Fragment>
    );
  }
}

const mapStateToProps = (rootReducers) => {
  return {
    dsGhe: rootReducers.BTMovie.dsGhe,
  };
};

export default connect(mapStateToProps)(Ghe);
