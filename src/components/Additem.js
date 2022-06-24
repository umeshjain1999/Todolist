import React, { useState } from "react";
import "../Todo.css";

const Additem = ({ addtodo }) => {
  const [value_, setvalue] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const resetvalue = () => setvalue("");

    if (!value_) return;

    addtodo(value_);

    resetvalue();
  };
  const handleonchange = (event) => {
    setvalue(event.target.value);
  };
  return (
    <form onSubmit={onFormSubmit} className="form-input">
      <input
        name="list"
        className="input-field"
        value={value_}
        type="text"
        placeholder="write and press enter 🖖"
        onChange={handleonchange}
        required
        autoFocus
      />
    </form>
  );
};

export default Additem;
