import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PreviousReceipt.module.css";

const PreviousReceipt = function () {
  const [allBills, setAllBills] = useState();

  useEffect(() => {
    const getAllBills = async function () {
      const response = await fetch("https://posme.fun:2096/bills", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      setAllBills(data);
    };
    getAllBills();
  }, []);

  const genAllBills = function (allBills) {
    return allBills.map((bill) => {
      return (
        <Link to={`/bills/?receipt_no=${bill._id}`}>
          <li key={bill._id} className={styles.receipt_box}>
            <p className={styles.receipt_no}>{bill._id}</p>
            <div className={styles.receipt_info_box}>
              <p className={styles.date}>{bill.time}</p>
              <p className={styles.price}>{bill.cash}</p>
            </div>
          </li>
        </Link>
      );
    });
  };
  console.log(allBills);
  return (
    <section className={styles.section_prev_receipt}>
      <div className={styles.container}>
        <div className={styles.month_box}>
          <label htmlFor="month">Search by date:</label>
          <input type="date" name="month" id="month" />
        </div>
        <ul className={styles.all_receipt_box}>
          <p className={styles.receipt_heading}>Receipt No.</p>
          {genAllBills(allBills)}
        </ul>
      </div>
    </section>
  );
};

export default PreviousReceipt;
