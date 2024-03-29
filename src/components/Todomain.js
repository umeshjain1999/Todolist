import React, { useState, useEffect } from "react";
import Additem from "./Additem";
import "../Todo.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Completed from "./Completed";
import Item from "./Item";
import Active from "./Active";
import Tab from "./Tab";
import Delete from "./Delete";
import Modal from "./Modal";
import { ReactComponent as BeeIcon } from "./icons/bee.svg";
import { ReactComponent as FlamingoIcon } from "./icons/flamingo.svg";
import { ReactComponent as WizardIcon } from "./icons/wizard.svg";

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

  const [isModal, setModal] = useState(false);

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
      (today.getMinutes() < 10
        ? "0" + today.getMinutes()
        : today.getMinutes()) +
      ":" +
      (today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds());
    let creation_time = time + " " + date;
    return creation_time;
  };

  //here value parameter is used from Additem component function
  const addtodo = (value) => {
    const creation_time = giveMeDate();
    let newitem = [
      ...todos,
      {
        id: new Date().getTime(),
        message: value,
        iscompleted: false,
        creation_time: creation_time
      }
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
  //to clear all data from local storage
  const clearAllTodo = () => {
    localStorage.setItem("todolist", JSON.stringify([]));
    settodo([]);
    setModal(false);
  };
  //toggle modal
  const openModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      {isModal && <Modal clearAllTodo={clearAllTodo} openModal={openModal} />}
      <div className={`wrapper ${tog}`}>
        <div className="top-wrapper">
          <div className="change-bg">
            <div
              className="change-bg-child color-1"
              onClick={() => settog("light-mode")}
            >
              <span className="theme-icon color-1-icon">
                <FlamingoIcon />
              </span>
            </div>
            <div
              className="change-bg-child color-2"
              onClick={() => settog("light-sec-mode")}
            >
              <span className="theme-icon color-2-icon">
                <BeeIcon />
              </span>
            </div>
            <div
              className="change-bg-child color-3"
              onClick={() => settog("dark-mode")}
            >
              <span className="theme-icon color-3-icon">
                <WizardIcon />
              </span>
            </div>
          </div>
          <Delete openModal={openModal} />
        </div>

        <h1 className="title">
          <i>#todo</i>
        </h1>
        <Additem addtodo={addtodo} />

        <Router>
          <Tab />
          <div className="list-wrapper">
            {todos.length
              ? todos.map((item, index) => (
                  <Switch key={item.id}>
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
      </div>
    </>
  );
}

export default Todomain;
