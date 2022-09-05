import photo from "../photo/lock.png";
import React from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <img className="loginphoto" src={photo} alt="kuy"></img>
        <div className={styles.input}>
          <label htmlFor="name">ชื่อจริง</label>
          <input type="text" />
        </div>

        <Link to="/Login" className="button">
          ลงทะเบียน
        </Link>
      </div>
    </div>
  );
};
export default Register;
