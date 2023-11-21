import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Models from "./Pages/Models/Models";
import Yangiliklar from "./Pages/Yangiliklar/Yangiliklar";
import Reviews from "./Pages/Reviews/Reviews";
import Communication from "./Pages/Communication/Communication";
import Lakatsiya from "./Pages/Lakatsiya/Lakatsiya";
import SingleCar from "./Pages/SingleCar/SingleCar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/models" element={<Models />} />
        <Route path="/news" element={<Yangiliklar />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Communication />} />
        <Route path="/lacation" element={<Lakatsiya />} />
        <Route path="/singlecar" element={<SingleCar />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
