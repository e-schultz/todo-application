import { db } from "../../config/fbConfig";
import firebase from "firebase/app";
import { fetchTodo } from "../slices/todo-slice";
import { showModal, showNotification } from "../slices/ui-slice";

export const createTodoRequest = (input) => {
  return async (dispatch) => {
    // send data to firestore
    const sendRequest = async () => {
      dispatch(
        showNotification({
          status: "pending...",
          title: "Sending...",
          message: "Fetching Todo List",
        })
      );
      dispatch(showModal(true));
      db.collection("todos")
        .add({
          inProgress: true,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          todo: input,
        })
        .then(() => {
          dispatch(createTodoSuccess(input));
          dispatch(
            showNotification({
              status: "success",
              title: "Success...",
              message: "Item successfully added!",
            })
          );
          dispatch(showModal(true));
          dispatch(fetchTodo(input));
        })
        .catch((error) => {
          dispatch(createTodoFail(input));
          dispatch(
            showNotification({
              status: "error",
              title: "Error!",
              message: "Adding a new item failed",
            })
          );
          dispatch(showModal(true));
        });
    };
    await sendRequest();
  };
};
