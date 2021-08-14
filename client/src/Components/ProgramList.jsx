import React from 'react';

import Ae from '../Images/AdobeLogos/Ae.png'
import Ae_desc from '../Images/AdobeLogos/Ae_desc.png'
import Ai from '../Images/AdobeLogos/Ai.png'
import Ai_desc from '../Images/AdobeLogos/Ai_desc.png'
import Au from '../Images/AdobeLogos/Au.png'
import Au_desc from '../Images/AdobeLogos/Au_desc.png'
import Id from '../Images/AdobeLogos/Id.png'
import Id_desc from '../Images/AdobeLogos/Id_desc.png'
import Lr from '../Images/AdobeLogos/Lr.png'
import Lr_desc from '../Images/AdobeLogos/Lr_desc.png'
import Pr from '../Images/AdobeLogos/Pr.png'
import Pr_desc from '../Images/AdobeLogos/Pr_desc.png'
import Ps from '../Images/AdobeLogos/Ps.png'
import Ps_desc from '../Images/AdobeLogos/Ps_desc.png'
import Xd from '../Images/AdobeLogos/Xd.png'
import Xd_desc from '../Images/AdobeLogos/Xd_desc.png'

import '../Styles/ProgramList.scss'

export const ProgramList = () => {
    const Programs= [
        {
            id:'ps',
            logo:Ps,
            desc:Ps_desc,
        },
        {
            id:'ai',
            logo: Ai,
            desc: Ai_desc,
        },
        {
            id:'lr',
            logo:Lr,
            desc:Lr_desc,
        },
        {
            id:'id',
            logo:Id,
            desc:Id_desc,
        },
        {
            id:'ae',
            logo:Ae,
            desc: Ae_desc,
        },
        {
            id:'pr',
            logo:Pr,
            desc:Pr_desc,
        },
        {
            id:'xd',
            logo:Xd,
            desc:Xd_desc,
        },
        {
            id:'au',
            logo:Au,
            desc:Au_desc,
        },
    ]
    const ListofPrograms = Programs.map((program)=>
    <li key={program.id}>
        <img src={program.logo} className="ProgramLogo" alt=""/>
        <img src={program.desc} className="ProgramDesc" alt=""/>
    </li>
    );
    return (

        <div className="ProgramList">
            <ul>
            {ListofPrograms}
            </ul>
        </div>
    );
}
