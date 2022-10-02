import React from 'react';
import styles from "./calculator.module.css";
import { useNavigate } from "react-router-dom";

const Calculator = function (props) {
    

  
    return (
      <div className={styles.main}>
        <div className={styles.center}>
          
          <form >
            <div>
              <label className={styles.label} for="inputcash">
                รับมา:{" "}
              </label>
              <input
                className={styles.input3}
                id="inputcash"
                type="text"
                placeholder="รับมา (Baht)"
              ></input>
            </div>

            <div className={styles.textbox}>
              <p className={styles.text}>Total</p> 
              <p>...฿</p>
             
            </div>

            <div className={styles.textbox2}>
              <p className={styles.text}>เงินทอน</p> 
              <p>...฿</p>
             
            </div>

            <div className={styles.buttom}>
            <button className={styles.button}>แสดงใบเสร็จ</button>
            <button className={styles.button}>เสร็จสิ้น</button>
            </div>

          </form>
        </div>
      </div>
    );
  };
  export default Calculator;
  