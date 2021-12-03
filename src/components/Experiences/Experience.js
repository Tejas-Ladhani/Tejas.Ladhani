import React, { useContext } from 'react'
import { context } from '../../App'

function Experience() {
    const colr = useContext(context)
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
    const btn_style = {
        textDecoration: 'none',
        borderRadius: '100px !important',
        color: '#fff',
        boxShadow: '3px 3px 6px #b8b8b8',
        backgroundColor: colr
    }
    // 
    let id = 0
    const exp = [{
        id: id++,
        img_src: 'assets/icons/skills-icon/others/GDSC.png',
        date: 'Aug 2021 - Present',
        heading: 'Web Development Team Member',
        description: '',
        institute: 'Google Developer Students Club, CHARUSAT',
        href: 'https://www.charusat.ac.in/cspit/it/',
        isProjectAvailable: false,
    }, {
        id: id++,
        img_src: 'assets/icons/skills-icon/others/web_dev.png',
        date: 'Jun - Jul 2021',
        heading: 'React Dev Intern',
        description: 'Development intern and maintainer for Distribution management system project, a PERN (PostgreSQL, Express, ReactJS, Node) stack project, the goal of this application is to create a multi-tenant system in which a distribution company can track a range of activities on daily basis.',
        institute: 'MSquare Technologies, Surat',
        href: 'https://www.charusat.ac.in/cspit/it/',
        isProjectAvailable: false,
    }, {
        id: id++,
        img_src: 'assets/icons/skills-icon/others/web_dev.png',
        date: 'Dec 2020 - Jul 2021',
        heading: 'Web Developer',
        description: 'Member of web development team of IT department, CSPIT, CHARUSAT. Was responsible for developing and re-designing website.',
        institute: 'KDKPIT,CHARUSAT',
        href: 'https://www.charusat.ac.in/cspit/it/',
        isProjectAvailable: true,
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
                    {item.isProjectAvailable ?
                        <p><a target="_blank" rel="noopener noreferrer" href={item.href} className="px-3  py-2 butn" style={btn_style}>View Project</a></p>
                        :
                        <p></p>
                    }
                </div>
            </div>
        )
    })
    return (
        <>
            <div id="page-e"></div>
            <div className="Experience mb-4 mt-5 pt-4">
                <div className="blob1 d-none d-md-block d-lg-block" style={{
                    opacity: '0.2',
                    position: 'absolute',
                    height: '350px',
                    zIndex: '-1',
                    top: '380px',
                    left: '-70px'
                }}>
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="110%" id="blobSvg" >
                        <path id="blob" d="M404,304.5Q337,359,270,407Q203,455,140,394Q77,333,110.5,266Q144,199,179,145Q214,91,274,117.5Q334,144,402.5,197Q471,250,404,304.5Z" fill="#fdcb6e"></path>
                    </svg>
                </div>
                <h2 style={heading_style}>Experience</h2>
                {experience}
                <div className="blob1 d-none d-md-block d-lg-block" style={{
                    opacity: '0.2',
                    position: 'absolute',
                    height: '350px',
                    zIndex: '-1',
                    top: '720px',
                    right: '-350px'
                }}>
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="110%" id="blobSvg" >
                        <path id="blob" d="M442,301Q409,352,359,365.5Q309,379,267.5,399.5Q226,420,188,392.5Q150,365,92.5,339Q35,313,24.5,247Q14,181,66.5,139.5Q119,98,172.5,91Q226,84,260,119Q294,154,374,136.5Q454,119,464.5,184.5Q475,250,442,301Z" fill="#fdcb6e"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Experience
