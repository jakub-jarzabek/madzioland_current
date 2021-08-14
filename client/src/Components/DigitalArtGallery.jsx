import React,{useState,useEffect} from 'react';
import { SRLWrapper } from "simple-react-lightbox";

import DigitalArt_1 from '../Images/DigitalArt/Digitalart_1.jpg'
import DigitalArt_1_thumbnail from '../Images/DigitalArt/Digitalart_1_thumbnail.jpg'

import DigitalArt_2 from '../Images/DigitalArt/Digitalart_2.jpg'
import DigitalArt_2_thumbnail from '../Images/DigitalArt/Digitalart_2_thumbnail.jpg'

import DigitalArt_3 from '../Images/DigitalArt/Digitalart_3.jpg'
import DigitalArt_3_thumbnail from '../Images/DigitalArt/Digitalart_3_thumbnail.jpg'

import DigitalArt_4 from '../Images/DigitalArt/Digitalart_4.jpg'
import DigitalArt_4_thumbnail from '../Images/DigitalArt/Digitalart_4_thumbnail.jpg'

import DigitalArt_5 from '../Images/DigitalArt/Digitalart_5.jpg'
import DigitalArt_5_thumbnail from '../Images/DigitalArt/Digitalart_5_thumbnail.jpg'

import DigitalArt_6 from '../Images/DigitalArt/Digitalart_6.jpg'
import DigitalArt_6_thumbnail from '../Images/DigitalArt/Digitalart_6_thumbnail.jpg'

import DigitalArt_7 from '../Images/DigitalArt/Digitalart_7.jpg'
import DigitalArt_7_thumbnail from '../Images/DigitalArt/Digitalart_7_thumbnail.jpg'

import DigitalArt_8 from '../Images/DigitalArt/Digitalart_8.jpg'
import DigitalArt_8_thumbnail from '../Images/DigitalArt/Digitalart_8_thumbnail.jpg'

import DigitalArt_9 from '../Images/DigitalArt/Digitalart_9.jpg'
import DigitalArt_9_thumbnail from '../Images/DigitalArt/Digitalart_9_thumbnail.jpg'

import placeholder_square from '../Images/placeholder_square.jpg'

import '../Styles/LightBoxStylesOverride.scss'
import '../Styles/GraphicDesignGallery.scss'
const DigitalArtGallery = (props) => {
    const {OnHover, Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9} = props.textContext.DigitalArt
    return (
        <div>
            <div
                className='GraphicDesignGalleryWrapper'
                id='GraphicDesignGalleryWrapper'
                // style={{maxHeight:height}}
            >
                <SRLWrapper>
                    <div id='DigitalArtGalleryItem'>
                        <a href={DigitalArt_1}>
                            <img src={DigitalArt_1_thumbnail} alt={Image1}/>
                            <span>{OnHover}</span>
                        </a>
                    </div>
                    <div>
                        <a href={DigitalArt_2}>
                            <img src={DigitalArt_2_thumbnail} alt={Image2}/>
                            <span>{OnHover}</span>
                        </a>
                    </div>
                    <div>
                        <a href={DigitalArt_3}>
                            <img src={DigitalArt_3_thumbnail} alt={Image3}/>
                            <span>{OnHover}</span>
                        </a>
                    </div>
                    <div>
                        <a href={DigitalArt_4}>
                            <img src={DigitalArt_4_thumbnail} alt={Image4}/>
                            <span>{OnHover}</span>
                        </a>
                    </div>
                    <div>
                        <a href={DigitalArt_5}>
                            <img src={DigitalArt_5_thumbnail} alt={Image5}/>
                            <span>{OnHover}</span>
                        </a>
                    </div>
                    <div>
                        <a href={DigitalArt_6}>
                            <img src={DigitalArt_6_thumbnail} alt={Image6}/>
                            <span>{OnHover}</span>
                        </a>
                    </div>
                    <div>
                        <a href={DigitalArt_7}>
                            <img src={DigitalArt_7_thumbnail} alt={Image7}/>
                            <span>{OnHover}</span>
                        </a>
                    </div>
                    <div>
                        <a href={DigitalArt_8}>
                            <img src={DigitalArt_8_thumbnail} alt={Image8}/>
                            <span>{OnHover}</span>
                        </a>
                    </div>
                    <div>
                        <a href={DigitalArt_9}>
                            <img src={DigitalArt_9_thumbnail} alt={Image9}/>
                            <span>{OnHover}</span>
                        </a>
                    </div>
          
                </SRLWrapper>
            </div>
        </div>
    );
};

export default DigitalArtGallery;