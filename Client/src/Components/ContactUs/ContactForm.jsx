import React, { useState } from 'react'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        notes: '',
    })

    const [status, setStatus] = useState({ loading: false, success: null, error: null })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus({ loading: true, success: null, error: null })

        try {
            const res = await fetch('http://localhost:5000/api/contact/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    mobile: formData.mobile,     // map mobile -> phone
                    notes: formData.notes     // map notes -> message
                })
            })

            const data = await res.json()

            if (res.ok) {
                setStatus({ loading: false, success: true, error: null })
                setFormData({ name: '', mobile: '', email: '', notes: '' })
            } else {
                setStatus({ loading: false, success: false, error: data.message || 'Something went wrong' })
            }
        } catch (err) {
            setStatus({ loading: false, success: false, error: 'Failed to connect to server' })
        }
    }

    return (
        <div className='cus-padding'>
            <div className='row'>
                <div className='col-12 col-lg-8'>
                    <div className=''>
                        <h1 className='display-5 fw-bold mb-4 text-gray'>Contact us</h1>

                        <form onSubmit={handleSubmit}>
                            <div className='row g-4'>

                                <div className='col-12 col-md-6'>
                                    <label htmlFor='name' className='form-label fw-semibold text-secondary'>Name</label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        className='form-control Field-bg border-0 '
                                        placeholder='Your Name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='col-12 col-md-6'>
                                    <label htmlFor='mobile' className='form-label fw-semibold text-secondary'>Mobile Number</label>
                                    <input
                                        type='tel'
                                        id='mobile'
                                        name='mobile'
                                        className='form-control Field-bg border-0 '
                                        placeholder='+91'
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='col-12'>
                                    <label htmlFor='email' className='form-label fw-semibold text-secondary'>Email</label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        className='form-control Field-bg border-0 '
                                        placeholder='Email address'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='col-12'>
                                    <textarea
                                        name='notes'
                                        className='form-control Field-bg border-0 '
                                        rows={8}
                                        placeholder='Enter a notes'
                                        value={formData.notes}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='col-12'>
                                    <button
                                        type='submit'
                                        className='btn cus-btn-brownFill rounded-pill px-5 py-3 fw-semibold'
                                        disabled={status.loading}
                                    >
                                        {status.loading ? 'SENDING...' : 'SEND A REQUEST'}
                                    </button>

                                    {status.success && <p className='text-brown fw-bold mt-3 mb-0'>Message sent successfully! We'll get back to you soon.</p>}
                                    {status.error && <p className='text-danger mt-3 mb-0'>{status.error}</p>}
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-12 col-lg-4 '>
                    <div className='d-flex flex-column gap-1 mt-5 pt-5'>
                        <span className='text-brown fw-semibold'>Office Address</span>
                        <p>#310,M.T.H.Road,Villivakkam, Chennai – 600049.</p>
                        <span className='text-brown fw-semibold'>Factory Address</span>
                        <p>#29,Kosappur Village, Madhavaram,Chennai-600060.</p>

                        <span className='text-brown fw-semibold'>Email</span>
                        <p>krindustriess@yahoo.co.in</p>
                        <span className='text-brown fw-semibold'>Phone</span>
                        <p>9841666998 / 9841230130</p>
                        <span className='text-brown fw-semibold'>Partner : Shri B Ravi Balasubramaniam</span>
                        <p>+91 98412 75724</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm