// 10-04-2021 TEJAS LADHANI
import React, { useState, createContext } from 'react'
import { BlockPicker } from 'react-color'
import Tippy from '@tippyjs/react'
import { Navbar, Nav, DropdownButton, Dropdown } from 'react-bootstrap'
import Landing from './components/Landing-Container/Landing'
import Rsidebar from './components/Resume-Sidebar/Rsidebar';
import RContent from './components/Resume-Content/RContent';
import Aboutme from './components/About-Me/Aboutme';
import './NBar.css'
import Contactme from './components/Contact-Me/Contactme'
import Footer from './components/Footer/Footer'

export const context = createContext();
export default function App() {
    const [selectedColor, setselectedColor] = useState('#3e64ff');
    const btn = <Tippy interactive={true} placement={'bottom'} content={

        <BlockPicker
            color={selectedColor}
            onChangeComplete={c => setselectedColor(c.hex)}
        />
    }>
        <button className="btn" style={{ backgroundColor: selectedColor ,color:'white',opacity:'0.8'}}> Theme</button>
    </Tippy>

    return (
        <>
           
            <div className="container">
                <div>
                    <Navbar expand="md"  className="pb-2">
                        <Navbar.Brand href="/">Tejas</Navbar.Brand>
                        <Navbar.Toggle aria-controls="" />
                        <Navbar.Collapse className="f-container">
                            <Nav >
                                <Nav.Link href="#Aboutme">About</Nav.Link>
                                <Nav.Link href="#Resume">Resume</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                            {btn}
                        </Navbar.Collapse>
                        
                    </Navbar>
                </div>
                <context.Provider value={selectedColor}>
                <Landing/>
                <Aboutme color={selectedColor} />
                <div className="container">
                    <div className="row">
                        <Rsidebar />
                        <RContent />
                    </div>
                </div>
                <Contactme/>
               
                </context.Provider>
            </div>
            <Footer/>
        </>

    )
}



// Amazing tutorial @ https://www.youtube.com/watch?v=senxk5FbsJM&list=LL&index=6