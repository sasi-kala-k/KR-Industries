import React from 'react'
import imageleft from '../../assets/Product-help-img-left.svg'
import imageright from '../../assets/Product-help-img-right.svg'
import phone from '../../assets/phone.svg'
import mail from '../../assets/mail.svg'




function ContactHelp() {
  return (
    <div className="px-5 mx-5">
      <div className="row g-0">
        <div className="col-12 col-lg-5">
            <img src={imageleft} alt="imageleft" className="img-fluid"/>
        </div>
        <div className="col-12 col-lg-7">
           <div className="product-help-bg px-5  py-5">
            <h1 className="display-5 fw-bold">How Can We Help?</h1>
            <p className="text-secondary py-2">If you need any help, please feel free to contact us..
</p>
<div className="d-flex flex-column gap-2">
<div className="d-flex align-items-center gap-2"><img src={phone} alt="phone" size={20}/><span className="text-brown fw-semibold fs-4">+91 9841666998</span></div>
<div  className="d-flex align-items-center gap-2"><img src={mail} alt="mail"  size={20}/><span className="text-brown fw-semibold fs-4 ">krindustriess@yahoo.co.in</span></div>
</div>

           </div>
        </div>
      </div>
    </div>
  )
}

export default ContactHelp
