import MasterRoute from "./routes/MasterRoute"
import "./assets/scss/index.scss"
import {Provider} from "react-redux"
import store from "./store/store"
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ShopPage from "./pages/shop/ShopPage";

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MasterRoute/>
      </BrowserRouter>
    </Provider>
  )
}

export default App