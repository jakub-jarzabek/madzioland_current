import React from 'react';
import GraphicDesign from "./GraphicDesign";
import Photography from "./Photography";
import DigitalArt from "./DigitalArt";
import SimpleReactLightbox from 'simple-react-lightbox'
import '../Styles/Portfolio.scss'
import Animation from "./Animation";
import {HomeHeader} from "./HomeHeader";
 export function Portfolio(props) {
 

    return (
        <div className='Portfolio' id="Portfolio">
          <div className="PortfolioWrapper" id="PortfolioWrapper">
            <SimpleReactLightbox>
              <GraphicDesign id='GraphicDesign' textContext={props.textContext} engOnClick={props.engOnClick} plOnClick={props.plOnClick}/>
            </SimpleReactLightbox>
            <SimpleReactLightbox>
              <DigitalArt id='DigitalArt' textContext={props.textContext} engOnClick={props.engOnClick} plOnClick={props.plOnClick}/>
            </SimpleReactLightbox>
            <Photography id='Photography' textContext={props.textContext} engOnClick={props.engOnClick} plOnClick={props.plOnClick}/>
            <Animation id='Animation' textContext={props.textContext} engOnClick={props.engOnClick} plOnClick={props.plOnClick}/>
           </div>
        </div>
    );
}

