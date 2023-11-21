import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import LixiangL9 from "../../Assets/Videos/LixiangL9.mp4";
import { EffectCards } from "swiper/modules";
import Container from "../../Utils/Container/Container";
import "./Reviews.scss";
const Reviews = () => {
  return (
    <div className="izohlar">
      <Container>
        <div>
          <h2 className="izohlar__title">Izohlar</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCards, Autoplay]}
            className="mySwiperr"
          >
            <SwiperSlide>
              {" "}
              <video
                autoPlay
                loop
                playsInline
                muted
                type="video/mp4"
                className="header__video"
                src={LixiangL9}
              ></video>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <video
                autoPlay
                loop
                playsInline
                muted
                type="video/mp4"
                className="header__video"
                src={LixiangL9}
              ></video>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <video
                autoPlay
                loop
                playsInline
                muted
                type="video/mp4"
                className="header__video"
                src={LixiangL9}
              ></video>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <video
                autoPlay
                loop
                playsInline
                muted
                type="video/mp4"
                className="header__video"
                src={LixiangL9}
              ></video>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <video
                autoPlay
                loop
                playsInline
                muted
                type="video/mp4"
                className="header__video"
                src={LixiangL9}
              ></video>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <video
                autoPlay
                loop
                playsInline
                muted
                type="video/mp4"
                className="header__video"
                src={LixiangL9}
              ></video>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <video
                autoPlay
                loop
                playsInline
                muted
                type="video/mp4"
                className="header__video"
                src={LixiangL9}
              ></video>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <video
                autoPlay
                loop
                playsInline
                muted
                type="video/mp4"
                className="header__video"
                src={LixiangL9}
              ></video>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <video
                autoPlay
                loop
                playsInline
                muted
                type="video/mp4"
                className="header__video"
                src={LixiangL9}
              ></video>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
