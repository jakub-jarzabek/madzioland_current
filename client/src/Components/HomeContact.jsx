import React from 'react';


import ContactForm from "./ContactForm";

import '../Styles/HomeContact.scss'
import {CSSTransition, TransitionGroup} from "react-transition-group";

const HomeContact = (props) => {
    return (
        <div className="HomeContact">
                <CSSTransition
                    in={props.visible}
                    timeout={2000}
                    classNames="display"
                    unmountOnExit
                >
                <h1>{props.textContext.Contact.Title}</h1>
                </CSSTransition>
                <ContactForm visible={props.visible}
                             textContext={props.textContext}
                />
        </div>
    );
};

export default HomeContact;