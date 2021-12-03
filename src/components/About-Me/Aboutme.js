import React,{useContext} from 'react';
import './Aboutme.css';
import {context} from '../../App'
export default function Aboutme() {
    const profilePath = "./photo.jpg";
    const color = useContext(context)
    
    const btn_style={
        borderRadius: '100px !important',
        color: '#fff',
        boxShadow: '3px 3px 6px #b8b8b8',
        backgroundColor:color
    }

    return (
        <div className="Aboutme mt-5 pt-4" id="Aboutme">
            <div >
                <div className="row">
                    <div className="col-md-6 d-none d-sm-block px-5 pt-1">
                        <img className="img img-fluid pt-5" draggable="false" src="assets/images/photo.jpg" alt="Tejas' Profile" />
                    </div>
                    <div className="col-md-6 col-12  pl-md-5 py-5">
                        <div className="row justify-content-start pb-3">
                            <div className="col-md-12 heading-section ">

                                <h2 className="mb-4">About Me</h2>
                                <p>I'm a tech enthusiast and a hard worker who wants to learn more about the fascinating and broad field of information technology.Trying to turn my ideas into Reality. Aside from that, I'm pursuing B.Tech. in Information Technology and a budding software engineer.</p>
                                <ul className="about-info mt-4 px-md-0 px-2">
                                    <li className="d-flex content"><span>Name:</span> <span>Tejas Ladhani</span></li>
                                    <li className="d-flex content"><span>Location:</span> <span> Gujarat, India. </span></li>
                                    <li className="d-flex content"><span>Email:</span> <span>contact.tejasladhani@gmail.com</span></li>
                                    <li className="d-flex content"><span>Twitter:</span> <span>@TeJS_here</span></li>
                                    
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
