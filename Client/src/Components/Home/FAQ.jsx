import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa"
import img from '../../assets/faq-img.svg'

const faqData = [
  { id: 1, question: "How to get consultation ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 2, question: "How to get consultation ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 3, question: "How to get consultation ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
   { id: 4, question: "How to get consultation ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
]

function FAQ() {
  const [openIds, setOpenIds] = useState([])

  return (
    <div className="gray-bg d-flex flex-wrap flex-lg-nowrap gap-5 cus-padding p-3 p-lg-5 align-items-stretch">
      <div className="col-lg-6 d-flex flex-column align-items-center align-items-lg-start gap-3">
        <p className="text-secondary">Question Answer</p>
        <h1 className="fw-bold display-5" style={{maxWidth:'400px'}}>Frequently Asked Question</h1>
          <img src={img} className="rounded-4 w-100 flex-grow-1" style={{ objectFit: 'cover' }} />
      </div>

      <div className="col-lg-6 d-flex flex-column gap-1 gap-lg-4">
<p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        {faqData.map((faq) => (
          <div key={faq.id} className="p-1 p-lg-3 mb-2 bg-white rounded-5">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: 'pointer' }}
              onClick={() =>
                setOpenIds(openIds.includes(faq.id)
                  ? openIds.filter(id => id !== faq.id)
                  : [...openIds, faq.id])
              }
            >
              <h5 className="fs-5 fw-bold">{faq.question}</h5>
              <FaChevronDown className="text-secondary fs-4 "  />
            </div>

            {openIds.includes(faq.id) && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ