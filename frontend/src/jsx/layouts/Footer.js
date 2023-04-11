import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;

  return pathname === "/signup" || pathname === "/login" ? null : (
    <div>
      <footer className="bg-dark py-2">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap h-100">
            <div className="my-auto d-flex align-items-center">
              <p className="text-white">
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
            <div>
              <ul className="social-icons d-flex align-items-center ">
                <li>
                  <a
                    className="facebook "
                    href="https://www.facebook.com/Bookxpert.co.in/"
                    target="blank"
                  >
                    <i className="bi bi-facebook fa-6x text-primary m-3"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="LinkedIn"
                    href="https://www.linkedin.com/jobs/view/practising-chartered-accountant-at-bookxpert-pvt-ltd-3560040416/?originalSubdomain=in"
                    target="blank"
                  >
                    <i class="bi bi-linkedin fa-6x text-warning m-3"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href="https://twitter.com/xpertbook?lang=en"
                    target="blank"
                  >
                    <i className="bi bi-twitter fa-6x text-primary m-3"></i>
                  </a>
                </li>

                <li>
                  <a
                    className="youtube"
                    href="https://www.youtube.com/channel/UCr8d2DH7b3SrgxLh79VDrnA?app=desktop"
                    target="blank"
                  >
                    <i className="bi bi-youtube fa-6x text-danger m-3"></i>
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
