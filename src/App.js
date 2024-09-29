import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Store from "./components/Store"
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import ShoppingCartProvider from "./context/ShoppingCartContext";

function App() {
  return (

    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>

  );
}

export default App;
