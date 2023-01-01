import React from "react";
import { BsCart, BsChatLeftText, BsListStars } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import './mycart.css'

const MyCart = () => {
  return (
    <div className="row container-row">
      <div className="col-2 side-menu-bar p-0">
        <ul className="list-container">
            <li>
                <BsCart className="icon"/>
                <Link to='/my-cart/payment'>Book</Link>
            </li>
            <li>
                <BsListStars className="icon" />
                <Link to='/my-cart/booklist'>Book list</Link>
            </li>
            <li>
                <BsChatLeftText className="icon" />
                <Link>Review</Link>
            </li>
        </ul>
      </div>
      <div className="col-10 bg p-0">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MyCart;
