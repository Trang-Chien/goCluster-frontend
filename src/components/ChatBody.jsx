import React from 'react';

import Message from './Message';

const ChatBody=({changeDrawerRightType, changeDrawerRightStatus})=> {
    return (
        <div className='chat__body'>
            <Message changeDrawerRightType={changeDrawerRightType} changeDrawerRightStatus={changeDrawerRightStatus} sender='do thien'/>
            <Message changeDrawerRightType={changeDrawerRightType} sender='chien bui'/>
            <Message changeDrawerRightType={changeDrawerRightType} changeDrawerRightStatus={changeDrawerRightStatus} sender='nguyen ha'/>
            <Message changeDrawerRightType={changeDrawerRightType} changeDrawerRightStatus={changeDrawerRightStatus} sender='trang nguyen'/>
            <Message changeDrawerRightType={changeDrawerRightType} changeDrawerRightStatus={changeDrawerRightStatus} sender='do thien'/>
            <Message changeDrawerRightType={changeDrawerRightType} changeDrawerRightStatus={changeDrawerRightStatus} sender='chien bui'/>
            <Message changeDrawerRightType={changeDrawerRightType} changeDrawerRightStatus={changeDrawerRightStatus} sender='nguyen ha'/>
            <Message changeDrawerRightType={changeDrawerRightType} changeDrawerRightStatus={changeDrawerRightStatus} sender='trang nguyen'/>
            <Message changeDrawerRightType={changeDrawerRightType} changeDrawerRightStatus={changeDrawerRightStatus} sender='do thien'/>
            <Message changeDrawerRightType={changeDrawerRightType} changeDrawerRightStatus={changeDrawerRightStatus} sender='chien bui'/>
            <Message changeDrawerRightType={changeDrawerRightType} changeDrawerRightStatus={changeDrawerRightStatus} sender='nguyen ha'/>
            <Message changeDrawerRightType={changeDrawerRightType} changeDrawerRightStatus={changeDrawerRightStatus} sender='trang nguyen'/>
        </div>
    );
}

export default ChatBody;