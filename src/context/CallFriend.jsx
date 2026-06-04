
import { useState } from 'react';
import { Call } from './CallContext';



const CallFriend = ({children}) => {
    const [callFriend,setCallFriend]= useState([]);
const data ={
    callFriend,setCallFriend,
};

    return (
        <Call.Provider value={data}>{children}</Call.Provider>
    );
};

export default CallFriend;
