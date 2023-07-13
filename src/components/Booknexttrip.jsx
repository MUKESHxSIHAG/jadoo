import React from 'react'
import Square from '../assets/svg/Square.svg'
import Payment from '../assets/svg/Payment.svg'
import Car from '../assets/svg/Car.svg'
import Cardgirl from '../assets/png/Cardgirl.jpg'
import Leaf from '../assets/svg/Leaf.svg'
import Mapicon from '../assets/svg/Mapicon.svg'
import Send from '../assets/svg/Send.svg'
import Hugebuilding from '../assets/svg/Hugebuilding.svg'
import Heart from '../assets/svg/Heart.svg'
import Temple from '../assets/png/Temple.png'
import Gradient from '../assets/svg/Gradient.svg'
import { Row, Col } from 'react-bootstrap'
const Booknexttrip = () => {
  return (
    <section className=''>
      <Row className="align-items-center">
        <Col lg={6} data-aos="fade-down-right">
          <div className='flex-col dis-flex jcc aic'>
            <h2 className='ff-poppins fw-600 fs-18 fc-secondary'>Easy and Fast</h2>
            <p className='fs-50 ff-volkhov fw-700 fc-extra-dark max-511 txt-center'>Book your next trip in 3 easy steps</p>

            <div>
              <div className='d-flex gap-4'>
                <img src={Square} alt="Square" />
                <div>
                  <p className='ff-poppins fs-16 fw-700 fc-secondary mb-0'>Choose Destination</p>
                  <p className='ff-poppins fs-16 fw-400 fc-secondary mb-0'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                </div>
              </div>
              <div className='d-flex gap-4 pt-5'>
                <img src={Payment} alt="Payment" />
                <div>
                  <p className='ff-poppins fs-16 fw-700 fc-secondary mb-0'>Make Payment</p>
                  <p className='ff-poppins fs-16 fw-400 fc-secondary mb-0'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                </div>
              </div>
              <div className='d-flex gap-4 pt-5'>
                <img src={Car} alt="Car" />
                <div>
                  <p className='ff-poppins fs-16 fw-700 fc-secondary mb-0'>Reach Airport on Selected Date</p>
                  <p className='ff-poppins fs-16 fw-400 fc-secondary mb-0'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} className="d-flex flex-column justify-content-center align-items-center position-relative mt-40" data-aos="fade-down-left">
          <div className='gradient-position position-absolute'>

          </div>
          <div className="GirlWhiteCard">
            <img className='round-24 pt-21' src={Cardgirl} alt="Cardgirl" />
            <div className=''>
              <p className='pt-3 ff-poppins fs-18 fw-500 fc-black'>Trip To Greece</p>
              <p className='ff-poppins fw-500 fs-16 fc-secondary mb-0'>14-29 June by Robbin joseph</p>
            </div>
            <div className='d-flex gap-4 pt-4'>
              <img src={Leaf} alt="Leaf" />
              <img src={Mapicon} alt="Map" />
              <img src={Send} alt="Send" />
            </div>
            <div className='d-flex align-items-center justify-content-between pt-4'>
              <div className='gap-3 d-flex align-items-center'>
                <img src={Hugebuilding} alt="Huge Building" />
                <p className='ff-poppins fs-16 fw-500 fc-grey mb-0'>24 people going</p>
              </div>
              <div className=''>
                <img src={Heart} alt="Heart" />
              </div>
            </div>
          </div>
          <div className='small-card d-flex flex-shrink-0 trans-card'>
            <div>
              <img className='border-radius-5' src={Temple} alt="Temple" />
            </div>
            <div>
              <p className='mb-0 ff-poppins fw-500 fs-14 fc-grey'>Ongoing</p>
              <p className='pt-1 mb-0 ff-poppins fw-500 fs-18 fc-black'>Trip to rome</p>
              <p className='pt-2 mb-0 ff-poppins fs-14 fw-500 fc-voilet line-1 position-relative'>40% <span className='fc-black'>completed</span></p>
            </div>

          </div>
        </Col>

      </Row>

    </section>
  )
}

export default Booknexttrip