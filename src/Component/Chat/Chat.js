import React, { useEffect, useState } from 'react';
import './Chat.css'
import ChatHeader from '../ChatHeader/ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import { selectChannelId, selectChannelName } from './appSlice';
import db from './firebase';
import firebase from 'firebase';

const Chat = ({channelName}) => {

    const user = useSelector(selectUser);
    const channelName = useSelector(selectChannelName);
    const channelId = useSelector(selectChannelId);
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])
      
    useEffect(() => {
        if(channelId) {
            db.collection('channels')
            .doc(channelId).collection('messages')
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot) =>
              setMessages(snapshot.docs.map((doc) =>doc.data()))
            );
        }
       
    }, [channelId])

    const sendMessages = (e) => {
        e.preventDefault();
        db.collection('channels').doc(channelId).collection('messages').
        add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
            message: input,
            user: user,
        })

        setInput('')
    }

    return (
        <div className='chat'>
            
            <ChatHeader channelName={channelName} />
            <div className="chat-messages">
               {messages.map((message) => (
                   <Message
                   timestamp = {message.timestamp}
                   message = {message.message}
                   user = {message.user}
                   />
               ))}
            </div>
            <div className="chat-input">
                <AddCircleIcon fontSize='large'/>
                <form>
                    <input value={input}
                    disabled={!channelId}
                     onChange={e => setInput(e.target.value)} 
                     placeholder={`Message #${channelName}`} />
                    <button 
                    disabled={!channelId}
                    className='chat-inputButton' 
                    type='submit'
                    onClick={sendMessages}
                    >
                    Send Message
                  </button>
                </form>
                <div className="chat-inputIcons">
                    <CardGiftcardIcon fontSize='large'/>
                    <GifIcon fontSize='large'/>
                    <EmojiEmotionsIcon fontSize='large'/>
                </div>
            </div>
        </div>
    );
};

export default Chat;