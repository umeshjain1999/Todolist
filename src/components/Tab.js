import React from "react";
import { Link } from "react-router-dom";
const Tab = () => {
  return (
    <div
      className="tabs"
      style={{
        width: "200px",
        height: "30px",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <div>
        <Link to="/">All</Link>
      </div>
      <div>
        <Link to="/active">Active</Link>
      </div>
      <div>
        <Link to="/completed">Completed</Link>
      </div>
    </div>
  );
};

export default Tab;
