import React, { useContext } from "react";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import "./Intro.css";
 import war from "../../img/war.jpg";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {init} from 'ityped';
import {useEffect , useRef} from 'react';
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const textRef = useRef();

  useEffect(() =>{
            init(textRef.current , {
                showCursor: true,
                backDelay:1500,
                backSpeed:60,
                strings : ["Developer", "Designer", "Content Creator"],
            });
  },[])

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Ward Ruman</span>
          <h2><span style={{color:"white"}} ref={textRef}></span></h2>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/rumanw99" target="_balnk"><AiFillGithub color="#eeb9e7" size={100} /></a>
          <a href="https://www.linkedin.com/in/ward-ruman-718aa622b/" target="_balnk"><AiFillLinkedin color="#eeb9e7" size={100} /></a>
          <a href="https://www.instagram.com/wardruman/" target="_balnk"><AiOutlineInstagram color="#eeb9e7" size={100} /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img className="ward" src={war} alt="" />

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;