import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import AboutPage from "../pages/about/AboutPage"
import ShopPage from "../pages/shop/ShopPage"

const MasterRoute = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/`}
          element={<AboutPage />}
        />
        <Route
          path={`/about/:doc?`}
          element={<AboutPage />}
        />
        <Route
          path={`/shop/:item?`}
          element={<ShopPage />}
        />

      </Routes>
    </BrowserRouter>
  )
}
export default MasterRoute
