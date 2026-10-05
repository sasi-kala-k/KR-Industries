import React from 'react'
import icon1 from '../../assets/verification 1.svg';
import icon2 from '../../assets/Icon.svg';
import icon3 from '../../assets/team-management 1.svg';
import icon4 from '../../assets/award-symbol 1.svg';
import './Home.css'

function StatsSection() {
    const statsData = [
        {
            id: 1,
            icon: icon1,
            label: "Projects",
            count: 1850,
            suffix: "+",
            description: "In 38 countries, we work as one global team to help clients"
        },
        {
            id: 2,
            icon: icon2,
            label: "Clients",
            count: 750,
            suffix: "+",
            description: "We have worked with 89% of the Global 500 companies."
        },
        {
            id: 3,
            icon: icon3,
            label: "Workers",
            count: 265,
            suffix: "+",
            description: "We started with a ebellious mindset and set ourselves the challange"
        },
        {
            id: 4,
            icon: icon4,
            label: "Awards",
            count: 10,
            suffix: "",
            description: "We started with a ebellious mindset and set ourselves the challange"
        }
    ]


    return (
        <div className="px-3 px-lg-5 mx-3 mx-lg-5 py-3 py-lg-0" >
            <div className="row">
                {statsData.map((stats, index) => (
                    <div key={index} className="col-12 col-lg-3">
                        <div className="py-3">
                            {/* <div className="d-inline-block align-items-center pink-label-bg gap-2 w-100">
                                <img src={stats.icon} alt={stats.id} height={15} />
                                <span className="text-warning">{stats.label}</span>
                            </div> */}
                            <span className="pink-label-bg d-inline-flex align-items-center gap-1 px-1 py-1 rounded mb-3 fw-semibold small text-warning">
                                <img src={stats.icon} alt={stats.label} width={16} height={16} />
                                {stats.label}
                            </span>

                            <div className={`d-flex flex-column gap-3 ${index !== 3 ? 'divider' : ''}`} px-3>
                                <h1 className="display-5 fw-bolder">{stats.count}<sup className="">{stats.suffix}</sup></h1>
                                <p className="text-gray ">{stats.description}</p>
                            </div>


                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default StatsSection
