import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from '../SlideBarChannel/SidebarChannels';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';
import HeadsetIcon from '@material-ui/icons/Headset';
<<<<<<< HEAD
import db, {auth} from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
=======
import { auth } from '../../firebase';
>>>>>>> 3278b7b41bb82afb6d5a5c01021a21587fe4e538
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const user = useSelector(selectUser)
    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),
            })))
        })
    } , [])
    const handleChannelName = () => {
        const channelName = prompt('Enter a new channel name')
        if(channelName){
            db.collection('channels').add({
                channelName: channelName,
            })
        }
    }
    return (

        <div className='sidebar'>
            <div className="sidebar-top">
                <h3>GOSSIP LIST</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar-channels">
                <div className="sidebar-channels-header">
                    <div className="sidebar-header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
<<<<<<< HEAD
                    <AddIcon onClick={handleChannelName()} className='sidebar-addChannel'/>
                    
                </div>
                <div className="sidebar-channelsList">
                    {channels.map(({id, channel})=> (
                     <SidebarChannel 
                     key={id} 
                     id={id} 
                     channelName={channel.channelName}/>    
                    ))}
               
          
            </div>
=======
                    <AddIcon className='sidebar-addChannel' />

                </div>
                <div className="sidebar-channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
>>>>>>> 3278b7b41bb82afb6d5a5c01021a21587fe4e538
            </div>
            <div className="sidebar-voice">
                <SignalCellularAltIcon className='sidebar-voiceIcon' fontSize='large' />
                <div className="sidebar-voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar-voiceIcons">
<<<<<<< HEAD
                    <InfoIcon/>
                    <CallIcon/>
=======
                    <InfoIcon />
                    <Call />
>>>>>>> 3278b7b41bb82afb6d5a5c01021a21587fe4e538
                </div>

            </div>

            <div className="sidebar-profile">
<<<<<<< HEAD
                <Avatar onClick={() => auth.signOut()} src={user.photo}/>
=======
                <Avatar onClick={() => auth.signOut()} component={Link} to ='/home' src='https://img.freepik.com/free-photo/happy-smiling-baby-towel-after-bathing_106368-652.jpg?size=626&ext=jpg' />
>>>>>>> 3278b7b41bb82afb6d5a5c01021a21587fe4e538
                <div className="sidebar-profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>{user.uid.subString(0,5)}</p>
                </div>
                <div className="sidebar-profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>



        </div>
    );
};

export default Sidebar;