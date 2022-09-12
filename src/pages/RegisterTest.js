import photo from "../photo/lock.png";
import React from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <img className="loginphoto" src={photo} alt="kuy"></img>
        <form className={styles.input}>
          <label className={styles.label_input} htmlFor="name">
            ชื่อจริง
          </label>
          <input type="text" id="name" />
        </form>

        <div className={styles.input}>
          <label className={styles.label_input} htmlFor="lastname">
            นามสกุล
          </label>
          <input type="text" id="lastname" />
        </div>

        <Link to="/Login" className="button">
          ลงทะเบียน
        </Link>
      </div>
    </div>
  );
};
export default Register;
