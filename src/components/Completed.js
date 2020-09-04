import React from "react";

const Completed = ({ todo, index, handletoremove, handleitemtoclick }) => {
  return (
    <div>
         {(todo.iscompleted) && ( <div className="item-list">
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
    </div>)}
    </div>
  );
};

export default Completed;