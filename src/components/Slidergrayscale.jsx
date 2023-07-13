import React from 'react'
import '../Slider.js'
import Axon from '../assets/png/Axon.png'
import Jetstar from '../assets/png/Jetstar.png'
import Expedia from '../assets/png/Expedia.png'
import Qantas from '../assets/png/Qantas.png'
import Alitalia from '../assets/png/Alitalia.png'

const Slidergrayscale = () => {
  return (
    <section>
      <div className='d-flex justify-content-center align-items-center gap-60 pt-200 flex-wrap' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400">
        <img className=' grayscale-img' src={Axon} alt="Axon" />
        <img className=' grayscale-img' src={Jetstar} alt="Jetstar" />
        <img className=' grayscale-img' src={Expedia} alt="Expedia" />
        <img className=' grayscale-img' src={Qantas} alt="Qantas" />
        <img className=' grayscale-img' src={Alitalia} alt="Alitalia" />
      </div>
    </section>
  )
}

export default Slidergrayscale
