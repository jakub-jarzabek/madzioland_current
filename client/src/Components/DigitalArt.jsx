import React from 'react';
import NavigationLite from "./NavigationLite";
import Header from "../Images/DigitalArtHeader.png";
import Triangle from "../Images/Tiangle.png";
import '../Styles/DigitalArt.scss'
import {Link} from "react-scroll";
import DigitalArtGallery from "./DigitalArtGallery";
import {HomeHeader} from "./HomeHeader";
const DigitalArt = (props) => {
    const handleOnClick = ()=>{
        const height = document.getElementById("GraphicDesignDiv").offsetHeight
        document.getElementById("PortfolioWrapper").scrollBy({top:height,behavior:'smooth'})
    }
    return (
        <div className='DigitalArt' id='DigitalArtDiv'>
            <NavigationLite textContext={props.textContext} engOnClick={props.engOnClick} plOnClick={props.plOnClick}/>
            <div className='GalleryWrapper'>
                <img src={Header} alt="" className="GraphicDesignHeader"/>
                <DigitalArtGallery textContext={props.textContext}/>
            </div>
            {/* <Link to="Photography" spy={true} smooth={true} duration={500} onClick={handleOnClick}> */}
            <div className='nextPageBtn' onClick={handleOnClick}>
                <span>{props.textContext.DigitalArt.NextPageBtn}</span>
                <img src={Triangle} alt=""/>
            </div>
            {/* </Link> */}
        </div>
    );
};

export default DigitalArt;