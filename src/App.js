
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StockDetailPage from "./stockDetailPage";
import StockOverviewPage from "./stockOverviewPage";

const App = () => {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockOverviewPage />} />
          <Route path="/detail/stock" element={<StockDetailPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
