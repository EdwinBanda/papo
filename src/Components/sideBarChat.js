import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

library.add(faUser)

export default function SideBarChat(){
    return(
        <div className='friend'>
            <div className='friendIcon'>
                <FontAwesomeIcon icon='user' className="chatProfileDefaultIcon"/>
                <div className="friendName">Joao Carlos</div>
            </div>
            <div className='friendName'></div>
          </div>
    )
}