import React from 'react';
import NavigationLite from "./NavigationLite";
import PhotographyHeader_PL from '../Images/PhotographyHeader.png'
import PhotographyHeader_ENG from '../Images/PhotographyHeader_ENG.png'
import '../Styles/PhotographyHeader.scss'
import {HomeHeader} from "./HomeHeader";
import { useState, useEffect } from 'react';
const PhotographyHeader = (props) => {
    const [header,setHeader] = useState(PhotographyHeader_PL);
    useEffect(()=>{

        if(props.textContext.Photography.Header==="Photography"){
            setHeader(PhotographyHeader_ENG);
        }else{
            setHeader(PhotographyHeader_PL);
        }
    },[props.textContext.Photography.Header])
    const {NatureTitle, AbstractTitle, HumanTitle, ArchitectureTitle} = props.textContext.Photography
    return (
        <div className='PhotographyHeader'>
            <NavigationLite textContext={props.textContext} engOnClick={props.engOnClick} plOnClick={props.plOnClick}/>
            <div className='PhotographyHeaderWrapper'>
                    <img src={header} alt="" className="HeaderImg"/>
                <div className='PhotographyNav'>
                    <span onClick={props.natureOnClick} id='NatureSpan'>{NatureTitle}</span>
                    <span onClick={props.abstractOnClick} id='AbstractSpan'>{AbstractTitle}</span>
                    <span onClick={props.humanOnClick} id='HumanSpan'>{HumanTitle}</span>
                    <span onClick={props.architectureOnClick}id='ArchitectureSpan'>{ArchitectureTitle}</span>
                </div>
            </div>
        </div>
    );
};

export default PhotographyHeader;