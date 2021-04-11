import React,{useContext} from 'react'
import {context} from '../../App'
export default function Project() {

    const colr=useContext(context);
    const heading_style={
           fontWeight: '800',
           fontSize: '30px',
           marginBottom: '30px',
           color:colr,
           lineHeight: '1.5'
       }

       const date_style={
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
    const pros = [{
        id:0,
        img_src: "assets/icons/project-icons/FFIT.png",
        date: "2021-Present",
        heading: "FFit",
        type: "🌐A web application",
        description: "Application which will helps user to maintain their financial protfolio.User can keep track of different stocks with the help of beautiful graphs.ReactJs is used for Front-End dev. And FireBase for database and authentication.",
        link: "https://github.com/Tejas-Ladhani/F-Fit"
    },
    {
        id:1,
        img_src: "assets/icons/project-icons/file.png",
        date: "2020",
        heading: "File Transfer & Chat Application",
        type: "📱 Android Application",
        description: "Application that can transfer files from one device to another in close proxcimity,solves the problem of transfering files without internet",
        link: "https://github.com/Tejas-Ladhani/File-Transfer"
    },
    {
        id:2,
        img_src: "assets/icons/project-icons/laugh.png",
        date: "2021",
        heading: "LaughShare",
        type: "📱 Android Application",
        description: "A meme sharing android application , in which the memes can be enjoyed and shared . Used volley and glide library to GET the response and display the meme.",
        link: "https://github.com/Tejas-Ladhani/LaughShare"
    },
    {
        id:3,
        img_src: "assets/icons/project-icons/miwok.png",
        date: "2020",
        heading: "Learn-Miwok App",
        type: "📱 Android Application",
        description: "This Android application is a contribution towards preservation of endangered languages (Miwok is one of them).By using this application user can learn the basics as well as the pronunciations of different words of Miwok Language.",
        link: "https://github.com/Tejas-Ladhani/Miwok-App"
    },
    {
        id:4,
        img_src: "assets/icons/project-icons/game.png",
        date: "2020",
        heading: "Dodge Ball & Snake Game(2 in 1)",
        type: "🖥️ Executable Application",
        description: "A console based game ,developed in CPP-14",
        link: "https://github.com/Tejas-Ladhani/ObjectObstacle-Snake_Game_CPlusPlus"
    }

    ];

    const projects = pros.map((items) => {
        return (
            <div key={items.id} className="resume-wrap d-flex mt-2">
                <img src={items.img_src} width="40" height="40" />
                <div className="text pl-3">
                    <span style={date_style}>{items.date}</span>
                    <h2>{items.heading}</h2>
                    <span className="position">{items.type}</span>
                    <p className="dis"> {items.description}</p>
                    <p ><a href={items.link} className="px-3  py-2 butn" style={btn_style}>View Project</a></p>
                </div>
            </div>
        )

    })
    return (
        <div id="page-2" className="page two">
            <h2 style={heading_style}>Projects</h2>
            {projects}
        </div>
    )
}
