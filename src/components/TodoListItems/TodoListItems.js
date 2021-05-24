import React from "react";

import classes from "./TodoListItems.module.css";
import { StyledCheckbox } from "../UI/StyledCheckbox/StyledCheckbox";
import { useDispatch } from "react-redux";
import { toggleProgress } from "../../store/actions/updateTodo";

export default function TodoListItems({ title, inProgress, id }) {
  const dispatch = useDispatch();

  const toggleStatus = () => {
    dispatch(toggleProgress(id, inProgress));
  };
  return (
    <div className={classes.items}>
      <StyledCheckbox
        onChange={toggleStatus}
        className={classes.checked}
        checked={!inProgress}
      />
      <p className={!inProgress ? classes.itemDone : ""}>{title}</p>
    </div>
  );
}
