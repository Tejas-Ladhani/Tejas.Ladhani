import React, { useContext } from 'react'
import './Contactme.css'
import { context } from '../../App'
import Fade from 'react-reveal/Fade';
function Contactme() {
    const color = useContext(context)
    const icon_style = {
        width: '100px',
        height: '100px',
        background: color,
        margin: '0 auto',
        marginBottom: ' 10px',
        borderRadius: '50%',
        opacity: '0.99'
    }

    const data = [
        {
            id: 1,
            heading: 'Email',
            subheading: 'contact.tejasladhani',
            path_d: 'M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z',
            href: 'mailto:contact.tejasladhani@gmail.com'
        },
        {
            id: 2,
            heading: 'Github',
            subheading: 'Tejas-Ladhani',
            path_d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z',
            href: 'https://github.com/Tejas-Ladhani'
        },
        {
            id: 3,
            heading: 'Linkedin',
            subheading: 'Tejas Ladhani',
            path_d: 'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z',
            href: 'https://www.linkedin.com/in/tejas-ladhani-81ba82127/'
        },
        {
            id: 4,
            heading: 'Blog',
            subheading: 'tejasWrites',
            path_d: 'm13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z',
            href: 'https://medium.com/@tejasWrites'
        }

    ]

    const map_data = data.map((item) => {
        return (

            <div key={item.id} className="col-md-6 col-lg-3 d-flex ">
                <Fade bottom>
                    <div className="align-self-stretch bx text-center p-4 shadow">
                        <div className="d-flex align-items-center justify-content-center" style={icon_style}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d={item.path_d} />
                            </svg>
                        </div>
                        <div>
                            <h3 className="mb-4">{item.heading}</h3>
                            <p><a rel="noreferrer" target="_blank" href={item.href}>{item.subheading}</a></p>
                        </div>
                    </div>
                </Fade>
            </div>

        )
    })


    return (


        <div id="contact" className="mt-4">
            <div className="row justify-content-center mb-5 pb-3 w-100">
                <div className="col-md-7 heading-section text-center ">
                    <h2 className="my-5">Get In Touch.</h2>
                </div>
            </div>

            <div className="row d-flex justify-content-center contact-info mb-5">
                {map_data}
            </div>
            <div className="blob1blob1 d-none d-md-block d-sm-none d-lg-block" style={{
                    opacity: '0.2',
                    position: 'absolute',
                    height: '450px',
                    zIndex: '-1',
                    top:'300em',
                    left: '18em'
                }}>
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="110%" id="blobSvg" >
                        <path id="blob" d="M320.5,318Q250,386,141,318Q32,250,141,153Q250,56,320.5,153Q391,250,320.5,318Z" fill="#fdcb6e"></path>
                    </svg>
                </div>
        </div>



    )
}

export default Contactme
