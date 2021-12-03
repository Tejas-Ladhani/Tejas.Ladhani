import React, { useContext } from 'react'
import './Education.css'
import { context } from '../../App'
import Fade from 'react-reveal/Fade';
export default function Education() {
    const colr = useContext(context);
    //console.log(colr)
    const heading_style = {
        fontWeight: '800',
        fontSize: '30px',
        marginBottom: '30px',
        color: colr,
        lineHeight: '1.5'
    }
    const date_style = {
        fontWeight: '700',
        fontSize: '16px',
        color: colr
    }

    const edu = [{
        id: 0,
        img_src: "assets/icons/eduIcons/engineer.svg",
        date: "2019-Present",
        heading: "Bachelor of Technology in Information technology",
        institute: "Charotar University Of Science And Technology"
    },

    {
        id: 1,
        img_src: "assets/icons/eduIcons/highschool.svg",
        date: "2018-2019",
        heading: "Higher Secondary Education",
        institute: "kendriya vidyalaya"
    },
        // {
        //     id: 2,
        //     img_src: "assets/icons/eduIcons/secondary school.png",
        //     date: "2016-2017",
        //     heading: "Secondary School Education",
        //     institute: "kendriya vidyalaya"
        // }
    ]

    const education = edu.map((item) => {
        return (

            <div key={item.id} className="resume-wrap  d-flex mb-4 mt-1">
                <Fade right>
                    <img src={item.img_src} width="40" height="40" alt={item.heading} />
                    <div className="text pl-3">
                        <span style={date_style}>{item.date}</span>
                        <h2>{item.heading}</h2>
                        <span className="position">{item.institute}</span>

                    </div>
                </Fade>
            </div>

        )
    })

    return (
        <>
        <div id="page-1"></div>
            <div  className="Education mt-5 pt-4">
                <div className="blob1 d-none d-md-block d-lg-block" style={{
                    opacity: '0.2',
                    position: 'absolute',
                    height: '450px',
                    zIndex: '-1',
                    right: '-270px'
                }}>
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="110%" id="blobSvg" >
                        <path id="blob" d="M418,309Q368,368,309,387.5Q250,407,211,367.5Q172,328,156.5,289Q141,250,132.5,187Q124,124,187,110.5Q250,97,317,106.5Q384,116,426,183Q468,250,418,309Z" fill="#fdcb6e"></path>
                    </svg>
                </div>
                <h2 style={heading_style}>Education Journey</h2>
                {education}
            </div>
        </>
    )
}

