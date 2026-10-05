import React from 'react'
import image1 from '../assets/Image1.svg'
import image2 from '../assets/Image2.svg'
import image3 from '../assets/Image3.svg'
import image4 from '../assets/Image4.svg'
import image5 from '../assets/Image5.svg'
import image6 from '../assets/Image6.svg'
import image7 from '../assets/Image7.svg'
import image8 from '../assets/Image8.svg'
import image9 from '../assets/Image9.svg'
import image10 from '../assets/Image10.svg'
import image11 from '../assets/Image11.svg'
import '../Components/Gallery/Gallery.css'
import Exhibition from '../Components/Gallery/Exhibition'
import ImportCountries from '../Components/Home/ImportCountries'

function Gallery() {
    return (
        <>
            <div className='d-flex flex-column text-center align-items-center gap-3' >
                <h1 className='display-5 fw-bold'>Wasting time is just a failure</h1>
                <p style={{ maxWidth: '550px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor dictum lectus at ultricies.</p>
            </div>
            <div className='gallery-wrap py-5'>

                <div className='row gx-2'>

                    {/* LEFT */}
                    <div className='col-12 col-lg-8 d-flex flex-column gap-2'>
                        <div className='row gx-2'>
                            <div className='col-6 d-flex flex-column gap-2'>
                                <img src={image1} className='GalleryImage' alt='' height={251} />
                                <div className='row gx-3'>
                                    <div className='col-6'><img src={image5} className='GalleryImage' alt='' height={242} /></div>
                                    <div className='col-6'><img src={image6} className='GalleryImage' alt='' height={242} /></div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <img src={image2} className='GalleryImage px-3' alt='' height={510} />
                            </div>
                        </div>
                        <div className='mt-0'>
                            <img src={image8} className='GalleryImage' alt='' height={510} />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className='col-12 col-lg-4 d-flex flex-column gap-2'>
                        <div className='row gx-3'>
                            <div className='col-6'><img src={image3} className='GalleryImage' alt='' height={251} /></div>
                            <div className='col-6'><img src={image4} className='GalleryImage' alt='' height={251} /></div>
                        </div>
                        <img src={image7} className='GalleryImage' alt='' height={251} />
                        <div className='row gx-3'>
                            <div className='col-6'><img src={image9} className='GalleryImage' alt='' height={251} /></div>
                            <div className='col-6'><img src={image10} className='GalleryImage' alt='' height={251} /></div>
                        </div>
                        <img src={image11} className='GalleryImage' alt='' height={251} />
                    </div>

                </div>
            </div>
            <Exhibition />
            <ImportCountries />
        </>
    )
}

export default Gallery
