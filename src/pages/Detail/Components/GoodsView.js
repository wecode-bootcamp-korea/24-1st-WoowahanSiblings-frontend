import React, { Component } from "react";
import "./GoodsView.scss";

class GoodsView extends Component {
  render() {
    return (
      <div className="goodsView">
        <div className="goodsViewArea">
          <ul className="goodsVeiwTap">
            <li className="viewTapMenu">상품설명</li>
            <li className="viewTapMenu">상세정보</li>
            <li className="viewTapMenu">후기</li>
            <li className="viewTapMenu">문의</li>
          </ul>
        </div>

        <div className="goodsViewContent">
          <img src="../images/detailpage.png" alt="상세 페이지"></img>
        </div>
      </div>
    );
  }
}

export default GoodsView;
