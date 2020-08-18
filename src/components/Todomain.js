import React, { useState, useEffect } from "react";
import Item from "./Item";
import Additem from "./Additem";
import "../Todo.css";

function Todomain() {
  const initialState = () => {
    const savedItem = JSON.parse(localStorage.getItem("todolist"));
    return savedItem || [];
  };

  //Dark or Light mode
  const SavedMode = () => {
    const savedmode = JSON.parse(localStorage.getItem("mode"));
    return savedmode;
  };

  const [tog, settog] = useState(SavedMode());

  const [todos, settodo] = useState(initialState());

  useEffect(() => {
    // alert("Todos will be store in your local storage.");
  }, []);

  //useEffect for dark/light mode
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(tog));
  }, [tog]);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todos));
  }, [todos]);
  const giveMeDate = () => {
    let today = new Date();
    let date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    let time =
      today.getHours() +
      ":" +
      (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes());
    let creation_time = time + " " + date;
    return creation_time;
  };
  //here value parameter is used from Additem component function
  const addtodo = (value) => {
    const creation_time = giveMeDate();
    const newitem = [
      ...todos,
      { message: value, iscompleted: false, creation_time: creation_time }
    ];

    settodo(newitem);
  };

  //to update todos value after removing
  const handletoremove = (index) => {
    const newtodos = [...todos];

    newtodos.splice(index, 1);

    settodo(newtodos);
  };

  //to update value of iscompleted
  const handleitemtoclick = (index) => {
    const newtodos = [...todos];
    const creation_time = giveMeDate();
    newtodos[index].iscompleted = !newtodos[index].iscompleted;
    newtodos[index].creation_time = creation_time;

    settodo(newtodos);
  };

  return (
    <div className={tog ? "light-mode" : "dark-mode"}>
      <div>
        <span className="change-bg" onClick={() => settog((prev) => !prev)}>
          🖐<p>(High-Five here)</p>
        </span>
      </div>

      <h1
        style={{ display: "flex", justifyContent: "center", fontSize: "40px" }}
      >
        <i>#todo</i>
      </h1>
      <Additem addtodo={addtodo} />
      <div>
        {todos.length
          ? todos.map((item, index) => (
              <Item
                key={`${item.message}-${index}`}
                todo={item}
                index={index}
                handletoremove={handletoremove}
                handleitemtoclick={handleitemtoclick}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Todomain;
