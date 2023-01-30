import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponet from "./components/PrivateComponet";
import Login from "./components/Login";
import Product from "./components/Product";
import Products_list_ from "./components/Products_list_";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponet />}>
            <Route path="/" element={<Products_list_/>} />
            <Route path="/add" element={<Product/>} />
            <Route path="/update" element={<h1>Update Product Component</h1>} />
            <Route path="/logout" element={<h1>Logout Product Component</h1>} />
            <Route path="/profile" element={<h1>Profile Product Component</h1>}/>
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
