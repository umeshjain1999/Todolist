import React from "react";
import Item from "./Item";

const Completed = ({ todo, index, handletoremove, handleitemtoclick }) => {
  const completedProps = { todo, index, handletoremove, handleitemtoclick };
  return <>{todo.iscompleted && <Item {...completedProps} />}</>;
};

export default Completed;
