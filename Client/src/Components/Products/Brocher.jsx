import React from 'react'
import brocher from '../../assets/brocher.svg'
import lefthalfImage from '../../assets/Ellipse-brocher.svg'

function Brocher() {
  return (
    <div className="bg-brown rounded-4 shadow position-relative">
       <img src={lefthalfImage} alt="image" className="img-fluid rounded-4"/>
       <div className="row position-absolute px-5" >
        <div className="col-5" style={{transform:'translateX(-50px) translateY(-300px)'}}>
  <img src={brocher} alt="image" size={150}/>
        </div>
<div className="col-7 d-flex flex-column align-items-center text-white py-2  gap-3" style={{transform:'translateY(-280px)'}}>
<h1 className="display-5 fw-bold">Download our broacher</h1>
<p className="text-center" style={{maxWidth:'500px'}}>At vestibulum pharetra leo nullam quis nibh pellentesque vestibulum. In massa, eu sed nunc massa ridiculus lacus quis purus commodo </p>
<button className="cus-btn-blackFill">DOWNLOAD NOW</button>
        </div>
       </div>
    </div>
  )
}

export default Brocher
