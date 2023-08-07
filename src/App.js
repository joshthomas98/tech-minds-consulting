import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";

import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
