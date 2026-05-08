
import Navbar from "../../Components/Navbar";
import Home from "./Home";
import Stats from "./Stats";
import Education from "./Education";
import Pricing from "./Pricing";
import Bottom from "./Bottom";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Stats />
      <Pricing />
      <Education />
      <Bottom />
    </div>
  )
}

export default HomePage
