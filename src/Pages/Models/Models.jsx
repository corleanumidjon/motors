import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Container from "../../Utils/Container/Container";
import BYD from "../../Assets/Images/BYD.png";
import TESLA from "../../Assets/Images/TESLA.png";
import CHEVROLIT from "../../Assets/Images/CHEVROLIT.png";
import Leapmotor from "../../Assets/Images/Leapmotor.png";
import Toyota from "../../Assets/Images/Toyota.png";
import BMW from "../../Assets/Images/BMW.png";
import Zekeer from "../../Assets/Images/Zekeer.png";
import BYDCHIMPION from "../../Assets/Images/bydchimpion.png"
import LEAPMOTORC11 from "../../Assets/Images/Leapmotorc11.png"
import { Button } from "antd";
import { BsSpeedometer2 } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import { FaChargingStation } from "react-icons/fa";
import "./Models.scss";
import { Link } from "react-router-dom";

const Models = () => {
  return (
    <div className="modellar">
      <Container>
        <div>
          <h2 className="modellar__title">Modellar</h2>
          <div>
            <ul className="modellar__item">
              <li>
                <button class="modellar__all" data-filter="all">
                  <span>All</span>
                </button>
              </li>
              <li>
                <button className="modellar__all" data-filter="byd">
                  <img className="modellar__car" src={BYD} />
                </button>
              </li>
              <li>
                <button className="modellar__all" data-filter="tesla">
                  <img className="modellar__car" src={TESLA} />
                </button>
              </li>
              <li>
                <button className="modellar__all" data-filter=".CHEVROLIT">
                  <img className="modellar__car" src={CHEVROLIT} />
                </button>
              </li>
              <li>
                <button className="modellar__all" data-filter=".Leapmotor">
                  <img className="modellar__car" src={Leapmotor} />
                </button>
              </li>
              <li>
                <button className="modellar__all" data-filter=".Toyota">
                  <img className="modellar__car" src={Toyota} />
                </button>
              </li>
              <li>
                <button className="modellar__all" data-filter=".Toyota">
                  <img className="modellar__car" src={BMW} />
                </button>
              </li>
              <li>
                <button className="modellar__all" data-filter=".Toyota">
                  <img className="modellar__car" src={BMW} />
                </button>
              </li>
              <li>
                <button className="modellar__all" data-filter=".Toyota">
                  <img className="modellar__car" src={BMW} />
                </button>
              </li>
              <li>
                <button className="modellar__all" data-filter=".Toyota">
                  <img className="modellar__car" src={BMW} />
                </button>
              </li>
              <li>
                <button className="modellar__all" data-filter=".Toyota">
                  <img className="modellar__car" src={BMW} />
                </button>
              </li>
            </ul>
          </div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ul className="modellar__card">
                <h2 className="modellar__title1">BYD champion</h2>
                <img className="modellar__img" src={BYDCHIMPION} />
                <ul className="modellar__charaktiris">
                  <li>
                    <BsSpeedometer2 /> 7.9 Sec
                  </li>
                  <li>
                    <FiTrendingUp /> 605 Km/h
                  </li>
                  <li>
                    <FaChargingStation /> Electric
                  </li>
                </ul>
                <h3 className="modellar__price">$27270</h3>
                <Link to="/singlecar">
                  <Button className="modellar__btn" type="primary">
                    Batafsil
                  </Button>
                </Link>
              </ul>
            </SwiperSlide>

            <SwiperSlide>
              <ul className="modellar__card">
                <h2 className="modellar__title1">Leap motor c11</h2>
                <img className="modellar__img" src={LEAPMOTORC11} />
                <ul className="modellar__charaktiris">
                  <li>
                    <BsSpeedometer2 /> 3.7 Sec
                  </li>
                  <li>
                    <FiTrendingUp /> 356 Km/h
                  </li>
                  <li>
                    <FaChargingStation /> Electric
                  </li>
                </ul>
                <h3 className="modellar__price">$235,000</h3>
                <Button className="modellar__btn" type="primary">
                  Batafsil
                </Button>
              </ul>
            </SwiperSlide>

            <SwiperSlide>
              <ul className="modellar__card">
                <h2 className="modellar__title1">Zeekr</h2>
                <img className="modellar__img" src={Zekeer} />
                <ul className="modellar__charaktiris">
                  <li>
                    <BsSpeedometer2 /> 3.7 Sec
                  </li>
                  <li>
                    <FiTrendingUp /> 356 Km/h
                  </li>
                  <li>
                    <FaChargingStation /> Electric
                  </li>
                </ul>
                <h3 className="modellar__price">$235,000</h3>
                <Button className="modellar__btn" type="primary">
                  Batafsil
                </Button>
              </ul>
            </SwiperSlide>

            <SwiperSlide>
              <ul className="modellar__card">
                <h2 className="modellar__title1">Zeekr</h2>
                <img className="modellar__img" src={Zekeer} />
                <ul className="modellar__charaktiris">
                  <li>
                    <BsSpeedometer2 /> 3.7 Sec
                  </li>
                  <li>
                    <FiTrendingUp /> 356 Km/h
                  </li>
                  <li>
                    <FaChargingStation /> Electric
                  </li>
                </ul>
                <h3 className="modellar__price">$235,000</h3>
                <Button className="modellar__btn" type="primary">
                  Batafsil
                </Button>
              </ul>
            </SwiperSlide>

            <SwiperSlide>
              <ul className="modellar__card">
                <h2 className="modellar__title1">Zeekr</h2>
                <img className="modellar__img" src={Zekeer} />
                <ul className="modellar__charaktiris">
                  <li>
                    <BsSpeedometer2 /> 3.7 Sec
                  </li>
                  <li>
                    <FiTrendingUp /> 356 Km/h
                  </li>
                  <li>
                    <FaChargingStation /> Electric
                  </li>
                </ul>
                <h3 className="modellar__price">$235,000</h3>
                <Button className="modellar__btn" type="primary">
                  Batafsil
                </Button>
              </ul>
            </SwiperSlide>

            <SwiperSlide>
              <ul className="modellar__card">
                <h2 className="modellar__title1">Zeekr</h2>
                <img className="modellar__img" src={Zekeer} />
                <ul className="modellar__charaktiris">
                  <li>
                    <BsSpeedometer2 /> 3.7 Sec
                  </li>
                  <li>
                    <FiTrendingUp /> 356 Km/h
                  </li>
                  <li>
                    <FaChargingStation /> Electric
                  </li>
                </ul>
                <h3 className="modellar__price">$235,000</h3>
                <Button className="modellar__btn" type="primary">
                  Batafsil
                </Button>
              </ul>
            </SwiperSlide>

            <SwiperSlide>
              <ul className="modellar__card">
                <h2 className="modellar__title1">Zeekr</h2>
                <img className="modellar__img" src={Zekeer} />
                <ul className="modellar__charaktiris">
                  <li>
                    <BsSpeedometer2 /> 3.7 Sec
                  </li>
                  <li>
                    <FiTrendingUp /> 356 Km/h
                  </li>
                  <li>
                    <FaChargingStation /> Electric
                  </li>
                </ul>
                <h3 className="modellar__price">$235,000</h3>
                <Button className="modellar__btn" type="primary">
                  Batafsil
                </Button>
              </ul>
            </SwiperSlide>

            <SwiperSlide>
              <ul className="modellar__card">
                <h2 className="modellar__title1">Zeekr</h2>
                <img className="modellar__img" src={Zekeer} />
                <ul className="modellar__charaktiris">
                  <li>
                    <BsSpeedometer2 /> 3.7 Sec
                  </li>
                  <li>
                    <FiTrendingUp /> 356 Km/h
                  </li>
                  <li>
                    <FaChargingStation /> Electric
                  </li>
                </ul>
                <h3 className="modellar__price">$235,000</h3>
                <Button className="modellar__btn" type="primary">
                  Batafsil
                </Button>
              </ul>
            </SwiperSlide>

            <SwiperSlide>
              <ul className="modellar__card">
                <h2 className="modellar__title1">Zeekr</h2>
                <img className="modellar__img" src={Zekeer} />
                <ul className="modellar__charaktiris">
                  <li>
                    <BsSpeedometer2 /> 3.7 Sec
                  </li>
                  <li>
                    <FiTrendingUp /> 356 Km/h
                  </li>
                  <li>
                    <FaChargingStation /> Electric
                  </li>
                </ul>
                <h3 className="modellar__price">$235,000</h3>
                <Button className="modellar__btn" type="primary">
                  Batafsil
                </Button>
              </ul>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Models;
