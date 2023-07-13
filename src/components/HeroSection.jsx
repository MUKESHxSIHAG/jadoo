import React from 'react'
import HeroSectionGirl from '../assets/png/HeroSectionGirl.png'
import PlayButton from '../assets/svg/PlayButton.svg'
import Plane from '../assets/svg/Plane.svg'
import Orangeline from '../assets/svg/Orangeline.svg'
import { Col, Row } from 'react-bootstrap'

const HeroSection = () => {
  return (
    <section>
      <Row className=" pt-5 align-items-center justify-content-center flex-col-reverse">
        <Col lg={6} className="position-relative" data-aos="fade-down-right" data-aos-easing="linear" data-aos-duration="400">
          <img className='position-absolute z-n1 orange-line-position w-50' src={Orangeline} alt="Orangeline" />
          <div className='d-flex justify-content-center align-items-center'>
            <div className=' mt-50'>
              <div className='d-flex justify-content-center flex-column pt-lg-0 pt-5'>
                <h2 className='fs-20 fc-orange fw-700 ff-poppins txt-center'>Best Destinations around the world</h2>
                <h1 className='fs-84 fw-700 fc-primary ff-volkhov max-width-545 mt-4 txt-center'>Travel, enjoy and live a new and full life</h1>
                <p className='fs-16 fw-500 fc-secondary ff-poppins max-width-420 mt-4 txt-center'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
              </div>
              <div className='mt-34 d-flex align-items-center gap-5 flex-col'>
                <div className=''>
                  <a className='fs-18 fw-500 fc-white header-btn' href="#">Find out more</a>
                </div>
                <div className='d-flex align-items-center gap-4 pt-10'>
                  <a className='play-btn d-flex justify-content-center align-items-center' href="#"><span className='playy'><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.5L0.749999 12.9952L0.75 0.00480889L12 6.5Z" fill="white" />
                  </svg></span></a>
                  
                  <div><a className='ff-poppins fs-15 fw-500 fc-light mb-0 line-bottom' href="#">Play Demo</a></div>
                </div>
              </div>
            </div>
          </div>

        </Col>
        <Col lg={6} className="pic-transform">
          <img className='w-100 img-scale' src={HeroSectionGirl} alt="HeroGirl" data-aos="fade-down-left" data-aos-easing="linear" data-aos-duration="400" />
          <div className='d-flex trans-12'>
            <img className='position-absolute trans-10 flying-planee' src={Plane} alt="Aeroplane" />
            <img className='position-absolute trans-11 flying-planee' src={Plane} alt="Aeroplane" />
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default HeroSection