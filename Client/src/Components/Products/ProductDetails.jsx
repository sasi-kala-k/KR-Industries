import React from 'react'
import image1 from '../../assets/prod-detail-image-1.svg'
import image2 from '../../assets/prod-detail-image-2.svg'
import image3 from '../../assets/prod-detail-image-3.svg'
import image4 from '../../assets/prod-detail-image-4.svg'
import image5 from '../../assets/prod-detail-image-5.svg'
import image6 from '../../assets/prod-detail-image-6.svg'
import Overlayimage1 from '../../assets/prod-detail-overlay-image-1.svg'
import Overlayimage2 from '../../assets/prod-detail-overlay-image-2.svg'
import Overlayimage3 from '../../assets/prod-detail-overlay-image-3.svg'
import Overlayimage4 from '../../assets/prod-detail-overlay-image-4.svg'
import Overlayimage5 from '../../assets/prod-detail-overlay-image-5.svg'
import Overlayimage6 from '../../assets/prod-detail-overlay-image-6.svg'



function ProductDetails() {
    const Data = [
        {
            id: 1,
            image: image1,
            overlayImage: Overlayimage1,
            title: "Wooden Boxes",
            desc: "Are often used for heavy duty packaging when high strength is needed for heavy and difficult loads long term warehousing may be needed"

        },
        {
            id: 2,
            image: image2,
            overlayImage: Overlayimage2,
            title: "Wooden Boxes",
            desc: "Are often used for heavy duty packaging when high strength is needed for heavy and difficult loads long term warehousing may be needed"

        },
        {
            id: 3,
            image: image3,
            overlayImage: Overlayimage3,
            title: "Wooden Boxes",
            desc: "Are often used for heavy duty packaging when high strength is needed for heavy and difficult loads long term warehousing may be needed"

        },
        {
            id: 4,
            image: image4,
            overlayImage: Overlayimage4,
            title: "Wooden Boxes",
            desc: "Are often used for heavy duty packaging when high strength is needed for heavy and difficult loads long term warehousing may be needed"

        },
        {
            id: 5,
            image: image5,
            overlayImage: Overlayimage5,
            title: "Wooden Boxes",
            desc: "Are often used for heavy duty packaging when high strength is needed for heavy and difficult loads long term warehousing may be needed"

        },
        {
            id: 6,
            image: image6,
            overlayImage: Overlayimage6,
            title: "Wooden Boxes",
            desc: "Are often used for heavy duty packaging when high strength is needed for heavy and difficult loads long term warehousing may be needed"

        },

    ]
    return (
        <div className="row g-4 cus-padding">
            {Data.map((data, index) => (
                <div key={index} className="col-12 col-lg-4">
                    <div className="product-card position-relative rounded-4" style={{ backgroundImage: `url(${data.image})`, height: '260px' }}>

                        <div className="position-absolute default-overlay text-white bottom-0 start-0 w-100 px-3">

                            <h4>{data.title}</h4>
                            <p>{data.desc}</p>
                        </div>
                        <div className="  hover-overlay text-white bottom-0 start-0 w-100 px-3 py-3 position-absolute rounded-4  " style={{ backgroundImage: `url(${data.overlayImage})`, height: '260px' }}>
                            <h3 className="text-center">{data.title}</h3>
                            <p className="text-center">Are often used for heavy duty packaging when high strength is needed for heavy and difficult loads long term warehousing may be needed large size is required</p>

                            <div className="d-flex flex-column align-items-start ">
                                <ul>
                                    <li> We manufacture Wooden Boxes which can be designed according to customers requirement.</li>
                                    <li>Wooden Boxes used for both local and Export purpose are manufactured in our Unit with the Best Quality</li>
                                </ul>

                            </div>
                        </div>
                    </div>


                </div>
                    


    ))
}

        </div >
    )
}

export default ProductDetails
