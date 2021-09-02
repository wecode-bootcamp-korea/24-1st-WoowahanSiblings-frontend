import React, { Component } from "react";
import "./GoodsView.scss";

class GoodsView extends Component {
  viewTapClick = e => {
    let targeter = e.target.id;
    let scrollTarget = document.querySelector("." + targeter);
    document.querySelector(".viewTapMenu").classList.remove("clicked");
    e.target.classList.add("clicked");
    scrollTarget.scrollIntoView();
  };

  render() {
    return (
      <div className="goodsView">
        <div className="goodsViewArea">
          <ul className="goodsVeiwTap">
            <li
              id="detailDesc"
              className="viewTapMenu"
              onClick={this.viewTapClick}
            >
              상품설명
            </li>
            <li
              id="detailInfo"
              className="viewTapMenu"
              onClick={this.viewTapClick}
            >
              상세정보
            </li>
            <li id="" className="viewTapMenu">
              후기
            </li>
            <li className="viewTapMenu">문의</li>
          </ul>
        </div>

        <div className="goodsViewContent">
          <img
            className="detailDesc"
            src="../images/detail-desc.png"
            alt="상세 페이지"
          ></img>
          <img
            className="detailInfo"
            src="../images/detail-info.png"
            alt="상세 페이지"
          ></img>
        </div>
      </div>
    );
  }
}

export default GoodsView;
