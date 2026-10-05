import React from 'react'
import image1 from '../../assets/exhibitionImage1.svg'
import image2 from '../../assets/exhibitionImage2.svg'
import image3 from '../../assets/exhibitionImage3.svg'
import image4 from '../../assets/exhibitionImage4.svg'
import image5 from '../../assets/exhibitionImage5.svg'

function Exhibition() {
          const images = [image1, image2, image3, image4, image5]
    return (
   
        <div>
            <div className='d-flex flex-column text-center align-items-center gap-3' >
                <h1 className='display-5 fw-bold'>Exhibition</h1>
                <p style={{ maxWidth: '550px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus at ultricies.</p>
            </div>
           <div className='d-flex gap-4 py-5'>
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`exhibition ${i + 1}`}
                        className={`exhibition-img ${
                i === 0 ? 'fade-left' : i === images.length - 1 ? 'fade-right' : ''
            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Exhibition
