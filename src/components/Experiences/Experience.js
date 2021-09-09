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
    let id = 0
const exp=[{
    id:id++,
    img_src:'assets/icons/skills-icon/others/GDSC.png',
    date:'Aug 2021 - Present',
    heading:'Web Development Team Member',
    description:'',
    institute:'Google Developer Students Club, CHARUSAT',
    href:'https://www.charusat.ac.in/cspit/it/',
    isProjectAvailable:false,
},{
    id:id++,
    img_src:'assets/icons/skills-icon/others/web_dev.png',
    date:'Jun - Jul 2021',
    heading:'React Dev Intern',
    description:'React developer & project maintainer for the "Distribution management system" project, a PERN Stack (Postgres, Express, React, & Node.js) application.',
    institute:'MSquare Technologies, Surat',
    href:'https://www.charusat.ac.in/cspit/it/',
    isProjectAvailable:false,
},{
    id:id++,
    img_src:'assets/icons/skills-icon/others/web_dev.png',
    date:'Dec 2020 - Jul 2021',
    heading:'Web Developer',
    description:'Member of web development team of IT department, CSPIT, CHARUSAT. Was responsible for developing and re-designing website.',
    institute:'KDKPIT,CHARUSAT',
    href:'https://www.charusat.ac.in/cspit/it/',
    isProjectAvailable:true,
}]
    const experience = exp.map((item) => {
        return (
            <div key={item.id} className="resume-wrap  d-flex mb-4 mt-1">
                <img src={item.img_src} width="40" height="40" alt={item.heading} />
                <div className="text pl-3">
                    <span style={date_style}>{item.date}</span>
                    <h3>{item.heading}</h3>
                    <span className="position">{item.institute}</span>
                    <p className="dis"> {item.description}</p>
                    {item.isProjectAvailable?
                        <p><a target="_blank" rel="noopener noreferrer" href={item.href} className="px-3  py-2 butn" style={btn_style}>View Project</a></p>
                        :
                        <p></p>
                    }
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
