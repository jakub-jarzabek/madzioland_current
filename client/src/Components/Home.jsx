import React, {useEffect, useState} from 'react';
import {HomeHeader} from "./HomeHeader";

import '../Styles/Home.scss'


export function Home(props) {
    useEffect(() => {
        let element = document.getElementById('LoadingDarkening')
        if(typeof element !== 'undefined' && element !== null) {
            element.classList.add('LoadingDarkening-active')
            setTimeout(() => {
                element.classList.remove('LoadingDarkening-active')
            }, 4000);
        } }, [HomeHeader]);
    return (
        <div className="Home">
            <HomeHeader engOnClick={props.engOnClick} plOnClick={props.plOnClick} textContext={props.textContext} id="HomeHeader"/>
        </div>
    );
}
