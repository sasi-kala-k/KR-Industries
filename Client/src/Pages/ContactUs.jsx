import React from 'react'
import '../Components/ContactUs/ContactUs.css'
import ContactForm from '../Components/ContactUs/ContactForm'
import Location from '../Components/ContactUs/Location'


function ContactUs() {
    return (
        <>
            <div className='bg-contactUs text-white d-flex flex-column align-items-center justify-content-center text-center gap-3 rounded-5 mx-5 px-5'>
                <h1 className="display-5 fw-bold" >Let’s talk about your <span className='text-brown'>project.</span></h1>
                <p className="fs-6" style={{ maxWidth: '650px' }}>We’ll create high-quality linkable content and build at least 40 high-authority link to each asset. Bring the way for you to grow your website & improve skills.</p>
            </div>
            <ContactForm />
            <Location />
        </>
    )
}

export default ContactUs
