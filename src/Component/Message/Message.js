import { Avatar } from '@material-ui/core';
import React from 'react';
import './Messsage.css';

const Message = ({timestamp, user , message}) => {
    return (
        <div className='message'>
            <Avatar src={user.photo}/>
            <div className="message-info">
                <h4>
                    {user.displayName}
                <span className='message-timestamp'>
                    {new Date(timestamp?.toDate()).toUTCString()}
                </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Message;