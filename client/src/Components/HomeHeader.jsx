import React, {useEffect, useState} from 'react';
import {Navigation} from './Navigation'
import '../Styles/HomeHeader.scss'
import animation from '../Video/Animation.mp4'
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";
import {CSSTransition} from "react-transition-group";

export function HomeHeader(props) {

    const [aboutVisible,SetAboutVisible]= useState(false)
    const [contactVisible,SetContactVisible]= useState(false)

    const handleAboutOnClick = ()=> {
        if(aboutVisible===false && contactVisible === false){
            SetAboutVisible(true)
        }
        let element = document.getElementById('contactBtn')
        if(typeof element !== 'undefined' && element !== null) {
            SetContactVisible(false);
            element.style.pointerEvents = 'none';
            setTimeout(() => {
                SetAboutVisible(true)
                element.style.pointerEvents = 'auto';
            }, 1000)
        }
    }
    const handleContactOnClick = ()=>{
        if(aboutVisible===false && contactVisible === false){
            SetContactVisible(true)
        }
        let element = document.getElementById('aboutBtn')
        if(typeof element !== 'undefined' && element !== null) {
        SetAboutVisible(false);
            element.style.pointerEvents='none';
        setTimeout(()=>{
            SetContactVisible(true)
            element.style.pointerEvents='auto';
        },1000)}
        }

    const handleLogoOnClick = ()=>{
        SetAboutVisible(false);
        SetContactVisible(false);
    }
    return (
    <div className="HomeHeader">
            <video src={animation}
                   autoPlay={true}
                   className="Bubol"
                   loop={true}
                   preload={true}
                   muted
            />
            <Navigation aboutOnClick={handleAboutOnClick}
                        contactOnClick={handleContactOnClick}
                        logoOnClick={handleLogoOnClick}
                        engOnClick={props.engOnClick}
                        plOnClick={props.plOnClick}
                        textContext={props.textContext}
            />
        <CSSTransition
            in={aboutVisible || contactVisible}
            timeout={1000}
            classNames="BackgroundDarkening"
            unmountOnExit
        >
            <div className="BackgroundDarkening"/>
        </CSSTransition>
            <div className='LoadingDarkening'
                 id='LoadingDarkening'
            />
            <HomeAbout visible={aboutVisible}
                       textContext={props.textContext}
            />
            <HomeContact visible={contactVisible}
                         textContext={props.textContext}
            />
            <p className='Legal'>Copyright &copy; <a href="https://www.linkedin.com/in/magdalena-pierzchala/" className='NameLink'>Magdalena Pierzchała</a> | Website created By <a href="https://www.linkedin.com/in/jakub-jarzabek/" className='NameLink'>Jakub Jarząbek</a></p>
            <div className='FixingMagdasObviousMistake'/>
          </div>

    );
}