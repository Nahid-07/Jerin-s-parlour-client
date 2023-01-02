import React from "react";
import {
  BsCart,
  BsFillGridFill,
  BsPlusCircle,
} from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";

const Admin = () => {
  return (
    <div className="row container-row">
      <div className="col-2 side-menu-bar p-0">
        <ul className="list-container">
          <li>
            <BsCart className="icon" />
            <Link to="/admin">Orderlist</Link>
          </li>
          <li>
            <BsPlusCircle className="icon" />
            <Link to="/admin/addservice">Add Service</Link>
          </li>
          <li>
            <BiUserPlus className="icon" />
            <Link to="/admin/makeadmin">Make admin</Link>
          </li>
          <li>
            <BsFillGridFill className="icon" />
            <Link to="/admin/manageservice">Manage Service</Link>
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

export default Admin;
