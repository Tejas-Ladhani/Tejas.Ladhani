import React,{useContext} from 'react';
import './Aboutme.css';
import {context} from '../../App'

export default function Aboutme() {
    const profilePath = "assets/images/photo.jpg";
    const color = useContext(context)
    
    const btn_style={
        borderRadius: '100px !important',
        color: '#fff',
        boxShadow: '3px 3px 6px #b8b8b8',
        backgroundColor:color
    }

    return (
        <div className="Aboutme" id="Aboutme">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-none d-sm-block px-5 pt-1">
                        <img className="img img-fluid pt-5" draggable="false" src={profilePath} alt="Tejas' Profile" />
                    </div>
                    <div className="col-md-6 col-12  pl-md-5 py-5">
                        <div className="row justify-content-start pb-3">
                            <div className="col-md-12 heading-section ">

                                <h2 className="mb-4">About Me</h2>
                                <h3>Let me introduce.</h3>
                                <p>I'm a Programmer, Developer &amp; Tech Enthusiat. Trying to turn my ideas into Reality.</p>
                                <h3 className="mb-4">Profile</h3>
                                <p>I am a sophomore, Pursuing B.Tech in Information Technology and a budding software engineer.</p>
                                <ul className="about-info mt-4 px-md-0 px-2">
                                    <li className="d-flex content"><span>Name:</span> <span>Tejas Ladhani</span></li>
                                    <li className="d-flex content"><span>Location:</span> <span> Gujarat, India. </span></li>
                                    <li className="d-flex content"><span>Email:</span> <span>contact.tejasladhani@gmail.com</span></li>
                                    <li className="d-flex content"><span>Phone: </span> <span>+(91)-92657-06142</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="counter-wrap d-flex mt-md-3">

                            <a rel="noopener noreferrer" href="assets/files/Tejas Ladhani's Resume.pdf" download><div className="btn butn"   style={btn_style}>Download Resume</div></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
