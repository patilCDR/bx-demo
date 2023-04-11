import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <>
      <h1 className="text-center my-4 py-4">Why Should You Work With Us?</h1>
      <div className="count-container bg-dark text-light p-4 ">
        <div className="row p-4">
          <div className="count-each col-12 col-md-6 col-lg-4 text-center  ">
            <img
              src="https://ik.imagekit.io/kpyu3fvzo/wp-content/uploads/2022/05/Established-Countries.png"
              alt=""
              width={50}
            />
            <h2 className="pt-4">Number of Branches</h2>
            <CountUp
              className="scrollNum "
              start={0}
              end={8}
              duration={5}
              separator=","
              decimal=","
              suffix="+"
              delay={2}
            />
          </div>
          <div className="count-each col-12 col-md-6 col-lg-4 text-center">
            <img
              src="https://ik.imagekit.io/kpyu3fvzo/wp-content/uploads/2022/05/Clients.png"
              alt=""
              width={50}
            />
            <h2 className="pt-4"> Happy Customers</h2>
            <CountUp
              className="scrollNum "
              start={0}
              end={210}
              duration={5}
              separator=","
              decimal=","
              suffix="+"
              delay={2}
            />
          </div>
          <div className=" count-each col-12 col-md-6 col-lg-4 text-center">
            <img
              src="https://ik.imagekit.io/kpyu3fvzo/wp-content/uploads/2022/05/Projects.png"
              alt=""
              width={50}
            />
            <h2 className="pt-4">Completed Projects</h2>
            <CountUp
              className="scrollNum "
              start={0}
              end={624}
              duration={5}
              separator=","
              decimal=","
              suffix="+"
              delay={2}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
