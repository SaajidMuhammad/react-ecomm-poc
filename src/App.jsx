import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./style.css";
import { AppProvider } from "./contexts/AppContext";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleProductPage from "./pages/SingleProductPage";

const App = () => {
  return (
    <AppProvider>
      <HashRouter>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<SingleProductPage />} />
          </Routes>
        </div>
      </HashRouter>
    </AppProvider>
  );
};
export default App;
