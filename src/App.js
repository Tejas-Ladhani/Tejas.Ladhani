// 10-04-2021 TEJAS LADHANI
import React, { useState, createContext } from 'react'
import { BlockPicker } from 'react-color'
import Tippy from '@tippyjs/react'
import { Navbar, Nav} from 'react-bootstrap'
import Landing from './components/Landing-Container/Landing'
import Rsidebar from './components/Resume-Sidebar/Rsidebar';
import RContent from './components/Resume-Content/RContent';
import Aboutme from './components/About-Me/Aboutme';
import './NBar.css'
import Contactme from './components/Contact-Me/Contactme'
import Footer from './components/Footer/Footer'

export const context = createContext();
export default function App() {
    const [selectedColor, setselectedColor] = useState('#FF8A65');
    const btn = <Tippy interactive={true} placement={'bottom'} content={

        <BlockPicker
            color={selectedColor}
            onChangeComplete={c => setselectedColor(c.hex)}
        />
    }>
        <button className="btn cbtn"  style={{ backgroundColor: selectedColor ,color:'white',opacity:'0.8'}}>Customize</button>
    </Tippy>

    return (
        <>
           
            <div className="container">
                    <Navbar expand="md"  className="fixed-top">
                        <Navbar.Brand href="/Tejas.Ladhani">Tejas</Navbar.Brand>
                        <Navbar.Toggle aria-controls="" />
                        <Navbar.Collapse className="f-container">
                            <Nav >
                                <Nav.Link href="#Aboutme">About</Nav.Link>
                                <Nav.Link href="#page-1">Education</Nav.Link>
                                <Nav.Link href="#page-e">Experience</Nav.Link>
                                <Nav.Link href="#page-2">Projects</Nav.Link>
                                <Nav.Link href="#page-3">Skills</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                            {/* {btn} */}
                        </Navbar.Collapse>
                        
                    </Navbar>
                
                <context.Provider value={selectedColor}>
                <Landing/>
                <Aboutme color={selectedColor} />
               
                    <div className="row">
                        <Rsidebar />
                        <RContent />
                    </div>
                
                <Contactme/>
               
                </context.Provider>
            </div>
            <Footer/>
        </>

    )
}



// Amazing tutorial @ https://www.youtube.com/watch?v=senxk5FbsJM&list=LL&index=6