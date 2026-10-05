import React from 'react'
import img1 from '../assets/collage1.svg'
import img2 from '../assets/collage2.svg'
import img3 from '../assets/collage3.svg'
import img4 from '../assets/collage4.svg'
import img5 from '../assets/collage5.svg'
import img6 from '../assets/collage6.svg'
import img7 from '../assets/collage7.svg'
import truck from '../assets/truck.svg'
import '../Components/Products/Products.css'
import ContactHelp from "../Components/Products/ContactHelp"
import Brocher from "../Components/Products/Brocher"
import FAQ from "../Components/Home/FAQ"
import ImportCountries from "../Components/Home/ImportCountries"
import ProductDetails from "../Components/Products/ProductDetails"

function Products() {
    return (
        <>
            <div className="d-flex flex-column align-items-center py-5 position-relative my-4">
                <h1 className="fw-bold display-5 mb-5 pb-5 text-center " style={{ maxWidth: '800px' }}>Where Fashion Meets Everyday Function</h1>

                <div className="d-flex justify-content-center position-relative py-5 my-3" style={{ height: '300px' }}>
                    <img src={img1} alt="img1" className="collage-img" style={{ transform: 'rotate(-1deg)', zIndex: 1 }} />
                    <img src={img2} alt="img2" className="collage-img" style={{ transform: 'rotate(-1deg) translateY(-70px) translateX(-8px)', zIndex: 2 }} />
                    <img src={img3} alt="img3" className="collage-img" style={{ transform: 'rotate(-1deg) translateY(-50px) translateX(-15px)', zIndex: 3 }} />
                    <img src={img4} alt="img4" className="collage-img" style={{ transform: 'rotate(3deg) translateY(-72px) translateX(-15px)', zIndex: 4 }} />
                    <img src={img5} alt="img5" className="collage-img" style={{ transform: 'rotate(-2deg) translateY(-50px) translateX(-20px)', zIndex: 5 }} />
                    <img src={img6} alt="img6" className="collage-img" style={{ transform: 'rotate(3deg) translateY(-15px) translateX(-30px)', zIndex: 6 }} />
                    <img src={img7} alt="img7" className="collage-img" style={{ transform: 'rotate(1deg) translateY(-90px) translateX(-35px)', zIndex: 7 }} />


                    <div className="collage-circle-icon" style={{ top: '0px', end: '0px', transform: 'translateY(-140px) translateX(280px)' }}>
                        <img src={truck} alt="truck" size={20} />
                    </div>
                    <div className="collage-circle-icon" style={{ bottom: '-120px', left: '-40px' }}>
                        <img src={truck} alt="truck" size={30} />
                    </div>
                </div>

                <p className="text-secondary mt-4 mx-auto text-center" style={{ maxWidth: '650px' }}>
                    Discover our curated collection of high-quality, fashionable glasses for every need — from prescription to blue light and sunglasses. Perfect vision meets perfect style.
                </p>

                <button className="cus-btn-brownFill mt-3">EXPLORE NOW</button>
            </div>
            <ProductDetails />
            <ContactHelp />
            <FAQ />
            <Brocher />
            <ImportCountries />
        </>
    )
}

export default Products