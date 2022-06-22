import React from "react";
import { NavLink } from "react-router-dom";
const Tab = () => {
  return (
    <div className="tabs">
      <NavLink to="/" className="tab">
        All
      </NavLink>
      <NavLink to="/active" className="tab" activeClassName="selected">
        Active
      </NavLink>
      <NavLink to="/completed" className="tab" activeClassName="selected">
        Completed
      </NavLink>
    </div>
  );
};

export default Tab;
