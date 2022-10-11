import React from "react";
import styles from "./PreviousReceipt.module.css";

const PreviousReceipt = function () {
  return (
    <section className={styles.section_prev_receipt}>
      <div className={styles.container}>
        <div className={styles.month_box}>
          <label htmlFor="month">Search by date:</label>
          <input type="month" name="month" id="month" />
        </div>
        <div className={styles.all_receipt_box}>
          <p className={styles.receipt_heading}>Receipt No.</p>
          <div className={styles.receipt_box}>
            <p className={styles.receipt_no}>Receipt No.</p>
            <div className={styles.receipt_info_box}>
              <p className={styles.date}>Date and Time</p>
              <p className={styles.price}>Price</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousReceipt;
