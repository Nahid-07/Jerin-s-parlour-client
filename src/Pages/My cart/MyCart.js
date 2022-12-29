import React from "react";
import { BsCart, BsChatLeftText, BsListStars } from "react-icons/bs";
import { Link } from "react-router-dom";
import './mycart.css'

const MyCart = () => {
  return (
    <div className="row container-row">
      <div className="col-2 side-menu-bar">
        <ul className="list-container">
            <li>
                <BsCart className="icon"/>
                <Link>Book</Link>
            </li>
            <li>
                <BsListStars className="icon" />
                <Link>Book list</Link>
            </li>
            <li>
                <BsChatLeftText className="icon" />
                <Link>Review</Link>
            </li>
        </ul>
      </div>
      <div className="col-10 bg">
        
      </div>
    </div>
  );
};

export default MyCart;
