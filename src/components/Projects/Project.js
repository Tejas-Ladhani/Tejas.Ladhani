import React, { useContext } from 'react'
import { context } from '../../App'
import Bounce from 'react-reveal/Bounce';
export default function Project() {

    const colr = useContext(context);
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

    // ===========================================================================
    const pros = [
        {
            id: -1,
            img_src: "assets/icons/project-icons/file.png",
            date: "2021-Present",
            heading: "Handle My Admissions",
            type: "🌐 Full Stack application",
            description: "A fully serverless application for handling Admission process. comprises of query management, application management, application analysis, notification management & much more. Built using ReactJS, ant-design, AWS (Cognito, Lambda, API-Gateway, DynamoDB, S3)",
            link: "https://github.com/admission-portal"
        },
        {
            id: 0,
            img_src: "assets/icons/project-icons/FFIT.png",
            date: "Jan-Jun 2021",
            heading: "FFit",
            type: "🌐 A web application",
            description: "A web application that helps users to manage their money easily. It is a tool that helps you create and manage your monthly budgets without any hassle. User can keep track of different stocks with the help of beautiful graphs. ReactJs is used for Front-End dev.And FireBase for database and authentication.",
            link: "https://github.com/Tejas-Ladhani/F-Fit"
        },
        {
            id: 1,
            img_src: "assets/icons/project-icons/file.png",
            date: "Dec 2020",
            heading: "File Transfer & Chat Application",
            type: "📱 Android Application",
            description: "Application that can transfer files from one device to another in close proximity, solves the problem of transferring files without internet",
            link: "https://github.com/Tejas-Ladhani/File-Transfer"
        },
        {
            id: 2,
            img_src: "assets/icons/project-icons/laugh.png",
            date: "Jan 2021",
            heading: "LaughShare",
            type: "📱 Android Application",
            description: "A meme sharing android application, in which the memes can be enjoyed and shared. Used volley and glide library to GET the response and display the same.",
            link: "https://github.com/Tejas-Ladhani/LaughShare"
        },
        {
            id: 3,
            img_src: "assets/icons/project-icons/miwok.png",
            date: "Oct 2020",
            heading: "Learn-Miwok App",
            type: "📱 Android Application",
            description: "This Android application is a contribution towards preservation of endangered languages (Miwok is one of them).By using this application user can learn the basics as well as the pronunciations of different words of Miwok Language.",
            link: "https://github.com/Tejas-Ladhani/Miwok-App"
        },
        {
            id: 4,
            img_src: "assets/icons/project-icons/file.png",
            date: "March 2020",
            heading: "Dodge Ball & Snake Game",
            type: "🖥️ Executable Application",
            description: "A console based game ,developed in CPP-14",
            link: "https://github.com/Tejas-Ladhani/ObjectObstacle-Snake_Game_CPlusPlus"
        }

    ];

    const projects = pros.map((items) => {
        return (

            <div key={items.id} className="resume-wrap d-flex mt-2">

                <Bounce left>
                    <img src={items.img_src} width="35" height="35" alt={items.heading} />
                    <div className="text pl-3">
                        <span style={date_style}>{items.date}</span>
                        <h3>{items.heading}</h3>
                        <span className="position">{items.type}</span>
                        <p className="dis"> {items.description}</p>
                        <p ><a target="_blank" rel="noopener noreferrer" href={items.link} className="px-3  py-2 butn" style={btn_style}>View Project</a></p>
                    </div>
                </Bounce>
            </div>

        )

    })
    return (
        <>
            <div id="page-2" />
            <div className="page mt-5 pt-4">
                <div className="blob1blob1 d-none d-md-block d-sm-none d-lg-block" style={{
                    opacity: '0.2',
                    position: 'absolute',
                    height: '450px',
                    zIndex: '-1',
                    left: '-10px'
                }}>
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="110%" id="blobSvg" >
                        <path id="blob" d="M320.5,318Q250,386,141,318Q32,250,141,153Q250,56,320.5,153Q391,250,320.5,318Z" fill="#fdcb6e"></path>
                    </svg>
                </div>

                <h2 style={heading_style}>Projects</h2>
                {projects}

                <div className="blob1blob1 d-none d-md-block d-sm-none d-lg-blockblob1 d-none d-md-block d-sm-none d-lg-block" style={{
                    opacity: '0.2',
                    position: 'absolute',
                    height: '450px',
                    top: '1650px',
                    zIndex: '-1',
                    right: '-14em'
                }}>
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="110%" id="blobSvg" >
                        <path id="blob" d="M403,356.5Q319,463,236,392Q153,321,108,217.5Q63,114,185,94Q307,74,397,162Q487,250,403,356.5Z" fill="#fdcb6e"></path>
                    </svg>
                </div>
                <div className="blob1blob1 d-none d-md-block d-sm-none d-lg-blockblob1 d-none d-md-block d-sm-none d-lg-block" style={{
                    opacity: '0.2',
                    position: 'absolute',
                    height: '450px',
                    top: '2050px',
                    zIndex: '-1',
                    left: '-10em'
                }}>
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="110%" id="blobSvg" >
                        <path id="blob" d="M343,315Q292,380,179,382Q66,384,110.5,282.5Q155,181,225.5,145Q296,109,345,179.5Q394,250,343,315Z" fill="#fdcb6e"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}
