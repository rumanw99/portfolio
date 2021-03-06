import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import vuexy from "../../img/vuexy.png";
import srepo from "../../img/srepo.png";
import dashboard from "../../img/dashboard.png";
import face from "../../img/face.png";
import hour from "../../img/hour.png";
import reduxLogin from "../../img/reduxLogin.png";
import reduxProducts from "../../img/reduxProducts.png";
import slid from "../../img/slid.png";
import weather from "../../img/weather.png";
import resturant from "../../img/resturant.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
           <SwiperSlide>
          <a href="https://re-ve-ne.vercel.app/" target="_blank">
          <img src={vuexy} alt="" />
          </a>
        </SwiperSlide>
<SwiperSlide>
          <a href="https://search-repo-github1.vercel.app/" target="_blank">
          <img src={srepo} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://dashboard-ruby-eight.vercel.app/" target="_blank">
          <img src={dashboard} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://facebook-topaz.vercel.app/" target="_blank">
          <img src={face} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://hour-puce.vercel.app/" target="_blank">
          <img src={hour} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://redux-login-lilac.vercel.app/" target="_blank">
          <img src={reduxLogin} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://redux-wheat.vercel.app/" target="_blank">
          <img src={reduxProducts} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://slider-liard.vercel.app/" target="_blank">
          <img src={slid} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://weather-bay.vercel.app/" target="_blank">
          <img src={weather} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://project-typescript.vercel.app/" target="_blank">
          <img src={resturant} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
