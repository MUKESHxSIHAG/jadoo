import React from 'react'
import jadoologo from '../assets/svg/jadoologo.svg'



const Jadoopage = () => {
  return (
        <header  >
          <nav className='d-flex align-items-center justify-content-between pt-5'>
              <div>
                  <a href="#"><img src={jadoologo} alt="jadooLogo"/></a>
              </div>
              <label className='icon-box' for="iconbox">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <input type="checkbox" id="iconbox" hidden class="d-none"></input>
              <div className='d-flex align-items-center'>
                  <ul className='d-flex align-items-center gap-60 mb-0 sm-screen'>
                      <li className=''><a className='mb-0 line-bottom fs-17 fw-400 fc-dark d-inline-block' href="#">Desitnations</a></li>
                      <li><a className='mb-0 fs-17 fw-400 fc-dark line-bottom d-inline-block' href="#">Hotels</a></li>
                      <li><a className='mb-0 fs-17 fw-400 fc-dark d-inline-block line-bottom' href="#">Flights</a></li>
                      <li><a className='mb-0 fs-17 fw-400 fc-dark d-inline-block line-bottom' href="#">Bookings</a></li>
                      <li><a className='mb-0 fs-17 fw-500 fc-dark d-inline-block line-bottom' href="#">Login</a></li>
                      <li><a className='mb-0 nav-btn fs-17 fw-500 fc-dark' href="#">Sign up</a></li>
                        <select className=' fs-17 fw-500 fc-dark' name="language" id="language">
                            <option className='fs-17 fw-500 fc-dark' value="volvo">En</option>
                            <option className='fs-17 fw-500 fc-dark' value="saab">Hi</option>
                            <option className='fs-17 fw-500 fc-dark' value="opel">Ge</option>
                            <option className='fs-17 fw-500 fc-dark' value="audi">Fr</option>
                        </select>
                  </ul>
              </div>
          </nav>
      </header>
      
  )
}

export default Jadoopage