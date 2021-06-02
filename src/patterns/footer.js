import React from "react";

//IMPORTING STYLESHEET

import "../styles/patterns/footer.scss";

//IMPORTING MEDIA ASSETS

import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";
import githup from "../assets/icons/git.svg";
import youtube from "../assets/icons/youtube.svg";
import twitter from "../assets/icons/twitter.svg";
import discord from "../assets/icons/discord.svg";

const Footer = () => {
  const renderSocialMediaLinks = (
    <div className="social_icons">
      <img src={facebook} alt="facebook" />
      <img src={linkedin} alt="linkedin" />
      <img src={twitter} alt="twitter" />
      <img src={youtube} alt="youtube" />
      <img src={githup} alt="githup" />
      <img src={discord} alt="discord" />
    </div>
  );
  return (
    <div className="footer">
      <p className="text_regular_14">Copyright @ Rubyswap 2021</p>
      {renderSocialMediaLinks}
    </div>
  );
};

export default Footer;
