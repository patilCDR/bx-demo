import React from "react";
import { useLocation } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;

  return pathname === "/signup" || pathname === "/login" ? null : (
    <div>
      <footer className="bg-dark py-2">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap h-100">
            <div className="my-auto d-flex align-items-center">
              <p className="text-white  text-center  text-lg-right my-1 ">
                Copyright &copy; 2023 All Rights Reserved by
                <a
                  href="http://www.bookxpert.co.in/"
                  className="text-info"
                  target="blank"
                >
                  BookXpert
                </a>
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between flex-wrap ">
              <ul className="social-icons d-flex align-items-center  ">
                <li>
                  <a
                    className="facebook mx-2"
                    href="https://www.facebook.com/Bookxpert.co.in/"
                    target="blank"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    className="LinkedIn mx-2"
                    href="https://www.linkedin.com/jobs/view/practising-chartered-accountant-at-bookxpert-pvt-ltd-3560040416/?originalSubdomain=in"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a
                    className="twitter mx-2"
                    href="https://twitter.com/xpertbook?lang=en"
                    target="blank"
                  >
                    <TwitterIcon />
                  </a>
                </li>

                <li>
                  <a
                    className="youtube mx-2"
                    href="https://www.youtube.com/channel/UCr8d2DH7b3SrgxLh79VDrnA?app=desktop"
                    target="blank"
                  >
                    <YouTubeIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
