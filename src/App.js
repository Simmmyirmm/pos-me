import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentMethod from "./pages/PaymentMethod";
import Calculator from "./pages/Calculator";
import PromptpayQR from "./pages/PromptpayQR";
import PreviousReceipt from "./pages/PreviousReceipt";
import Receipt from "./pages/Receipt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment_method" element={<PaymentMethod />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/promptpay_qr" element={<PromptpayQR />} />
        <Route path="/bills" element={<PreviousReceipt />} />
        <Route path="/receipt" element={<Receipt />} />
        {/* <Route path='/bills/:receipt_no' element={<Receipt />} /> */}
        {/* <Route path="/prev_receipt" element={<PreviousReceipt />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
