import React,{useContext} from 'react'
import './Skills.css';
import { languages, vc, frontEnd_tech ,DBase} from './Skills_const';
import {context} from '../../App'
import Fade from 'react-reveal/Fade';
export default function Skills() {

    const colr=useContext(context);
    
    const heading_style={
        fontWeight: '800',
        fontSize: '30px',
        marginBottom: '30px',
        color:colr,
        lineHeight: '1.5'
    }
    return (
        <Fade top>
        <div id="page-3" className="Skills mt-5 mb-5">
            <h2 style={heading_style}>Skills</h2>
            <div>
                <h5>Languages : </h5>
                {languages}
                <h5>Version controlling tools :</h5>
                {vc}
                <h5>FrontEnd libraries :</h5>
                {frontEnd_tech}
                <h5>Database :</h5>
                {DBase}
            </div>
        </div>
        </Fade>
    )
}