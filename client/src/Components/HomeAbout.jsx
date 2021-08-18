import React, {useEffect, useMemo} from 'react';


import {ProgramList} from './ProgramList'

import '../Styles/HomeAbout.scss'
import {CSSTransition} from "react-transition-group";
const HomeAbout = (props) => {
    return (

            <div className="HomeAbout">
                        <div className="AboutInfo">
                            <CSSTransition
                                in={props.visible}
                                timeout={1000}
                                classNames="display"
                                unmountOnExit
                            >
                            <h1>{props.textContext.About.H1}</h1>
                            </CSSTransition>
                                <CSSTransition
                                    in={props.visible}
                                    timeout={1000}
                                    classNames="display"
                                    unmountOnExit
                                >
                            <p>{props.textContext.About.Paragraph}
                            </p>
                                </CSSTransition>
                                    <CSSTransition
                                        in={props.visible}
                                        timeout={1000}
                                        classNames="display"
                                        unmountOnExit
                                    >
                            <h2>{props.textContext.About.H2}</h2>
                                    </CSSTransition>
                            <CSSTransition
                                in={props.visible}
                                timeout={1000}
                                classNames="display"
                                unmountOnExit
                            >
                            <ProgramList/>
                        </CSSTransition>
                        </div>
                </div>
    );
}

export default HomeAbout;