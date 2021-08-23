import React from 'react';

import {NavLink} from 'react-router-dom'
import  Triangle from '../Images/Tiangle.png'

import '../Styles/NavigationLite.scss'

const NavigationLite = (props) => {
    return (
        <div className="NavigationLite">
            <NavLink to='/' className="GoBack">
                <img src={Triangle}  alt=""/>
                <span className="firstSpan">{props.textContext.NavigationLite.back}</span>
                <span className="secondSpan">{props.textContext.NavigationLite.back2}</span>
            </NavLink>

            <ul className="LangNav">
                <li>
                    <span onClick={props.plOnClick}>PL</span>
                </li>
                <li>
                    <span onClick={props.engOnClick}>ENG</span>
                </li>
            </ul>
        </div>
    );
};

export default NavigationLite;