import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import '../Styles/Navigation.scss'
import { NavHashLink } from 'react-router-hash-link'
import logo from '../Images/Logo.png'
import Insta from '../Images/Socials/Insta.png'
import Linked from '../Images/Socials/Linked.png'
export function Navigation(props) {

    const [showMenu, setShowMenu]=   useState(false)
    const {Navigation} = props.textContext


    const handleOnMouseEnter= () =>{
        setShowMenu(true)
    }
    const handleOnMouseLeave= () =>{
        setShowMenu(false)
    }
    return (
        <div className="Navigation">
                <Link to="HomeHeader" spy={true} smooth={true}>
                 <img src={logo}
                 alt="Logo Magdalena Pierzchała Graphic Design"
                className="LogoImg"
                      onClick={props.logoOnClick}
            />
            </Link>
            <ul className="MainNav">
                <li>
                    <span onClick={props.aboutOnClick} id='aboutBtn' >
                        {Navigation.About}
                    </span>
                </li>
                <li>
                    <span onClick={props.contactOnClick} id='contactBtn'>
                        {Navigation.Contact}
                    </span>
                </li>
                <li>
                    <div className="PortfolioMenu"  onMouseLeave={handleOnMouseLeave}>
                    <NavLink  to="/portfolio"
                              onMouseEnter={handleOnMouseEnter}
                          
                        >
                            {Navigation.Portfolio}
                            </NavLink>
                        {showMenu ? (
                            <div className="PortfolioSubMenu">
                        <NavLink  to="/portfolio">
                            {Navigation.Design}
                        </NavLink>
                        <NavHashLink  to="/portfolio#DigitalArtDiv">
                            {Navigation.DigitalArt}
                        </NavHashLink>
                        <NavHashLink  to="/portfolio#PhotographyWrapper">
                            {Navigation.Photography}
                        </NavHashLink>
                        <NavHashLink  to="/portfolio#AnimationDiv">
                            {Navigation.Animation}
                        </NavHashLink>


                            </div>
                                )
                        : null}
                    </div>
                </li>
            </ul>
            <ul className="LangNav">
                <li>
                    <a href="https://www.instagram.com/magnify.project/" className='Instagram Socials'>
                        <img src={Insta} alt="instagram logo" />
                    </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/magdalena-pierzchala/" className='Linkedin Socials'>
                        <img src={Linked} alt="linkedin logo" />
                    </a>
                </li>
                <li>
                    <span onClick={props.plOnClick}>PL</span>
                </li>
                <li>
                    <span onClick={props.engOnClick}>ENG</span>
                </li>
            </ul>
        </div>
    );
}