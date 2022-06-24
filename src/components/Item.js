import React from "react";
import { ReactComponent as CrossIcon } from "./icons/cross.svg";

const Item = ({ todo, index, handletoremove, handleitemtoclick }) => {
  return (
    <div className="list-container">
      <div className="list-task">
        <span
          className={todo.iscompleted ? "strike-through" : ""}
          onClick={() => handleitemtoclick(index)}
        >
          {todo.message}
        </span>
      </div>

      <div className="list-time">
        <span className="date">{todo.creation_time}</span>
        <div
          className="list-remove"
          onClick={() => handletoremove(index)}
          title="Delete task!"
        >
          <CrossIcon />
        </div>
      </div>
    </div>
  );
};

export default Item;
