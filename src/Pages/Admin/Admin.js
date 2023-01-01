import React from 'react';
import { BsCart, BsChatLeftText, BsListStars } from 'react-icons/bs';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const Admin = () => {
    return (
        <div className="row container-row">
        <div className="col-2 side-menu-bar p-0">
          <ul className="list-container">
              <li>
                  <BsCart className="icon"/>
                  <Link to='/admin/orderlist'>Orderlist</Link>
              </li>
              <li>
                  <BsListStars className="icon" />
                  <Link to='/admin/addservice'>Add Service</Link>
              </li>
              <li>
                  <BsChatLeftText className="icon" />
                  <Link to='/admin/makeadmin'>Make admin</Link>
              </li>
              <li>
                  <BsChatLeftText className="icon" />
                  <Link to='/admin/manageservice'>Manage Service</Link>
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