import React,{useContext} from 'react'
import {context} from '../../App'

function Experience() {
    const colr = useContext(context)
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
    const btn_style={
        textDecoration: 'none',
        borderRadius: '100px !important',
        color: '#fff',
        boxShadow: '3px 3px 6px #b8b8b8',
        backgroundColor:colr
    }
    // 
const exp=[{
    id:0,
    img_src:'assets/icons/skills-icon/others/web_dev.png',
    date:'Dec 2020 - Present',
    heading:'Web Devloper',
    description:'Responsible for developing and re-designed website for IT department of CSPIT,CHARUSAT ',
    insitute:'KDKPIT,CHARUSAT',
}]
    const experience = exp.map((item) => {
        return (
            <div key={item.id} className="resume-wrap  d-flex mb-4 mt-1">
                <img src={item.img_src} width="40" height="40" />
                <div className="text pl-3">
                    <span style={date_style}>{item.date}</span>
                    <h2>{item.heading}</h2>
                    <span className="position">{item.insitute}</span>
                    <p className="dis"> {item.description}</p>
                    <p ><a href={item.link} className="px-3  py-2 butn" style={btn_style}>View Project</a></p>
                </div>
            </div>
        )
    })
    return (

        <div id="page-e" className="Experience mb-4">
            <h2 style={heading_style}>Experience</h2>
            {experience}
        </div>

    )
}

export default Experience
