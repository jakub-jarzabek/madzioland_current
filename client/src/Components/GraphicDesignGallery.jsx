import React from 'react';


import { SRLWrapper } from "simple-react-lightbox";

import graphicdesign_1 from '../Images/GraphicDesign/graphicdesign_1.jpg'
import graphicdesign_1_thumbnail from '../Images/GraphicDesign/graphicdesign_1_thumbnail.jpg'
import graphicdesign_2 from '../Images/GraphicDesign/graphicdesign_2.jpg'
import graphicdesign_2_thumbnail from '../Images/GraphicDesign/graphicdesign_2_thumbnail.jpg'
import graphicdesign_3 from '../Images/GraphicDesign/graphicdesign_3.jpg'
import graphicdesign_3_thumbnail from '../Images/GraphicDesign/graphicdesign_3_thumbnail.jpg'
import graphicdesign_4 from '../Images/GraphicDesign/graphicdesign_4.jpg'
import graphicdesign_4_thumbnail from '../Images/GraphicDesign/graphicdesign_4_thumbnail.jpg'
import graphicdesign_5 from '../Images/GraphicDesign/graphicdesign_5.jpg'
import graphicdesign_5_thumbnail from '../Images/GraphicDesign/graphicdesign_5_thumbnail.jpg'
import graphicdesign_6 from '../Images/GraphicDesign/graphicdesign_6.jpg'
import graphicdesign_6_thumbnail from '../Images/GraphicDesign/graphicdesign_6_thumbnail.jpg'
import graphicdesign_7 from '../Images/GraphicDesign/graphicdesign_7.jpg'
import graphicdesign_7_thumbnail from '../Images/GraphicDesign/graphicdesign_7_thumbnail.jpg'
import graphicdesign_8 from '../Images/GraphicDesign/graphicdesign_8.jpg'
import graphicdesign_8_thumbnail from '../Images/GraphicDesign/graphicdesign_8_thumbnail.jpg'

import '../Styles/GraphicDesignGallery.scss'
import '../Styles/LightBoxStylesOverride.scss'
const GraphicDesignGallery = (props) => {
    const {OnHover,Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8} = props.textContext.Design
    return (
        <div className='GraphicDesignGalleryWrapper'>
        <SRLWrapper>
            <div>
            <a href={graphicdesign_1}>
            <img src={graphicdesign_1_thumbnail} alt={Image1}/>
            <span>{OnHover}</span>
            </a>
            </div>
            <div>
                <a href={graphicdesign_2}>
                    <img src={graphicdesign_2_thumbnail} alt={Image2}/>
                    <span>{OnHover}</span>
                </a>
            </div><div>
            <a href={graphicdesign_3}>
                <img src={graphicdesign_3_thumbnail} alt={Image3}/>
                <span>{OnHover}</span>
            </a>
        </div>
            <div>
                <a href={graphicdesign_4}>
                    <img src={graphicdesign_4_thumbnail} alt={Image4}/>
                    <span>{OnHover}</span>
                </a>
            </div>
            <div>
                <a href={graphicdesign_5}>
                    <img src={graphicdesign_5_thumbnail} alt={Image5}/>
                    <span>{OnHover}</span>
                </a>
            </div>
            <div>
                <a href={graphicdesign_6}>
                    <img src={graphicdesign_6_thumbnail} alt={Image6}/>
                    <span>{OnHover}</span>
                </a>
            </div>
            <div>
                <a href={graphicdesign_7}>
                    <img src={graphicdesign_7_thumbnail} alt={Image7}/>
                    <span>{OnHover}</span>
                </a>
            </div>
            <div>
                <a href={graphicdesign_8}>
                    <img src={graphicdesign_8_thumbnail} alt={Image8}/>
                    <span>{OnHover}</span>
                </a>
            </div>
        </SRLWrapper>
        </div>
    );
}

export default GraphicDesignGallery;