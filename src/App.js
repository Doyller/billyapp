import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/topnav";
import Computers from "./components/computers";
import TopDeals from "./components/deals";
import Phones from "./components/phones";
import Audio from "./components/audio";
import Security from "./components/security";
import Cart from "./components/cart";
import About from "./components/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
///The addToCart const allows us to add each product to our cart page individually
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  /// The code below impliments the NavBar within the body and allows us to add items to the cart
  /// It also ensures that each page is correctly routed to directly load upon {Onclick}
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
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
