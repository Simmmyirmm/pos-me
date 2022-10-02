import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentMethod from "./pages/PaymentMethod";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment_method" element={<PaymentMethod />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
