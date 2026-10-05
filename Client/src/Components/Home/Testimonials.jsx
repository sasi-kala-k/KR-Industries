import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import person1 from '../../assets/testimonialImage1.svg'
import person2 from '../../assets/testimonialImage2.svg'
import person3 from '../../assets/testimonialImage3.svg'

function Testimonials() {
    const testimonialsData = [
        {
            id: 1,
            rating: 4.5,
            quote: "We've partnered with KR Industries for several bulk wooden supply projects. Their materials are always high-grade, well-finished, and delivered on time.",
            image: person1,
            name: "Mr. John Doe",
            role: "CLIENTS"
        },
        {
            id: 2,
            rating: 5,
            quote: "KR Industries delivered top-quality wooden products that met all our manufacturing needs. Their consistency, precision, and commitment to durability set them apart.",
            image: person2,
            name: "Mr. John Doe",
            role: "CLIENTS"
        },
        {
            id: 3,
            rating: 5,
            quote: "The craftsmanship and industrial standards at KR Industries are exceptional. From raw materials to final output, they maintain strict quality control and always exceed.",
            image: person3,
            name: "Mr. John Doe",
            role: "CLIENTS"
        }
    ]
    const renderStars = (rating) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalf = rating % 1 !== 0

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} className="text-warning" />)
        }
        if (hasHalf) {
            stars.push(<FaStarHalfAlt key="half" className="text-warning" />)
        }
        return stars
    }
    return (

        <div className=" py-5 d-flex flex-column align-items-center text-center">
            <div className="d-flex flex-column gap-3">
            <small className="text-secondary">Testimonials</small>
            <h1 className="text-center display-5 fw-bold mb-5 px-3">
                Our Clients Feedback & Best Review For Us
            </h1>
            </div>

            <div className="row  justify-content-center g-5 w-100" style={{ maxWidth: '1200px' }}>
                {testimonialsData.map((item) => (
                    <div key={item.id} className="col-12 col-lg-4 " style={{maxWidth:'350px'}}>
                        <div className="d-flex justify-content-center gap-1 mb-3">
                            {renderStars(item.rating)}
                         </div>

                        <p className="text-secondary  mb-4">" {item.quote} "</p>

                        <img
                            src={item.image}
                            alt={item.name}
                            width={70}
                            height={70}
                            className="rounded-4 mb-3"
                            style={{ objectFit: 'cover' }}
                        />

                        <h5 className="fw-bold mb-1">{item.name}</h5>
                        <p className="text-secondary small text-uppercase">{item.role}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Testimonials
