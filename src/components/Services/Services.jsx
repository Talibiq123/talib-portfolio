import React from 'react'
import './Services.css'
import theme_pattern from '../../Asssets/theme_pattern.svg'
import Services_Data from '../../Asssets/services_data'
import arrow_icon from '../../Asssets/arrow_icon.svg'

const Services = () => {
  return (
    <div className='services'>
      <div class="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div class="services-container">
        {Services_Data.map((service, index) => {
          return <div key={index} className='service-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className='services-readmore'>
              <p>read more...</p>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services
