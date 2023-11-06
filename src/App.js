import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import SideBarChat from './Components/sideBarChat';

library.add(faBars, faUser);

function App() {
  return (
    <div id='app'>
      <header>
        <div className='profilePic'>
          <FontAwesomeIcon icon='user' className='profileDefaultIcon'/>
        </div>
        <div className='profileName'>Edwin Banda</div>
        <div className='settings'>
          <FontAwesomeIcon icon='bars' className='settingsIcon'/>
        </div>
      </header>
      <aside>
        <div className='chats'>
          <div className='titleChats'>
            <h1>Conversas</h1>
          </div>
          <input type='search' placeholder='Search'/>
          <br/>
          
          
          <SideBarChat></SideBarChat>
          <SideBarChat></SideBarChat>
          <SideBarChat></SideBarChat>
          <SideBarChat></SideBarChat>
          <SideBarChat></SideBarChat>
          <SideBarChat></SideBarChat>
          <SideBarChat></SideBarChat>
        </div>
      </aside>
    </div>
  );
}

export default App;
