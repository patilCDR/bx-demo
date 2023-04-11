import React, { useEffect } from "react";
import { aboutImg, teamImg, MainImg } from "../../../assets/images";
import Counter from "./CountUp";
import AboutInfo from "./AboutInfo";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="container">
        {/* <img src={MainImg} alt="" className="img-fluid" /> */}
        <h1 className="abt-title text-center order-0 order-lg-0 my-4">
          ABOUT US
        </h1>
        <div className="row">
          <div className="col-12 col-md-6 order-0 order-lg-1">
            <img
              className="img-fluid w-100"
              src="https://ik.imagekit.io/kpyu3fvzo/wp-content/uploads/2022/04/Image-above-footer-1-e1649310485159.png"
              alt=""
            />
          </div>
          <div className="col-12 col-md-6">
            <p className="order-1 order-lg-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              fugit reiciendis atque dolore, rem neque quidem itaque qui
              molestiae eum odit consectetur aliquid dolores eaque? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit.
              <br />
              <br />
              Repellat fugit reiciendis atque dolore, rem neque quidem itaque
              qui molestiae eum odit consectetur aliquid dolores eaque?rem neque
              quidem itaque qui molestiae eum odit consectetur aliquid dolores
              eaque?
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <img src={aboutImg} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 my-auto">
            <h2>Who We Are?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              animi explicabo, corrupti ab quos adipisci voluptatibus iure
              ducimus ipsam deserunt non, debitis nobis eligendi aperiam totam
              libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              animi explicabo, corrupti ab quos adipisci voluptatibus iure
              ducimus ipsam deserunt non, debitis nobis eligendi aperiam totam
              libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              animi explicabo, corrupti ab quos adipisci voluptatibus iure
              ducimus ipsam deserunt non, debitis nobis eligendi aperiam totam
              libero consequatur laudantium accusamus.
            </p>
          </div>
        </div>

        <div className="row my-4">
          <div className="col-12 col-md-6 my-auto text-lg-end text-justify order-1 order-lg-0">
            <h2>Our Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              animi explicabo, corrupti ab quos adipisci voluptatibus iure
              ducimus ipsam deserunt non, debitis nobis eligendi aperiam totam
              libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              animi explicabo, corrupti ab quos adipisci voluptatibus iure
              ducimus ipsam deserunt non, debitis nobis eligendi aperiam totam
              libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              animi explicabo, corrupti ab quos adipisci voluptatibus iure
              ducimus ipsam deserunt non, debitis nobis eligendi aperiam totam
              libero consequatur laudantium accusamus.
            </p>
          </div>

          <div className="col-12 col-md-6  order-0 order-lg-1">
            <img src={teamImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <Counter />
    </section>
  );
};

export default About;
