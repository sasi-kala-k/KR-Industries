import React from 'react'
import location from '../../assets/Location.svg'

function Location() {
  return (
    
      <div className=' text-gray d-flex flex-column align-items-center justify-content-center text-center gap-3 rounded-5 mx-5 px-5 '>
            <h1 className="display-5 fw-bold" style={{maxWidth:'700px'}} >Lorem ipsum dolor sit amet, consectetur  <span className='text-brown me-2'> adipiscing</span>elit.</h1>
            <p className="fs-6" style={{ maxWidth: '800px' }}>We’ll create high-quality linkable content and build at least 40 high-authority link to each asset. Bring the way for you to grow your website & improve skills.</p>
       <img src={location} alt="location" className='img-fluid' />
        </div>
    
  )
}

export default Location
