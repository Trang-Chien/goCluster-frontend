import React, { useEffect } from 'react';


const SetAvatar=({id, avatar, setAvatar, size})=> {

    useEffect(()=>{
        setAvatar(`${process.env.API_AVATAR}${id}`)
    }, [id, setAvatar])

    return (
        <div>
            
        </div>
    );
}

export default SetAvatar;