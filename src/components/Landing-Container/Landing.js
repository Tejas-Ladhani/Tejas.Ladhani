import React, { useContext } from 'react'
import './Landing.css'
import { context } from '../../App'
import Fade from 'react-reveal/Fade';

function Landing() {
    const color = useContext(context)

    const overlayStyle = {

        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        content: '',
        opacity: '.1',
        width: '50%',
        zIndex: '-1',
        background: color
    }
    return (

        <div className="landing">

            <div className="overlay" style={overlayStyle} >
            </div>

            <div >
                <div className="col-lg-12 col-md-12 ">
                    <div className="lcontent ">
                        <Fade top>
                            <div className="text text-center">
                                <span className="subheading">Hey 👋!</span>
                                <h1  > I'm Tejas Ladhani.</h1>
                            </div>
                        </Fade>
                    </div>
                </div>

            </div>
            
        </div>



    )
}

export default Landing
