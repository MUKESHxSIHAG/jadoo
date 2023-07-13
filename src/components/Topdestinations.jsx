import React from 'react'
import Building from '../assets/png/Building.png'
import Navigation from '../assets/svg/Navigation.svg'
import Europe from '../assets/png/Europe.png'
import Rome from '../assets/png/London.jpg'
import Spring from '../assets/svg/Spring.svg'

const Topdestinations = () => {
  return (
    <section className='mb-5'>
      <div className='d-flex justify-content-center align-items-center flex-column' data-aos="fade-left" data-aos-easing="linear" data-aos-duration="400">
        <h2 className='ff-poppins fs-18 fw-600 fc-secondary mb-0'>Top Selling</h2>
        <p className='ff-volkhov fw-700 fs-50 fc-extra-dark mt-1 text-center'>Top Destinations</p>
      </div>
      <div className='pt-5'>
        <div className="row justify-content-center align-items-center flex-col">
          <div className="col-12 col-md-6 col-lg-4  " data-aos="fade-down-right" data-aos-easing="linear" data-aos-duration="400">
            <img className='round-24 w-75' src={Building} alt="Building" />
            <div className="card-2 card-pos">
              <div className='d-flex justify-content-between ps-3 pe-3 pt-4'>
                <h2 className='ff-poppins fw-500 fs-18 fc-secondary pb-0'>Rome, Italty</h2>
                <p className='ff-poppins fw-500 fs-18 fc-secondary pb-0'>$5,42k</p>
              </div>
              <div className='d-flex  gap-3 ps-3 pb-5'>
                <img src={Navigation} alt="Navigation" />
                <p className='ff-poppins fw-500 fs-16 mb-0 fc-secondary'>10 Days Trip</p>
              </div>
            </div>
          </div>
          <div className="col-12  col-md-6 col-lg-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="400">
            <img className='round-24 w-75' src={Rome} alt="Building" />
            <div className="card-2 card-pos">
              <div className='d-flex justify-content-between ps-3 pe-3 pt-4'>
                <h2 className='ff-poppins fw-500 fs-18 fc-secondary pb-0'>London, UK</h2>
                <p className='ff-poppins fw-500 fs-18 fc-secondary pb-0'>$4.2k</p>
              </div>
              <div className='d-flex  gap-3 ps-3 pb-5'>
                <img src={Navigation} alt="Navigation" />
                <p className='ff-poppins fw-500 fs-16 mb-0 fc-secondary'>12 Days Trip</p>
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-6 col-lg-4" data-aos="fade-down-left" data-aos-easing="linear" data-aos-duration="400">
            <img className='round-24 w-75' src={Europe} alt="Building" />
            <div className="card-2 card-pos">
              <div className='d-flex justify-content-between ps-3 pe-3 pt-4'>
                <h2 className='ff-poppins fw-500 fs-18 fc-secondary pb-0'>Full Europe</h2>
                <p className='ff-poppins fw-500 fs-18 fc-secondary pb-0'>$15k</p>
              </div>
              <div className='d-flex  gap-3 ps-3 pb-5'>
                <img src={Navigation} alt="Navigation" />
                <p className='ff-poppins fw-500 fs-16 mb-0 fc-secondary'>28 Days Trip</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Topdestinations