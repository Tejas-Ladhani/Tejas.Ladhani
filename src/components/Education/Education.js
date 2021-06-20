import React ,{useContext} from 'react'
import './Education.css'
import {context} from '../../App'
import Fade from 'react-reveal/Fade';
export default function Education() {
    const colr=useContext(context);
    //console.log(colr)
    const heading_style={
        fontWeight: '800',
        fontSize: '30px',
        marginBottom: '30px',
        color:colr,
        lineHeight: '1.5'
    }
    const date_style={
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
    {
        id: 2,
        img_src: "assets/icons/eduIcons/secondary school.png",
        date: "2016-2017",
        heading: "Secondary School Education",
        institute: "kendriya vidyalaya"
    }]

    const education = edu.map((item) => {
        return (
          
            <div key={item.id} className="resume-wrap  d-flex mb-4 mt-1">
                  <Fade right>
                <img src={item.img_src} width="40" height="40" alt={item.heading}/>
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

        <div id="page-1" className="Education">
            <h2 style={heading_style}>Education Journey</h2>
            {education}
        </div>
    )
}

