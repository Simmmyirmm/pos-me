import React, { useState } from "react";
import styles from "./PromptpayQR.module.css";
import QRCode from "qrcode.react";

const PromptpayQR = function () {
  const [phoneNumber, setPhoneNumber] = useState("012-345-6789");
  const [amount, setAmount] = useState(1.0);
  const [qrCode, setqrCode] = useState("sample");
  return (
    <div className={styles.section_QR}>
      <div className={styles.container}>
        <div className={styles.price_box}>
          <p className={styles.price_total_text}>Total</p>
          <p className={styles.price_total}>... ฿</p>
        </div>
        <div className={styles.qr_box}>
          <QRCode value={qrCode} />
        </div>
        <button className={styles.button}>เสร็จสิ้น</button>
      </div>
    </div>
  );
};

export default PromptpayQR;
