import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';

import Container from "../../Utils/Container/Container"
import Card from "../../Assets/Images/Card.png"
import {FaCalendarDays} from "react-icons/fa6";
import {BsFillEyeFill} from "react-icons/bs";
import "./Yangiliklar.scss"
const Yangiliklar = () => {
  return (
    <div>
      <Container>
        <div className="yangiliklar">
            <h2 className="yangiliklar__title">Yangiliklar</h2>
             <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        
        <SwiperSlide>
                <ul className="yangiliklar__card">
                 <img src={Card}/>
                 <li className="yangiliklar__item">“Trade-in” bo’yicha mashina almashtirish</li>
                 <li>Avtosalonimiz tomonidan yaratilgan yana bir qulaylik - bu “Trade-in” dasturi.
                 Biz “Chevrolet” markasiga mansub turli avtomobillar va inomarkalarni ushbu dastur asosida olib qolib, eski avtomobil o’rniga yangisini taqdim etamiz.</li>
                 <ul className="yangiliklar__icons">
                        <li className="yangiliklar__day"><FaCalendarDays /> </li>
                        <li className="yangiliklar__day">
                        <BsFillEyeFill/>
                        </li>
                </ul>
                </ul>
        </SwiperSlide>
        <SwiperSlide>
                <div className="yangiliklar__card">
                 <img className="yangiliklar__img"src={Card}/>
                 <h3 className="yangiliklar__item">“Trade-in” bo’yicha mashina almashtirish</h3>
                 <p className="yangiliklar__item1">Avtosalonimiz tomonidan yaratilgan yana bir qulaylik - bu “Trade-in” dasturi.
                 Biz “Chevrolet” markasiga mansub turli avtomobillar va inomarkalarni ushbu dastur asosida olib qolib, eski avtomobil o’rniga yangisini taqdim etamiz.</p>
                 <ul className="yangiliklar__icons">
                        <li className="yangiliklar__day"><FaCalendarDays /> </li>
                        <li className="yangiliklar__day">
                        <BsFillEyeFill/>
                        </li>
                </ul>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="yangiliklar__card">
                 <img className="yangiliklar__img"src={Card}/>
                 <h3 className="yangiliklar__item">“Trade-in” bo’yicha mashina almashtirish</h3>
                 <p className="yangiliklar__item1">Avtosalonimiz tomonidan yaratilgan yana bir qulaylik - bu “Trade-in” dasturi.
                 Biz “Chevrolet” markasiga mansub turli avtomobillar va inomarkalarni ushbu dastur asosida olib qolib, eski avtomobil o’rniga yangisini taqdim etamiz.</p>
                 <ul className="yangiliklar__icons">
                        <li className="yangiliklar__day"><FaCalendarDays /> </li>
                        <li className="yangiliklar__day">
                        <BsFillEyeFill/>
                        </li>
                </ul>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="yangiliklar__card">
                 <img className="yangiliklar__img"src={Card}/>
                 <h3 className="yangiliklar__item">“Trade-in” bo’yicha mashina almashtirish</h3>
                 <p className="yangiliklar__item1">Avtosalonimiz tomonidan yaratilgan yana bir qulaylik - bu “Trade-in” dasturi.
                 Biz “Chevrolet” markasiga mansub turli avtomobillar va inomarkalarni ushbu dastur asosida olib qolib, eski avtomobil o’rniga yangisini taqdim etamiz.</p>
                 <ul className="yangiliklar__icons">
                        <li className="yangiliklar__day"><FaCalendarDays /> </li>
                        <li className="yangiliklar__day">
                        <BsFillEyeFill/>
                        </li>
                </ul>
                </div>
       </SwiperSlide>
        <SwiperSlide>
                <div className="yangiliklar__card">
                 <img className="yangiliklar__img"src={Card}/>
                 <h3 className="yangiliklar__item">“Trade-in” bo’yicha mashina almashtirish</h3>
                 <p className="yangiliklar__item1">Avtosalonimiz tomonidan yaratilgan yana bir qulaylik - bu “Trade-in” dasturi.
                 Biz “Chevrolet” markasiga mansub turli avtomobillar va inomarkalarni ushbu dastur asosida olib qolib, eski avtomobil o’rniga yangisini taqdim etamiz.</p>
                 <ul className="yangiliklar__icons">
                        <li className="yangiliklar__day"><FaCalendarDays /> </li>
                        <li className="yangiliklar__day">
                        <BsFillEyeFill/>
                        </li>
                </ul>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="yangiliklar__card">
                 <img className="yangiliklar__img"src={Card}/>
                 <h3 className="yangiliklar__item">“Trade-in” bo’yicha mashina almashtirish</h3>
                 <p className="yangiliklar__item1">Avtosalonimiz tomonidan yaratilgan yana bir qulaylik - bu “Trade-in” dasturi.
                 Biz “Chevrolet” markasiga mansub turli avtomobillar va inomarkalarni ushbu dastur asosida olib qolib, eski avtomobil o’rniga yangisini taqdim etamiz.</p>
                 <ul className="yangiliklar__icons">
                        <li className="yangiliklar__day"><FaCalendarDays /> </li>
                        <li className="yangiliklar__day">
                        <BsFillEyeFill/>
                        </li>
                </ul>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="yangiliklar__card">
                 <img className="yangiliklar__img"src={Card}/>
                 <h3 className="yangiliklar__item">“Trade-in” bo’yicha mashina almashtirish</h3>
                 <p className="yangiliklar__item1">Avtosalonimiz tomonidan yaratilgan yana bir qulaylik - bu “Trade-in” dasturi.
                 Biz “Chevrolet” markasiga mansub turli avtomobillar va inomarkalarni ushbu dastur asosida olib qolib, eski avtomobil o’rniga yangisini taqdim etamiz.</p>
                 <ul className="yangiliklar__icons">
                        <li className="yangiliklar__day"><FaCalendarDays /> </li>
                        <li className="yangiliklar__day">
                        <BsFillEyeFill/>
                        </li>
                </ul>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="yangiliklar__card">
                 <img className="yangiliklar__img"src={Card}/>
                 <h3 className="yangiliklar__item">“Trade-in” bo’yicha mashina almashtirish</h3>
                 <p className="yangiliklar__item1">Avtosalonimiz tomonidan yaratilgan yana bir qulaylik - bu “Trade-in” dasturi.
                 Biz “Chevrolet” markasiga mansub turli avtomobillar va inomarkalarni ushbu dastur asosida olib qolib, eski avtomobil o’rniga yangisini taqdim etamiz.</p>
                 <ul className="yangiliklar__icons">
                        <li className="yangiliklar__day"><FaCalendarDays /> </li>
                        <li className="yangiliklar__day">
                        <BsFillEyeFill/>
                        </li>
                </ul>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="yangiliklar__card">
                 <img className="yangiliklar__img"src={Card}/>
                 <h3 className="yangiliklar__item">“Trade-in” bo’yicha mashina almashtirish</h3>
                 <p className="yangiliklar__item1">Avtosalonimiz tomonidan yaratilgan yana bir qulaylik - bu “Trade-in” dasturi.
                 Biz “Chevrolet” markasiga mansub turli avtomobillar va inomarkalarni ushbu dastur asosida olib qolib, eski avtomobil o’rniga yangisini taqdim etamiz.</p>
                 <ul className="yangiliklar__icons">
                        <li className="yangiliklar__day"><FaCalendarDays /> </li>
                        <li className="yangiliklar__day">
                        <BsFillEyeFill/>
                        </li>
                </ul>
                </div>
      </SwiperSlide>
      </Swiper>

        </div>
      </Container>
    </div>
  )
}

export default Yangiliklar
