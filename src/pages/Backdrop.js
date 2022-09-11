import React from "react";
import { ImCross } from "react-icons/im";
import { IoMdCloseCircleOutline } from "react-icons/io";
import styles from "./Backdrop.module.css";
import { Link } from "react-router-dom";

const Backdrop = function (props) {
  return (
    <div className={styles.background} onClick={props.close}>
      <div className={styles.warning_box}>
        <Link to="/Login" onClick={props.close}>
          <IoMdCloseCircleOutline className={styles.close} />
        </Link>
        <ImCross className={styles.logo} />
        <p className={styles.text}>Your username or password is wrong!</p>
        <p className={styles.text}>Please try to login again!</p>
      </div>
    </div>
  );
};

export default Backdrop;
