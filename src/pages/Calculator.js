import React, { useRef, useState } from "react";
import styles from "./calculator.module.css";
import { useNavigate } from "react-router-dom";

const Calculator = function (props) {
  const [money, setMoney] = useState(false);
  const moneyref = useRef();
  const navigate = useNavigate();

  const getMoney = function () {
    setMoney(moneyref.current.value);
  };

  const genBill = async function (e) {
    e.preventDefault();
    const response = await fetch("https://posme.fun:2096/bills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payment_method: "cash",
        cash: moneyref.current.value,
        quantity: [
          {
            _id: "634a659676cdc8a6c683322f",
            amount: 1,
          },
        ], // เอารูปแบบ array นี้มาใส่
      }),
      credentials: "include",
    });
    console.log(response.statusText);
    const data = await response.json();
    console.log(data);
    navigate(`/bills/id/${data.bill_id}`, {
      state: { total_amount: props.cash, money: money },
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <form>
          <div>
            <label className={styles.label} for="inputcash">
              รับมา:{" "}
            </label>
            <input
              className={styles.input3}
              id="inputcash"
              type="text"
              placeholder="รับมา (Baht)"
              ref={moneyref}
              onChange={getMoney}
            ></input>
          </div>

          <div className={styles.textbox}>
            <p className={styles.text}>Total</p>
            <p>{props.cash}฿</p>
          </div>

          <div className={styles.textbox2}>
            <p className={styles.text}>เงินทอน</p>
            {money && <p>{money - props.cash}฿</p>}
          </div>

          <div className={styles.buttom}>
            <button className={styles.button}>แสดงใบเสร็จ</button>
            <button className={styles.button} onClick={genBill}>
              เสร็จสิ้น
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Calculator;
