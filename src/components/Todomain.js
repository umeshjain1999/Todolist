import React, { useState, useEffect } from "react";
import Additem from "./Additem";
import "../Todo.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Completed from "./Completed";
import Item from "./Item";
import Active from "./Active";
import Tab from "./Tab";
import Delete from './Delete';



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
  //For toggling between theme
  const [tog, settog] = useState(SavedMode() ? SavedMode() : "light-mode");

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
      (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()) + ':'+
      (today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds());
    let creation_time = time + " " + date;
    return creation_time;
  };

  //here value parameter is used from Additem component function
  const addtodo = (value) => {
    const creation_time = giveMeDate();
    let newitem = [
      ...todos,
      {id : new Date().getTime(), message: value, iscompleted: false, creation_time: creation_time }
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


  const clearAllTodo = () => {
    alert('clearing all todos 📢');
    localStorage.setItem("todolist", JSON.stringify([]));
    settodo([]);
  }

  return (
    <div className={tog}>
      <div>
        <span className="change-bg">
          <div className="color-1" onClick={() => settog("light-mode")}></div>
          <div
            className="color-2"
            onClick={() => settog("light-sec-mode")}
          ></div>
          <div className="color-3" onClick={() => settog("dark-mode")}></div>
        </span>
      </div>

      <h1
        style={{ display: "flex", justifyContent: "center", fontSize: "40px" }}
      >
        <i>#todo</i>
      </h1>
      <Additem addtodo={addtodo} />

      <Router>
        <Tab />
        <div>
          {todos.length
            ? todos.map((item, index) => (
                <Switch key = {item.id}>
                  <Route
                    path="/"
                    render={(props) => (
                      <Item
                        {...props}
                        key={`A-${item.id}`}
                        todo={item}
                        index={index}
                        handletoremove={handletoremove}
                        handleitemtoclick={handleitemtoclick}
                      />
                    )}
                    exact
                  />

                  <Route
                    path="/completed"
                    render={(props) => (
                      <Completed
                        {...props}
                        key={`B-${item.id}`}
                        todo={item}
                        index={index}
                        handletoremove={handletoremove}
                        handleitemtoclick={handleitemtoclick}
                      />
                    )}
                  />
                  <Route
                    path="/active"
                    render={(props) => (
                      <Active
                        {...props}
                        key={`C-${item.id}`}
                        todo={item}
                        index={index}
                        handletoremove={handletoremove}
                        handleitemtoclick={handleitemtoclick}
                      />
                    )}
                  />
                </Switch>
              ))
            : ""}
        </div>
      </Router>
      <Delete clearAllTodo = {clearAllTodo}/>
    </div>
  );
}

export default Todomain;
