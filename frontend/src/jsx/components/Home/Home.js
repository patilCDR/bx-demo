import React, { useState, useEffect } from 'react';
import HomeCarousel from './HomeCarousel';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeCarousel />

      <div className='container'>
        <div className='row p-2 p-lg-4 '>
          <div className='col-12'>
            <h1 className='text-center text-blue landing-title'>
              One Stop Solution For All Your Business Problems
            </h1>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <img
              className='img-fluid '
              src='https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg'
              alt=''
            />
          </div>
          <div className='col-lg-6 col-sm-12'>
            <p className='abt-content text-justify text-lg-right'>
              Our company provides a one-stop solution for all your business problems. We understand
              that businesses face numerous challenges, and finding solutions to these problems can
              be time-consuming and complex. That's why we offer a comprehensive range of services
              to help businesses overcome any obstacle they may encounter.
              <br />
              From business strategy development to marketing, financial management, and more, we
              have the expertise and experience to provide solutions that address the specific needs
              of your business. Our focus is on delivering practical, effective solutions that help
              businesses thrive and achieve their goals.
              <br />
              With our one-stop solution approach, businesses can save time and money by accessing a
              broad range of services from a single provider. We work closely with our clients to
              understand their needs and develop customized solutions that deliver real results.
            </p>
          </div>
        </div>

        <div className='row p-2 p-lg-4 '>
          <div className='col-12'>
            <h1 className='text-center text-blue landing-title'>
              We help you to improve your business leads.
            </h1>
          </div>
          <div className='col-lg-6 col-sm-12 order-lg-0 order-1'>
            <p className='abt-content text-justify text-lg-end'>
              At our company, we understand the importance of generating quality leads for your
              business. Without leads, your business will struggle to attract new customers and
              grow. That's why we offer services that are designed to help businesses improve their
              leads.
              <br />
              We work closely with our clients to understand their target market and develop
              effective strategies to reach them. Our services include lead generation, lead
              management, and lead nurturing, which are all designed to help businesses increase
              their conversion rates and improve their bottom line.
              <br />
              Our team of experts has years of experience in the industry and can provide valuable
              insights and guidance to help businesses improve their leads. By working with us,
              businesses can focus on what they do best while leaving the lead generation and
              management to us. We are committed to helping our clients succeed and achieve their
              goals by providing them with the support they need to improve their business leads.
            </p>
          </div>
          <div className='col-lg-6 col-sm-12 order-lg-1 order-0'>
            <img
              className='img-fluid '
              src='https://img.freepik.com/free-vector/two-business-partners-handshaking_74855-6685.jpg?size=626&ext=jpg'
              alt=''
            />
          </div>
        </div>
        <div className='row p-2 p-lg-4 '>
          <div className='col-12'>
            <h1 className='text-center text-blue landing-title'>
              We guide you on the right path to success
            </h1>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <img
              className='img-fluid '
              src='https://img.freepik.com/premium-vector/ceo-chief-executive-officer-cartoon-illustration-businessman-work_2175-4838.jpg?size=626&ext=jpg'
              alt=''
            />
          </div>
          <div className='col-lg-6 col-sm-12'>
            <p className='abt-content text-justify text-lg-right'>
              "We help you to get success in your business" is a statement that reflects our
              commitment to supporting business owners in achieving their goals. Starting and
              growing a successful business can be a challenging task, and it often requires the
              expertise and guidance of experienced professionals.
              <br />
              Our goal is to provide the necessary tools, resources, and support to help business
              owners overcome obstacles and achieve their desired level of success. We offer
              services such as business coaching, strategy development, marketing support, and more
              to help businesses thrive.
              <br />
              By working with us, business owners can gain valuable insights, develop effective
              strategies, and improve their overall business performance. Our focus is on building
              long-term relationships with our clients and providing them with the support they need
              to achieve sustained success in their business endeavors.
            </p>
          </div>
        </div>

        <div className='row p-2 p-lg-4 '>
          <div className='col-12'>
            <h1 className='text-center text-blue landing-title'>We Believe In TeamWork.</h1>
          </div>
          <div className='col-lg-6 col-sm-12 order-lg-0 order-1'>
            <p className='abt-content text-justify text-lg-end'>
              At our company, we firmly believe in the power of teamwork. We understand that when
              individuals come together and collaborate towards a common goal, they can achieve
              great things. This is why we foster a culture of teamwork within our organization, and
              we encourage our clients to do the same.
              <br />
              Working in a team brings together diverse perspectives, skills, and experiences, which
              can lead to innovative solutions and improved outcomes. By working collaboratively, we
              can accomplish more than we could ever achieve alone.
              <br />
              Our approach to teamwork emphasizes open communication, mutual respect, and
              accountability. We work closely with our clients to ensure that everyone is aligned
              towards the same goals and objectives. We believe that by embracing teamwork, we can
              create a positive and productive work environment that fosters growth, creativity, and
              success.
            </p>
          </div>
          <div className='col-lg-6 col-sm-12 order-lg-1 order-0'>
            <img
              className='img-fluid '
              src='https://img.freepik.com/premium-vector/students-man-woman-sit-pile-books-read-book-learn-technology-online-learning_352905-313.jpg?size=626&ext=jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
