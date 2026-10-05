import React from 'react'
import image from '../../assets/guarantee-img.svg'

function Guarantee() {
    const Data = [
  {
    id: 1,
    title: "Moneyback Guarantee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 2,
    title: "Moneyback Guarantee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 3,
    title: "Moneyback Guarantee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 4,
    title: "Moneyback Guarantee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
]
    return (
        <div className="cus-padding">
            <div className="d-flex flex-column align-items-center gap-4 pb-1  " >
                <small className="text-secondary">
                    Why Choose Us
                </small>
                <h1 className="display-6 fw-bold text-center mb-5" style={{maxWidth:'600px'}}>Don’t Worry We Are Give Best Service With Guarantee</h1>
            </div>
            <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-5">
                <img src={image} alt="image" height={320}/>
                <div className="row g-4">
      {Data.map((item) => (
        <div key={item.id} className="col-12 col-md-6">
          <div className="bg-white rounded-5 shadow p-4">
            <h5 className="fw-bold mb-2">{item.title}</h5>
            <p className="text-secondary mb-0">{item.description}</p>
          </div>
        </div>
      ))}
    </div>

                </div>
            </div>
        
    )
}

export default Guarantee
