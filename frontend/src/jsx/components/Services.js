import React, { useEffect } from 'react';
import { webappImg, mobileAppImg, uiuxImg, moduleOperationImg } from '../../assets/images';

const Services = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <div className='container'>
        {/* <img src={MainImg} alt="" className="img-fluid" /> */}
        <h1 className='abt-title text-center order-0 order-lg-0 my-4'>Our Services</h1>

        <div className='row'>
          <div className='col-12 col-md-4'>
            <img src={webappImg} alt='' className='img-fluid' />
          </div>
          <div className='col-12 col-md-8 my-auto'>
            <h2>Website Development</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
          </div>
        </div>

        <div className='row my-4'>
          <div className='col-12 col-md-8 my-auto text-lg-end text-justify order-1 order-lg-0'>
            <h2>App Development</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
          </div>

          <div className='col-12 col-md-4  order-0 order-lg-1'>
            <img src={mobileAppImg} alt='' className='img-fluid' />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <img src={uiuxImg} alt='' className='img-fluid' />
          </div>
          <div className='col-12 col-md-8 my-auto'>
            <h2>UI/UX Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
          </div>
        </div>

        <div className='row my-4'>
          <div className='col-12 col-md-8 my-auto text-lg-end text-justify order-1 order-lg-0'>
            <h2>module Operation</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi explicabo,
              corrupti ab quos adipisci voluptatibus iure ducimus ipsam deserunt non, debitis nobis
              eligendi aperiam totam libero consequatur laudantium accusamus.
            </p>
          </div>

          <div className='col-12 col-md-4  order-0 order-lg-1'>
            <img src={moduleOperationImg} alt='' className='img-fluid' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
