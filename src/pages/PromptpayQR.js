import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PromptpayQR.module.css";
import QRCode from "qrcode.react";
import photo from "../photo/thai_qr.png";
const generatePayload = require("promptpay-qr");

const PromptpayQR = function (props) {
  const [phoneNumber, setPhoneNumber] = useState("0987654321");
  const [amount, setAmount] = useState(788);
  const [qrCode, setqrCode] = useState("sample");
  const navigate = useNavigate();
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
    // console.log(phoneNumber);
    setAmount(props.cash);
    setqrCode(generatePayload(phoneNumber, { amount }));
  }, [phoneNumber, amount, props.cash]);

  const genBill = async function (e) {
    e.preventDefault();
    const response = await fetch("https://posme.fun:2096/bills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payment_method: "QR",
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
      state: { payment_method: data.payment_method },
    });
  };
  // console.log(phoneNumber)
  // console.log(qrCode)

  return (
    <div className={styles.section_QR}>
      <div className={styles.container}>
        <div className={styles.price_box}>
          <p className={styles.price_total_text}>Total</p>
          <p className={styles.price_total}>{props.cash} ฿</p>
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
          <button className={styles.button} onClick={genBill}>
            เสร็จสิ้น
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptpayQR;
