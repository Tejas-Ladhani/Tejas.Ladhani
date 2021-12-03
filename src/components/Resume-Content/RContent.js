import React from 'react'
import Education from '../Education/Education'
import Experience from '../Experiences/Experience';
import Project from '../Projects/Project'
import Skills from '../Skills/Skills';
import './RContent.css';
export default function RContent() {


    return (

        <div id="Resume" className="col-md-9 ">
           
            <Education />
            <Experience />
            <Project />
            <Skills />
        </div>
    )
}

