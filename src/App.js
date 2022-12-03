import React from "react";
import NavBar from "./components/NavBar";
import './app/App.css'
import Router from "./app/Router";
import Footer from "./components/Footer";

import CartProvider from "./context/CartContext";

const App = () => {
  return (
    <div  className="color">
      <CartProvider>
        <NavBar/>
        <Router/>
        <Footer/>
      </CartProvider>
    </div>
  );
}

export default App;
