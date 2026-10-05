import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import image1 from '../../assets/product1.svg'
import image2 from '../../assets/product2.svg'
import image3 from '../../assets/product3.svg'
import image4 from '../../assets/product4.svg'
import image5 from '../../assets/product5.svg'
import image6 from '../../assets/product6.svg'
import image7 from '../../assets/product7.svg'
import image8 from '../../assets/product8.svg'
import image9 from '../../assets/product9.svg'
import leftArrow from '../../assets/leftArrow.svg'
import rightArrow from '../../assets/rightArrow.svg'


const productsData = [
  { id: 1, image: image1, name: "Wooden Boxes" },
  { id: 2, image: image2, name: "Wooden Crates" },
  { id: 3, image: image3, name: "Wooden Pallets" },
  { id: 4, image: image4, name: "Wooden Collar" },
  { id: 5, image: image5, name: "Pine & Spruce Wood" },
  { id: 6, image: image6, name: "Red Wood Pine Lumbers" },
  { id: 7, image: image7, name: "Swedish Pine Spruce" },
  { id: 8, image: image8, name: "Pine Wood Wall Panel" },
  { id: 9, image: image9, name: "E1 Glue Plywood" },
  
]

function OurProducts() {
  const itemsPerPage = 4
  const [startIndex, setStartIndex] = useState(0)

  const handleNext = () => {
    if (startIndex + itemsPerPage < productsData.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  const visibleProducts = productsData.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="cus-padding">
      <div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-center mb-4">
        <h1 className="fw-bold text-center flex-grow-1">Our Products</h1>
        <div className="d-flex gap-2">
          <button
            className="btn btn-outline-secondary border-2 rounded-circle cus-arrow-btn"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
          
          <img src={leftArrow} height={15} alt="leftarrow"/>
           
          </button>
          <button
            className="btn btn-outline-secondary border-2 rounded-circle cus-arrow-btn"
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= productsData.length}
          >
      <img src={rightArrow} height={15} alt="rightarrow"/>
          </button>
        </div>
      </div>

      <div className="row g-4">
        {visibleProducts.map((product) => (
          <div key={product.id} className="col-12 col-lg-3">
            <img src={product.image} alt={product.name} className="rounded-4 w-100" style={{ height: '220px', objectFit: 'cover' }} />
            <p className="text-center mt-2 mb-0">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurProducts