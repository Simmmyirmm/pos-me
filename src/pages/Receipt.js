import React from 'react';
import styles from "./Receipt.module.css";
import { useNavigate } from "react-router-dom";

const Receipt = function (props) {
    
    return (
      <div className={styles.main}>
        <p className={styles.header}>ใบเสร็จรับเงิน</p>
        <div className={styles.toprightbox}>
            <p>เลขที่ใบเสร็จ 2022000001 </p>
            <p>วันที่ 03/10/2022 13:00</p>
        </div>
        <br></br>
        <hr></hr>
        <h1 className={styles.storeinfo}>CAFE DOT COM</h1>
        <h3 className={styles.storeinfo}>Department of Computer Engineering</h3>
        <h3 className={styles.storeinfo}>Faculty of Engineering</h3>
        <h3 className={styles.storeinfo}>Kasersart University</h3>
        <h3 className={styles.storeinfo}>TEL: 0619163939</h3>
        <h3 className={styles.storeinfo}>หมายเลขประจำตัวผู้เสียภาษี 123456789</h3>
        <br></br>
        <hr></hr>
        <div className={styles.table}>
           <h2>รายการสินค้า</h2>
           <h2>ราคาต่อหน่วย(บาท)</h2>
           <h2>จำนวน</h2>
           <h2>จำนวนเงิน(บาท)</h2>
        </div>
        <hr></hr>
        <div className={styles.table}>
           <h4 className={styles.merchname}>น้ำเเร่เพอร่า</h4>
           <h4>10</h4>
           <h4>1</h4>
           <h4>10</h4>
        </div>
        <div className={styles.table}>
           <h4 className={styles.merchname}>ขนมเลย์</h4>
           <h4>20</h4>
           <h4>2</h4>
           <h4>40</h4>
        </div>
        <div className={styles.table}>
           <h4 className={styles.merchname}>ลาเต้เย็น</h4>
           <h4>45</h4>
           <h4>1</h4>
           <h4>45</h4>
        </div>

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    
        <div className={styles.summaryprice}>
           <h3>ราคารวม(บาท):</h3>
           <h3>95</h3>
        </div>
        <div className={styles.summaryprice}>
           <h3>เงินสด(บาท):</h3>
           <h3>100</h3>
        </div>
        <hr className={styles.summaryprice}></hr>
        <div className={styles.summaryprice}>
           <h3>เงินทอน(บาท):</h3>
           <h3>5</h3>

           
        </div>
    


        

      </div>
    );
  };
  export default Receipt;
  