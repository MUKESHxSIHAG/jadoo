import React from 'react'
import Feedback from '../assets/png/Feedback.png'
import { Col, Row } from 'react-bootstrap'
const Aboutus = () => {
    return (
        <section className='pt-209'>
            <Row>
                <Col lg={6} className="dis-flex jcc aic flex-col" data-aos="fade-down-right">
                    <div>
                        <p className='ff-poppins fs-18 fw-600 fc-secondary txt-center'>Testimonials</p>
                        <p className='ff-volkhov fs-50 fw-700 fc-extra-dark txt-center'>What people say <br /> about Us.</p>
                        <p className='mt-4'><span><svg width="87" height="12" viewBox="0 0 87 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="#39425D" />
                            <circle cx="44" cy="6" r="6" fill="#E5E5E5" />
                            <circle cx="81" cy="6" r="6" fill="#E5E5E5" />
                        </svg>
</span></p>
                    </div>
                </Col>
                <Col lg={6} className="dis-flex jcc aic flex-col" data-aos="fade-down-left">
                    <div className="feedback-card">
                        <img className='feedback-img-trans' src={Feedback} alt="Feedback" />
                        <div className='ps-50'>
                            <p className='max-402 mb-0 ff-poppins fs-16 fw-500 fc-secondary'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                            <p className='pt-4 mb-0 ff-poppins fw-600 fs-18 fc-secondary'>Mike taylor</p>
                            <p className='ff-poppins fc-secondary fw-500 fs-14 pb-4'>Lahore, Pakistan</p>
                        </div>
                    </div>

                </Col>
            </Row>
        </section>
    )
}

export default Aboutus