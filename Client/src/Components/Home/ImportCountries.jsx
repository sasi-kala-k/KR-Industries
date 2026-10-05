import React from 'react'
import flag1 from '../../assets/flag1.svg'
import flag2 from '../../assets/flag2.svg'
import flag3 from '../../assets/flag3.svg'
import flag4 from '../../assets/flag4.svg'
import flag5 from '../../assets/flag5.svg'


function ImportCountries() {
    const countriesData = [
  {
    id: 1,
    flag: flag1,
    name: "UKRAINE"
  },
  {
    id: 2,
    flag: flag2,
    name: "RUSSIA"
  },
  {
    id: 3,
    flag: flag3,
    name: "latvia"
  },
  {
    id: 4,
    flag: flag4,
    name: "LITHUANIA"
  },
  {
    id: 5,
    flag: flag5,
    name: "CHINA"
  }
]

  return (
    <div className="d-flex flex-column align-items-center gap-5 p-3 p-lg-5">
      <h1 className="display-5 fw-bold  text-center" style={{maxWidth:'600px'}}>We Import from Different Countries</h1>
          <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-5">
      {countriesData.map((country) => (
        <div key={country.id} className="d-flex flex-column align-items-center gap-2">
          <img src={country.flag} alt={country.name} className="rounded-circle" width={158} height={158} />
          <span className="text-secondary small">{country.name}</span>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ImportCountries
