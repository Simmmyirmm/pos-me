import React, { useState } from "react";
import styles from "./PromptpayQR.module.css";
import QRCode from "qrcode.react";
import photo from "../photo/thai_qr.png";
const generatePayload = require("promptpay-qr");

const PromptpayQR = function () {
  const [phoneNumber, setPhoneNumber] = useState("012-345-6789");
  const [amount, setAmount] = useState(788);
  const [qrCode, setqrCode] = useState("sample");
  const [showQR, setShowQR] = useState(false);

  return (
    <div className={styles.section_QR}>
      <div className={styles.container}>
        <div className={styles.price_box}>
          <p className={styles.price_total_text}>Total</p>
          <p className={styles.price_total}>... ฿</p>
        </div>
        <div className={styles.u_center}>
          <div className={styles.qr_box}>
            <img src={photo} alt="Promptpay" className={styles.qr_img} />
            <div className={styles.qr_card}>
              <QRCode value={qrCode} size={200} />
              <p className={styles.qr_phone_num}>{phoneNumber}</p>
              <p className={styles.qr_amount}>{amount} บาท</p>
            </div>
          </div>
          <button className={styles.button}>เสร็จสิ้น</button>
        </div>
      </div>
    </div>
  );
};

export default PromptpayQR;
