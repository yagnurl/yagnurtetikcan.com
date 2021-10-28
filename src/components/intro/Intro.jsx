import "./intro.scss"
import {init} from 'ityped'
import {useEffect, useRef} from "react"


export default function Intro() {

    const textRef = useRef();


    useEffect(() => {
       init(textRef.current, 
        { 
        showCursor: true, 
        strings: ['Developer', 'Designer', 'Tester' ] ,
        backDelay: 1500,
        backSpeed: 60
       
    
        })
       
    }, [])


    return (
        <div className="intro" id="intro">
            <div className="left">
              <div className="imgContainer">
                  <img src="assets/hero1.png" alt="" />
              </div>
            </div>
            <div className="right">
            <div className="wrapper">
                <h2>Hi there, I'm</h2>
                <h1>Yagnur Tetikcan</h1>
                <h3>Freelance <span ref={textRef}></span> </h3>
            </div>
            <a href="#portfolio">
                <img src="assets/down.png" alt="" />
            </a>
            </div>
        </div>
    )
}
