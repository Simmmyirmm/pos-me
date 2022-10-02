import React from "react";
import styles from "./PaymentMethod.module.css";

const PaymentMethod = function () {
  return (
    <section className={styles.section_payment}>
      <div className={styles.container}>
        <div className={styles.total_box}>
          <p className={styles.total}>Total</p>
          <p className={styles.value}>... ฿</p>
        </div>
        <div className={styles.u_center}>
          <button className={styles.cash_box}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2489/2489756.png"
              alt="cash"
              className={styles.cash_img}
            />
            <p className={styles.cash_text}>เงินสด</p>
          </button>
          <button className={styles.promptpay_box}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/online-shopping-filled-outline-2/64/qr_code_scan_cute-512.png"
              alt="qr"
              className={styles.promptpay_img}
            />
            <p className={styles.promptpay_text}>พร้อมเพย์ QR</p>
          </button>
          <button className={styles.other_box}>
            <p className={styles.other_text}>อื่นๆ</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
