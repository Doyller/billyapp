import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/topnav";
import Computers from "./components/computers";
import TopDeals from "./components/deals";
import Phones from "./components/phones";
import Audio from "./components/audio";
import Security from "./components/security";
import Cart from "./components/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/Computers"
          element={<Computers addToCart={addToCart} />}
        />
        <Route path="/Phones" element={<Phones addToCart={addToCart} />} />
        <Route path="/TopDeals" element={<TopDeals addToCart={addToCart} />} />
        <Route path="/Audio" element={<Audio addToCart={addToCart} />} />
        <Route path="/Security" element={<Security addToCart={addToCart} />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
