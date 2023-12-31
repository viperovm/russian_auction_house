import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import AboutPage from "../pages/about/AboutPage"
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
          path={`/trading-rules`}
          element={<TradingRules />}
        />
        <Route
          path={`/personal-agreement`}
          element={<PersonalAgreement />}
        />

      </Routes>
    </BrowserRouter>
  )
}
export default MasterRoute
