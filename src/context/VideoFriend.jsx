import { useState } from 'react';
import { Video } from './VideoContext';




const VideoFriend = ({children}) => {
    const [videoFriend,setVideoFriend]= useState([]);
const data ={
    videoFriend,setVideoFriend,
};

    return (
        <Video.Provider value={data}>{children}</Video.Provider>
    );
};

export default VideoFriend;
