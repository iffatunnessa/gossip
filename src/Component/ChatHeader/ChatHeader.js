import React from 'react';
import './ChatHeader.css'
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search'; 
import HelpIcon from '@material-ui/icons/Help';
import SendIcon from '@material-ui/icons/Send';

const ChatHeader = () => {
    return (
        <div className='chatHeader'>
            
            <div className="chatHeader-left">
                <h3><span className='chatHeader-hash'>#</span>Test Chanel Name</h3>
            </div>

            <div className="chatHeader-right">
                <NotificationsOffIcon />
                <EditLocationIcon />
                <PeopleIcon />
                
                <div className="chatHeader-search">
                    <input placeholder="Search" />
                    <SearchIcon />
                </div>
                
                <SendIcon />
                <HelpIcon />
            </div>
        </div>
    );
};

export default ChatHeader;