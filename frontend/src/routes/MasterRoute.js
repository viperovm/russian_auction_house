import {BrowserRouter, Route, Routes} from "react-router-dom"
import AboutPage from "../pages/about/AboutPage"
import ShopPage from "../pages/shop/ShopPage"
import HomePage from "../pages/home/HomePage";
import React from "react";
import StreamPage from "../pages/stream/StreamPage";

const MasterRoute = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/`}
          element={<HomePage/>}
        />
        <Route
          path={`/about/:doc?`}
          element={<AboutPage/>}
        />
        <Route
          path={`/shop/:lot?`}
          element={<ShopPage/>}
        />
        <Route
          path={`/stream`}
          element={<StreamPage/>}
        />
      </Routes>
    </BrowserRouter>

  )
}
export default MasterRoute
