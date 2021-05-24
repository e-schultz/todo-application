import React, { Fragment } from "react";
import CreateTodoItem from "../CreateTodoItem/CreateTodoItem";
import { BsListTask } from "react-icons/bs";
import { BiCalendarCheck } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import TodoListItems from "../TodoListItems/TodoListItems";
import Notification from "../UI/Notification/Notification";

import classes from "./Dashboard.module.css";
import Loading from "../UI/Loading";

export default function Dashboard() {
  useFirestoreConnect([{ collection: "todos", orderBy: "timestamp" }]);
  const todoList = useSelector((state) => state.firestore.ordered.todos);
  const notification = useSelector((state) => state.uiSlice.notification);

  // Show message while todos are loading
  if (!isLoaded(todoList)) {
    return <Loading />;
  }
  let sortTodoList;
  if (isLoaded(todoList)) {
    sortTodoList = [...todoList];
    sortTodoList.map((item) => {
      return item;
    });
    sortTodoList.sort((x, y) => {
      return x.inProgress === y.inProgress ? 0 : x.inProgress ? -1 : 1;
    });
  }

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.tabs}>
            <div className={classes.listTab}>
              <BsListTask className={classes.listIcon} />
            </div>
            <div className={classes.calTab}>
              <BiCalendarCheck className={classes.calIcon} />
            </div>
          </div>
          {sortTodoList &&
            sortTodoList.map((item) => {
              return (
                <TodoListItems
                  key={item.id}
                  title={item.todo}
                  inProgress={item.inProgress}
                  id={item.id}
                />
              );
            })}
          <CreateTodoItem />
        </div>
      </div>
    </Fragment>
  );
}
