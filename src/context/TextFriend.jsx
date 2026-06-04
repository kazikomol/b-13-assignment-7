
import { useState } from 'react';
import {  Text } from './TextContext';



const TextFriend = ({children}) => {
    const [textFriend,setTextFriend]= useState([]);
const data ={
    textFriend,setTextFriend,
};

    return (
        <Text.Provider value={data}>{children}</Text.Provider>
    );
};

export default TextFriend;