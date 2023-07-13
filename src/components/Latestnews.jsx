import React from 'react'
import Telegram from '../assets/svg/Telegram.svg'
import Email from '../assets/svg/Email.svg'
import Stars from '../assets/png/Stars.png'

const Latestnews = () => {
  return (
    <section className='position-relative' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="400">
      <img className='trans-telegram' src={Telegram} alt="Telegram" />
      <div className='bg-img pb-78 d-flex flex-column justify-content-center align-items-center mt-149'>
        <div className='d-flex justify-content-center align-items-center'>
          <p className='pt-79 ff-poppins fs-33 fw-600 text-center fc-secondary max-881 '>Subscribe to get information, latest news and other interesting offers about Jadoo</p>
        </div>
        <div className='d-flex flex-column flex-sm-row gap-4 pt-5'>
          <div className='input-box d-flex align-items-center'>
            <img src={Email} alt="Email Box" />
            <input className='ms-3' type="email" placeholder='Your email' />
          </div>
          <div className=''>
            <a href="#"><p className='fw-600 fs-17 ff-openSans fc-white text-center subscribe-btn'>Subscribe</p></a>
          </div>

        </div>
      </div>
      <div className='d-flex d-none  justify-content-end trans-stars w-100'> <img src={Stars} alt="Stars" /></div>
    </section>
  )
}

export default Latestnews
