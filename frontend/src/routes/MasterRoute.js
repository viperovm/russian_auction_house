import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import AboutPage from "../pages/about/AboutPage"
import ShopPage from "../pages/shop/ShopPage"
import TradingRules from "../pages/docs/TradingRules";
import PersonalAgreement from "../pages/docs/PersonalAgreement";

const MasterRoute = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/`}
          element={<AboutPage />}
        />
        <Route
          path={`/about`}
          element={<AboutPage />}
        />
        <Route
          path={`/shop`}
          element={<AboutPage />}
        />
        <Route
          path={`/trading-rules`}
          element={<TradingRules />}
        />
        <Route
          path={`/about/personal-agreement`}
          element={<PersonalAgreement />}
        />

      </Routes>
    </BrowserRouter>
  )
}
export default MasterRoute
