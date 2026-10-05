import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6"
import image1 from '../../assets/house.svg'
import image2 from '../../assets/cog.svg'
import image3 from '../../assets/pen-ruler.svg'



function Services() {
    return (
        <div className="services-bg cus-padding  position-relative">
            <div className="d-flex flex-column flex-lg-row justify-content-between">
                <div>
                    <h1 className="text-white">We Do Best </h1>
                    <p className="text-light" style={{ maxwidth: '500px' }}>Our wooden manufacturing company helps to reach the toughest demands and needs of the market. Don’t worry we provide you the best solution to meet all your requirements.</p>
                </div>
                <div className="d-flex align-items-start align-items-lg-center justify-content-center"><button className="cus-btn-brownFill">DISCOVER ALL <FaArrowRightLong className="ms-2" /></button></div>

            </div>
            <div className="cards-row position-absolute bottom-0 start-0 d-flex justify-content-between mx-5 px-5">
                <div className="white-card rounded-5 d-flex flex-column gap-3 align-items-start p-5">
                    <img src={image1} alt="image1" height={42} />
                    <h3 className="text-gray mb-0">Nailing Inspection</h3>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                </div>
                <div className="white-card rounded-5  d-flex flex-column gap-3 align-items-start p-5">
                    <img src={image2} alt="image1" height={42} />
                    <h3 className="text-gray mb-0">Quality Inspection</h3>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                </div>
                <div className="white-card rounded-5 d-flex flex-column gap-3 align-items-start p-5">
                    <img src={image3} alt="image1" height={42} />
                    <h3 className="text-gray mb-0">Damaged Wood Rejected</h3>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                </div>

            </div>
        </div>
    )
}

export default Services
