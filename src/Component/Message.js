import { Avatar } from '@material-ui/core';
import React from 'react';
import './Messsage.css';

const Message = () => {
    return (
        <div className='message'>
            <Avatar />
            <div className="message-info">
                <h4>ssssangha
                <span className='message-timestamp'>This is a timestamp</span>
                </h4>
                <p>this is a message</p>
            </div>
        </div>
    );
};

export default Message;