import React, { Component } from "react";
import Related from "./Components/Related";
import CartPut from "./Components/CartPut";
import "./Detail.scss";

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <CartPut />
        <Related />
      </div>
    );
  }
}

export default Detail;
