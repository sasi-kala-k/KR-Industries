import React from 'react'
import image from '../../assets/mission-img.svg'

function Mission() {
    return (
        <div className="row gy-4 gy-lg-0 gx-5 cus-padding">
            <div className="col-12 col-lg-6">
                <img className="img-fluid rounded-4" src={image} alt="image" />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column gap-3 py-lg-5">
                <small className="text-secondary">Stay Tuned</small>
                <h1 className="display-5 fw-bold">Serving Our Clients for more than 39 Years</h1>
                <p className="text-secondary">To delight our customers by ensuring Quality, Cost and Delivery on Supply to entire satisfaction of esteemed customers.
                    <ul>
                        <li>Customer Satisfaction</li>
                        <li>Incremental Improvements for better pricing</li>
                        <li>On time delivery</li>
                        <li>Good Performance</li>
                        <li>High Quality</li>
                    </ul>
                </p>
            </div>
        </div>
    )
}

export default Mission