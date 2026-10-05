import React from 'react'
import ft_logo_img from '../../assets/footer-logo.svg';
import ft_logo_name from '../../assets/footer-logo-font.svg';
import phone from '../../assets/phone-square.svg';
import envelope from '../../assets/envelope.svg';
import arrow from '../../assets/caret-right.svg';
import fb from '../../assets/facebook.svg';
import twt from '../../assets/twitter.svg';
import insta from '../../assets/instagram.svg';
import p from '../../assets/pinterest.svg';





function Footer() {
    return (
        <div className="bg-footer text-white footer cus-footer">
            <div className="row g-4 g-lg-0">
                <div className="col-12 col-lg-3">

                    <div className="d-flex gap-1 mb-3 ">
                        <img src={ft_logo_img} alt="img" height={40} />
                        <img src={ft_logo_name} alt="name" height={40} />
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <div className="d-flex  align-items-center">
                            <img src={envelope} alt="img" height={14} /><a className="ms-2 " href="#">krindustriess@yahoo.co.in</a></div>
                        <div className="d-flex align-items-center">
                            <img src={phone} alt="img" height={18} /><a className="ms-2 " href="#">9841366998 / 9841230130</a>
                        </div>
                    </div>
                    <div className="d-flex flex-column mt-3">
                        <h6 className="mb-3">KR Industries</h6>
                        <p>#310,M.T.H.Road,Villivakkam</p>
                          <p>  Chennai – 600049.</p>

                    </div>
                </div>
                <div className="col-12 col-lg-2">
                    <h4>Quick Links</h4>
                    <div className="d-flex flex-column gap-3">

                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">Home</a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/about">About Us</a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/service">Our Service</a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/contact">Contact Us</a></div>

                    </div>
                </div>

                <div className="col-12 col-lg-2">
                    <h4>Products</h4>
                    <div className="d-flex flex-column gap-3">

                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">Wooden boxes</a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">Wooden Crates</a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">Wooden Pallets</a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">Plywood Boxes</a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">Wooden Collar </a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">Plywood Pallets</a></div>

                    </div>
                </div>

                <div className="col-12 col-lg-3">
                    <h4>Trading</h4>
                    <div className="d-flex flex-column gap-3">

                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">Pine & Spruce Wood</a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">Red Wood Pine Lumbers</a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">Swedish Pine Spruce</a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">Pine Wood Wall Panel</a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">E1 Glue Plywood </a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">Birchyply</a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">OSB (orien standard board)</a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">Rubber Wood Finger Joint</a></div>
                        <div><img src={arrow} alt="arrow" height={13} /><a className="ms-2 " href="/">Pine Finger Joint</a></div>

                    </div>
                </div>

                <div className="col-12 col-lg-2">
                    <h4>Follow Us</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="d-flex gap-3">
                        <a href="#"><img src={fb} alt="fb" height={20} /></a>
                        <a  href="#"><img src={twt} alt="twt" height={20} /></a>
                        <a  href="#"><img src={insta} alt="insta" height={20} /></a>
                        <a  href="#"><img src={p} alt="p" height={20} /></a>


                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="d-flex align-items-center justify-content-center py-3 mb-1">
                <small className='fw-semibold'>Allright Reserved kr industries@2025</small>
            </div>
        </div>
    )
}

export default Footer
