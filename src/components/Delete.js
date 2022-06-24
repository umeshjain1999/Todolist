import React from "react";
import { ReactComponent as DeleteIcon } from "./icons/delete.svg";

const Delete = ({ openModal }) => {
  return (
    <button className="delete" onClick={() => openModal()}>
      <div> delete </div>
      <DeleteIcon />
    </button>
  );
};

export default Delete;
