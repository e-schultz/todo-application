import classes from "./Notification.module.css";
import Modal from "@material-ui/core/Modal";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../../store/slices/ui-slice";

const Notification = (props) => {
  const state = useSelector((state) => state.uiSlice.openModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideModal(false));
  };

  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <Modal
      open={state}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <section className={cssClasses}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </section>
    </Modal>
  );
};

export default Notification;
