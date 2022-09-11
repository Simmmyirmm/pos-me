import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./ModalPopup.module.css";
import { ImCross } from "react-icons/im";

const ModalPopup = function (props) {
  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={props.onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ImCross className={styles.logo} />
        <p className={styles.text}>Your username or password is wrong!</p>
        <p className={styles.text}>Please try to login again!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPopup;
