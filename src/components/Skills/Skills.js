import React, { useContext } from 'react'
import './Skills.css';
import { languages, vc, frontEnd_tech, DBase, web_dev, cloud } from './Skills_const';
import { context } from '../../App'
import Fade from 'react-reveal/Fade';
export default function Skills() {

    const colr = useContext(context);

    const heading_style = {
        fontWeight: '800',
        fontSize: '30px',
        marginBottom: '30px',
        color: colr,
        lineHeight: '1.5'
    }
    return (
        <>
            <div id="page-3" className="Skills mt-5 mb-5">
                <h2 style={heading_style}>Skills</h2>
                <div>
                    <Fade top>
                        <h5>Programming Languages : </h5>
                        {languages}
                        <h5>Web Development tech :</h5>
                        {web_dev}
                        <h5>Cloud :</h5>
                        {cloud}
                        <h5>Database :</h5>
                        {DBase}
                        <h5>Version controlling tools :</h5>
                        {vc}
                    </Fade>
                </div>
            </div>
            <div className="blob1blob1 d-none d-md-block d-sm-none d-lg-blockblob1 d-none d-md-block d-sm-none d-lg-block" style={{
                opacity: '0.2',
                position: 'absolute',
                height: '650px',
                top: '2750px',
                zIndex: '-1',
                right: '-26em'
            }}>
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="110%" id="blobSvg" >
                    <path id="blob" d="M397,295.5Q407,341,381.5,387Q356,433,303,397.5Q250,362,189,411.5Q128,461,97.5,408Q67,355,35,302.5Q3,250,52.5,207.5Q102,165,129,125.5Q156,86,203,72.5Q250,59,296.5,74Q343,89,354.5,136Q366,183,376.5,216.5Q387,250,397,295.5Z" fill="#fdcb6e"></path><path id="blob" d="M343,315Q292,380,179,382Q66,384,110.5,282.5Q155,181,225.5,145Q296,109,345,179.5Q394,250,343,315Z" fill="#fdcb6e"></path>
                </svg>
            </div>
        </>
    )
}