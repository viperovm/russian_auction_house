import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutPage from "../pages/about/AboutPage"
import ShopPage from "../pages/shop/ShopPage"
import HomePage from "../pages/home/HomePage";
import React from "react";

const MasterRoute = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/`}
          element={<HomePage />}
        />
        <Route
          path={`/about/:doc?`}
          element={<AboutPage />}
        />
        <Route
          path={`/shop/:lot?`}
          element={<ShopPage />}
        />

      </Routes>
    </BrowserRouter>
  )
}
export default MasterRoute
