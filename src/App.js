import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentMethod from "./pages/PaymentMethod";
import Calculator from "./pages/Calculator";
import PromptpayQR from "./pages/PromptpayQR";
import PreviousReceipt from "./pages/PreviousReceipt";
import Receipt from "./pages/Receipt";
import Cashier from "./pages/Cashier";

function App() {
  const [total, setTotal] = useState(10);
  const [item, setItem] = useState([
    {
      _id: "123",
      amount: 1,
    },
  ]);

  const getTotal = function (total) {
    setTotal(total);
  };

  const getItem = function (item) {
    setItem(item);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment_method" element={<PaymentMethod />} />
        <Route
          path="/calculator"
          element={<Calculator cash={total} item={item} />}
        />
        <Route
          path="/promptpay_qr"
          element={<PromptpayQR cash={total} item={item} />}
        />
        <Route path="/bills" element={<PreviousReceipt />} />
        {/* <Route path='/bills/:receipt_no' element={<Receipt />} /> */}
        <Route path="/bills/id/:id" element={<Receipt />} />
        {/* <Route path='/cashier' element={<Cashier total={getTotal} item={getItem}/>} /> เอาจำนวนเงินทั้งหมดและของทั้งหมดมาใส่*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
