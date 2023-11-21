import Header from "../../Components/Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import Models from "../Models/Models";
import Reviews from "../Reviews/Reviews"
import Yangiliklar from "../Yangiliklar/Yangiliklar";
import Communication from "../Communication/Communication"
import Lakatsiya from "../Lakatsiya/Lakatsiya"
import SingleCar from "../SingleCar/SingleCar";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <AboutUs/>
      <Models/>
      <Yangiliklar/>
      <Reviews/>
      <Communication/>
      <Lakatsiya/>
      <SingleCar/>
    </div>
  );
};

export default Home;
