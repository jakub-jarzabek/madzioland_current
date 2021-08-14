import React, { useEffect, useState } from 'react';

import GraphicDesignHeader from '../Images/GraphicDesignHeader.png'
import GraphicDesignHeader_ENG from '../Images/GraphicDesignHeader_ENG.png'
import NavigationLite from "./NavigationLite";
import GraphicDesignGallery from "./GraphicDesignGallery";
import '../Styles/GraphicDesign.scss'
import Triangle from '../Images/Tiangle.png'
import {Link} from 'react-scroll'
import {HomeHeader} from "./HomeHeader";
const GraphicDesign = (props) => {
    const [header,setHeader] = useState(GraphicDesignHeader);
    useEffect(()=>{
        if(props.textContext.Design.Header==="GraphicDesignHeader_ENG"){
            setHeader(GraphicDesignHeader_ENG);
        }else{
            setHeader(GraphicDesignHeader);
        }
    },[props.textContext.Design.Header])
    
    const handleOnClick = ()=>{
        const height = document.getElementById("GraphicDesignDiv").offsetHeight
        document.getElementById("PortfolioWrapper").scrollBy({top:height,behavior:'smooth'})
    }
    return (
     
        <div className='GraphicDesign' id='GraphicDesignDiv'>
            <NavigationLite textContext={props.textContext} engOnClick={props.engOnClick} plOnClick={props.plOnClick}/>
            <div className='GalleryWrapper'>
            <img src={header} alt="" className="GraphicDesignHeader"/>
                <GraphicDesignGallery textContext={props.textContext}/>
            </div>
            <div className='nextPageBtn' onClick={handleOnClick}>
                <span>{props.textContext.Design.NextPageBtn}</span>
                <img src={Triangle} alt=""/>
            </div>
        </div>
    );
}


export default GraphicDesign;