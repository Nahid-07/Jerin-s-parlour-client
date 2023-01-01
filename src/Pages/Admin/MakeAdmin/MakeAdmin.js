import React from "react";
import './makeadmin.css'

const MakeAdmin = () => {
  return (
    <div className="makeadmin-container">
      <input
        type="text"
        className="same-size-field"
        placeholder="Enter email ID"
      />
      <button className="emailBtn">Email</button>
    </div>
  );
};

export default MakeAdmin;
