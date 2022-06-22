import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>rumanw99@gmail.com</span>
        <div className="f-icons">
        <a href="https://github.com/rumanw99" target="_balnk"><AiFillGithub color="#fff" size={75} /></a>
          <a href="https://www.linkedin.com/in/ward-ruman-718aa622b/" target="_balnk"><AiFillLinkedin color="#fff" size={75} /></a>
          <a href="https://www.instagram.com/wardruman/" target="_balnk"><AiOutlineInstagram color="#fff" size={75} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;