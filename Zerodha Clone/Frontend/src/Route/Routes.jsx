
import HomePage from "../Landing Page/Home/HomePage";
import SignUp_Page from "../Landing Page/SignUp/SignUp_Page";
import AboutPage from "../Landing Page/About/AboutPage";
import Pricing_Page from "../Landing Page/Pricing/PricingPage";
import Products_Page from "../Landing Page/Products/ProductsPage";
import Support_Page from "../Landing Page/Support/SupportPage";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp_Page />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<Products_Page />} />
        <Route path="/pricing" element={<Pricing_Page />} />
        <Route path="/support" element={<Support_Page />} />
      </Routes>
    </div>
  );
}

export default AppRoutes
