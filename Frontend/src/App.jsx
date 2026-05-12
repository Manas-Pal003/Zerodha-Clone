import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Routes from "./Route/Routes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      {/* <HomePage /> */}
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
