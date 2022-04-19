import React from 'react';

import Message from './Message';

const ChatBody=(props)=> {
    return (
        <div className='chat__body'>
            <Message sender='do thien'/>
            <Message sender='chien bui'/>
            <Message sender='nguyen ha'/>
            <Message sender='trang nguyen'/>
            <Message sender='do thien'/>
            <Message sender='chien bui'/>
            <Message sender='nguyen ha'/>
            <Message sender='trang nguyen'/>
            <Message sender='do thien'/>
            <Message sender='chien bui'/>
            <Message sender='nguyen ha'/>
            <Message sender='trang nguyen'/>
        </div>
    );
}

export default ChatBody;