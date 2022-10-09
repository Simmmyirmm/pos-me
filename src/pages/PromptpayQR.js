import React, { useState, useEffect } from "react";
import styles from "./PromptpayQR.module.css";
import QRCode from "qrcode.react";
import photo from "../photo/thai_qr.png";
const generatePayload = require("promptpay-qr");

const PromptpayQR = function (props) {
  const [phoneNumber, setPhoneNumber] = useState("012-345-6789");
  const [amount, setAmount] = useState(788);
  const [qrCode, setqrCode] = useState("sample");
  // const [showQR, setShowQR] = useState(false);
  useEffect(() => {
    const getData = async function () {
      const response = await fetch("https://posme.fun:2096/auth/user");
      const data = await response.json();
      console.log(data);
      const number = data.promptpay_number;
      setPhoneNumber(number);
    };
    getData();
    // setAmount(props.amount);
    // setqrCode(generatePayload(phoneNumber, { amount }));
  }, []);

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
