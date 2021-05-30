import React from 'react';
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannels';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import Call from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';
import HeadsetIcon from '@material-ui/icons/Headset';

const Sidebar = () => {
    return (
    
        <div className='sidebar'>
            <div className="sidebar-top">
                <h3>GOSSIP LIST</h3>
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar-channels">
                <div className="sidebar-channels-header">
                    <div className="sidebar-header">
                    <ExpandMoreIcon/>
                    <h4>Text Channels</h4>
                    </div>
                    <AddIcon className='sidebar-addChannel'/>
                    
                </div>
                <div className="sidebar-channelsList">
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
            </div>
            </div>
            <div className="sidebar-voice">
                <SignalCellularAltIcon className='sidebar-voiceIcon' fontSize='large'/>
                <div className="sidebar-voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar-voiceIcons">
                    <InfoIcon/>
                    <Call/>
                </div>

            </div>

            <div className="sidebar-profile">
                <Avatar src='https://img.freepik.com/free-photo/happy-smiling-baby-towel-after-bathing_106368-652.jpg?size=626&ext=jpg'/>
                <div className="sidebar-profileInfo">
                    <h3>@Zannat</h3>
                    <p>#thisIsMyId</p>
                </div>
                <div className="sidebar-profileIcons">
                    <MicIcon/>
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
           

            
        </div>
    );
};

export default Sidebar;