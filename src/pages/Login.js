import React from "react";
import styles from "./Login.module.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Backdrop from "./Backdrop";
import ModalPopup from "../components/ModalPopup";

const Login = function (props) {
  const [wrongLogin, setWrongLogin] = useState(false);
  const [showModal, setShowModal] = useState();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const closeOverlay = function () {
    setWrongLogin(false);
  };

  const submitHandler = async function (e) {
    e.preventDefault();

    const username_input = usernameRef.current.value;
    const password_input = passwordRef.current.value;
    try {
      const response = await fetch("https://posme.fun:2096/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: username_input,
          password: password_input,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      setWrongLogin(true);
    }
  };

  return (
    <div className={styles.main}>
      <section className={styles.section_register}>
        <div className={styles.center}>
          <img
            className={styles.lock_image}
            src="https://cdn-icons-png.flaticon.com/512/7439/7439933.png"
            alt="img"
          />
          <form action="#" onSubmit={submitHandler}>
            <input
              className={`${styles.block} ${styles.input_field}`}
              cols="40"
              placeholder="username"
              ref={usernameRef}
            />
            <input
              className={`${styles.block} ${styles.input_field}`}
              cols="40"
              placeholder="password"
              type="password"
              ref={passwordRef}
            />
            <button className={`${styles.block} ${styles.login_btn}`}>
              เข้าสู่ระบบ
            </button>
          </form>
          {wrongLogin && <Backdrop close={closeOverlay} />}
          {/* {wrongLogin && (
            <ModalPopup
              show={wrongLogin}
              close={closeOverlay}
              onHide={closeOverlay}
            />
          )} */}
          <Link to="/Register">
            <button className={`${styles.block} ${styles.register_btn}`}>
              ลงทะเบียน
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
