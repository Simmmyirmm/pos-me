import React, { useState, useEffect } from "react";
import styles from "./PromptpayQR.module.css";
import QRCode from "qrcode.react";
import photo from "../photo/thai_qr.png";
const generatePayload = require("promptpay-qr");

const PromptpayQR = function (props) {
  const [phoneNumber, setPhoneNumber] = useState("0987654321");
  const [amount, setAmount] = useState(788);
  const [qrCode, setqrCode] = useState("sample");
  // const [showQR, setShowQR] = useState(false);
  useEffect(() => {
    const getData = async function () {
      const response = await fetch("https://posme.fun:2096/auth/user", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      // console.log(data);
      const number = data.promptpay_number;
      setPhoneNumber(number);
    };
    getData();
    console.log(phoneNumber);
    // setAmount(props.amount);
    setqrCode(generatePayload(phoneNumber, { amount }));
  }, [phoneNumber, amount]);

  // console.log(phoneNumber)
  // console.log(qrCode)

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
