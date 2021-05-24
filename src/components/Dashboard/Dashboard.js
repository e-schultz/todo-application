import React, { Fragment, useState } from "react";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { createTodoRequest } from "../../store/actions/createTodo";

import classes from "./CreateTodoItem.module.css";

export default function CreateTodoItem() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const addNewTodo = (event) => {
    event.preventDefault();
    dispatch(createTodoRequest(value));
    setValue("");
  };

  return (
    <Fragment>
      <div className={classes.items}>
        <input
          onChange={(e) => setValue(e.target.value)}
          className={classes.input}
          type="text"
          value={value}
        />
      </div>
      <button
        onClick={(event) => addNewTodo(event)}
        className={!value ? `${classes.btnDisabled}` : `${classes.btn}`}
        disabled={!value}
      >
        <MdAdd className={classes.btnIcon} />
      </button>
    </Fragment>
  );
}
