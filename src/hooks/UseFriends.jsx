import React, { useEffect, useState } from 'react';

const UseFriends = () => {
    const[friends,setFriends]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchData=async()=>{
            const res = await fetch("/data.json");
            const data = await res.json();
            console.log(data);
            setFriends(data);
            setLoading(false);
        };
        fetchData();
    },[]);

    console.log(friends,"friends");
    return {friends,loading};
};

export default UseFriends;