import React from "react";
import Item from "./Item";

const Active = ({ todo, index, handletoremove, handleitemtoclick }) => {
  const activeProps = { todo, index, handletoremove, handleitemtoclick };
  return <>{!todo.iscompleted && <Item {...activeProps} />}</>;
};

export default Active;
