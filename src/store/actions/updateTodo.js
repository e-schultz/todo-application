import { db } from "../../config/fbConfig";
import { showModal, showNotification } from "../slices/ui-slice";
export const toggleProgress = (id, inProgress) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      let docRef = db.collection("todos").doc(id);
      dispatch(
        showNotification({
          status: "pending...",
          title: "Updating...",
          message: "Updating Todo Item",
        })
      );
      docRef
        .update({
          inProgress: !inProgress,
        })
        .then(() => {
          dispatch(
            showNotification({
              status: "success",
              title: "Success...",
              message: "Item successfully updated",
            })
          );
          dispatch(showModal(true));
        })
        .catch((error) => {
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
