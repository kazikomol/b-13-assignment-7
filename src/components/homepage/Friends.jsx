import React from 'react';
import Card from '../ui/Card';
import UseFriends from '../../hooks/UseFriends';

const Friends = () => {
    const { friends, loading } = UseFriends();
    console.log(friends, loading);

    return (
        <div className='mt-11'>
            <h2 className='text-4xl font-bold mb-4'>Your Friends</h2>
            
            <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-6 items-center justify-center'>
                {loading ? (
                    
                    <div className="col-span-full flex flex-col items-center justify-center py-12 gap-3">
                        
                        <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
                        
                        <p className="text-slate-500 font-medium">Loading ...</p>
                    </div>
                ) : (
                    friends?.map((friend, index) => {
                        return (
                            <Card friend={friend} key={index} />
                        )
                    })
                )}
            </div>
        </div>
    );
};

export default Friends;