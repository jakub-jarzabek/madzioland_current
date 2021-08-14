import React from 'react';
import { useState } from 'react';
import '../Styles/ContactForm.scss'
import {CSSTransition} from "react-transition-group";
 import axios from 'axios'
const ContactForm = (props) => {
    const {NameLabel, EmailLabel, TopicLabel, ContentLabel, ButtonContent} = props.textContext.Contact
    const [name,setName] = useState('');
    const [mail,setMail] = useState('');
    const [topic,setTopic] = useState('');
    const [messageContent,setMessageContent] = useState('');

    const handleOnChange = (e)=>{
        if (e.target.id==='name'){
            setName(e.target.value)
        }else if(e.target.id === 'mail'){
            setMail(e.target.value)
        }else if (e.target.id === 'topic'){
            setTopic(e.target.value)
        }else{
            setMessageContent(e.target.value)
        }

    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        const dataToSubmit = {
            name,
            email:mail,
            topic,
            content:messageContent
        }
         axios.post("/api/send",dataToSubmit)

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit} className="ContactForm">
                <div className="ContactWrapper">
                    <div className="ContactLeft">
                        <div>
                            <CSSTransition
                                in={props.visible}
                                timeout={2000}
                                classNames="display"
                                unmountOnExit
                            >
                        <label htmlFor="">{NameLabel}</label>
                            </CSSTransition>
                            <CSSTransition
                                in={props.visible}
                                timeout={2000}
                                classNames="display"
                                unmountOnExit
                            >
                        <input type="text" id='name' value={name} onChange={handleOnChange}/>
                            </CSSTransition>
                        </div>
                        <div>
                            <CSSTransition
                                in={props.visible}
                                timeout={2000}
                                classNames="display"
                                unmountOnExit
                            >
                        <label htmlFor="">{EmailLabel}</label>
                            </CSSTransition>
                            <CSSTransition
                                in={props.visible}
                                timeout={2000}
                                classNames="display"
                                unmountOnExit
                            >
                        <input type="mail" id='mail' value={mail} onChange={handleOnChange}/>
                            </CSSTransition>
                         </div>
                        <div>
                            <CSSTransition
                                in={props.visible}
                                timeout={2000}
                                classNames="display"
                                unmountOnExit
                            >
                        <label htmlFor="">{TopicLabel}</label>
                            </CSSTransition>
                            <CSSTransition
                                in={props.visible}
                                timeout={2000}
                                classNames="display"
                                unmountOnExit
                            >
                    <input type="text" id='topic' value={topic} onChange={handleOnChange}/>
                            </CSSTransition>
                </div>
                </div>

                    <div className="ContactRight">
                        <CSSTransition
                            in={props.visible}
                            timeout={2000}
                            classNames="display"
                            unmountOnExit
                        >
                        <label htmlFor="">{ContentLabel}</label>
                        </CSSTransition>
                            <CSSTransition
                                in={props.visible}
                                timeout={2000}
                                classNames="display"
                                unmountOnExit
                            >
                        <textarea id='MessageContent' value={messageContent} onChange={handleOnChange}/>
                            </CSSTransition>
                    </div>

                </div>
                <CSSTransition
                    in={props.visible}
                    timeout={2000}
                    classNames="display"
                    unmountOnExit
                >
                <button className="SendBtn" type='Submit'>{ButtonContent}</button>
                </CSSTransition>
            </form>
        </div>
    );
}

export default ContactForm;