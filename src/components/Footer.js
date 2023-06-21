/** @format */
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/starryskies2">
          <GitHubIcon />
        </a>
        ;
      </div>
      <p> &copy;2023 Elichay Ben-Zohar</p>
    </div>
  );
}

export default Footer;
//

