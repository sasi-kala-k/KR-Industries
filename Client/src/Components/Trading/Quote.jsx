import React from 'react'
import image1 from '../../assets/Prd-Quote-Img-1.svg'
import image2 from '../../assets/Prd-Quote-Img-2.svg'
import truck from '../../assets/truck.svg'
import ArrowCircle from '../../assets/ArrowCircle.svg'
import { GiH2O } from 'react-icons/gi'


function Quote() {
    const products = [
        {
            id: 1,
            name: "Pine, Spruce Wood",
            badge: "LOREM IPSUM",
            description:
                "Pine & Spruce Wood is widely used in packaging industry, high-value carpentry items such as furniture, window frames, panelling, floors, Wooden Houses and roofing.",
            bullets: [
                "We directly Import Pine and Spruce form European Countries, which is known for its KD and HT Value.",
                "Regular Cut sizes are imported which is used for packaging purpose and interiors, furnishing uses, etc.",
                "Regular Cut sizes are imported which is used for packaging purpose and interiors, furnishing uses, etc.",
            ],
            image: image1,
            buttonText: "Get a Quote",
        },
        {
            id: 2,
            name: "Teak Wood",
            badge: "LOREM IPSUM",
            description:
                "Pine & Spruce Wood is widely used in packaging industry, high-value carpentry items such as furniture, window frames, panelling, floors, Wooden Houses and roofing.",
            bullets: [
                "We directly Import Pine and Spruce form European Countries, which is known for its KD and HT Value.",
                "Regular Cut sizes are imported which is used for packaging purpose and interiors, furnishing uses, etc.",
                "Regular Cut sizes are imported which is used for packaging purpose and interiors, furnishing uses, etc.",
            ],
            image: image2,
            buttonText: "Get a Quote",
        }
    ];


    return (
        <div className="px-5 pt-5 mx-5">

            {products.map((product, index) => (
                <div key={index} className="row mb-5">
                    <div className="col-12 col-lg-5 position-relative">
                        <div className="d-flex flex-column gap-3">
                            
                            <h1 className="display-6 fw-bold" style={{ maxWidth: '350px' }}>{product.name}</h1>

                            <ul className="text-secondary d-flex flex-column gap-5 fs-6 pt-5 mt-5">
                                {product.bullets.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>

                            <div className="truck-circle-icon position-absolute" style={{ bottom: '30px', right: '50px' }}>
                                <img src={truck} alt="truck" size={30} />
                            </div>

                            <div className="d-flex  gap-2 mt-5">
                                <button className="btn btn-light border-1 border-black rounded-pill fs-6 px-4">Get a Quote</button>
                                <img src={ArrowCircle} alt="arrow" size={30} />

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7">
                        <div className="d-flex flex-column align-items-start gap-3">
                            <span className="badge bg-brown rounded-4 ms-0 mt-5 mb-0 py-1 px-2">{product.badge}</span>
                            <p className="text-secondary fs-6">{product.description}</p>
                            <img src={product.image} className="img-fluid mt-3" alt={product.id} />
                        </div>
                    </div>

                </div>
            ))}
<div className='d-flex align-items-center justify-content-center'>
            <button className='bg-brown rounded-5 px-5 py-1 fs-4 border text-white fw-semibold '>View All</button>
        </div>
        </div>


    )
}

export default Quote
