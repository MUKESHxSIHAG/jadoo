import React from 'react'
import Dth from '../assets/png/Dth.png'
import Cardplane from '../assets/png/Cardplane.png'
import Mic from '../assets/png/Mic.png'
import Costumization from '../assets/png/Costumization.png'
const Bestservices = () => {
  return (
      <section className='mb-5' data-aos="fade-right">
          <div className='d-flex flex-column justify-content-center align-items-center mt-110'>
              <h2 className='fs-18 fw-600 ff-poppins fc-secondary'>CATEGORY</h2>
              <h1 className='fs-50 fw-700 ff-volkhov fc-extra-dark mb-0 mt-1 text-center'>We Offer Best Services</h1>
          </div>
        
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12" data-aos="fade-down-right">
                      <div className='d-flex justify-content-center align-items-center flex-column mt-5 pt-3 hovCard orange-card'>
                          <img src={Dth} alt="DTH" />
                          <h2 className='mt-29 fs-20 fw-600 '>Calculated Weather</h2>
                          <p className='text-center max-width-181 ff-poppins fs-16 fw-500 fc-secondary mt-15 mb-5'>Built Wicket longer admire do barton vanity itself do in it.</p>
                      </div>
                  </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 " data-aos="fade-down-right">
                      <div className='d-flex justify-content-center align-items-center flex-column mt-5 pt-3 hovCard orange-card'>
                          <img src={Cardplane} alt="DTH" />
                          <h2 className='mt-29 fs-20 fw-600 '>Best Flights</h2>
                          <p className='text-center max-width-181 ff-poppins fs-16 fw-500 fc-secondary mt-15 mb-5'>Engrossed listening. Park gate sell they west hard for the.</p>
                      </div>
                  </div>
              <div className="col-lg-3 col-md-4 col-sm-6 " data-aos="fade-down-left">
                      <div className='d-flex justify-content-center align-items-center flex-column mt-5 pt-3 hovCard orange-card'>
                          <img src={Mic} alt="Mic" />
                          <h2 className='mt-29 fs-20 fw-600 '>Local Events</h2>
                          <p className='text-center max-width-181 ff-poppins fs-16 fw-500 fc-secondary mt-15 mb-5'>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                      </div>
                  </div>
              <div className="col-lg-3 col-sm-6" data-aos="fade-down-left">
                      <div className='d-flex justify-content-center align-items-center flex-column mt-5 pt-3 hovCard orange-card'>
                          <img src={Costumization} alt="Costumization" />
                          <h2 className='mt-29 fs-20 fw-600 '>Customization</h2>
                          <p className='text-center max-width-181 ff-poppins fs-16 fw-500 fc-secondary mt-15 mb-5'>We deliver outsourced aviation services for military customers</p>
                      </div>
                  </div>
            </div>
      </section>
  )
}

export default Bestservices