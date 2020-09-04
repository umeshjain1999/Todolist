import React from "react";

const Active = ({ todo, index, handletoremove, handleitemtoclick }) => {
  if (!todo.iscompleted) {
    return (
      <div className="item-list">
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
            <div className="list-remove">
              <span onClick={() => handletoremove(index)}>🙅</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Active;
