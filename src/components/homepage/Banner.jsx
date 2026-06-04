import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            {/* Added text-center here to ensure all text elements inherit center alignment */}
            <div className='container mx-auto flex flex-col items-center justify-center m-20 gap-5 text-center'>
                <h2 className='text-5xl font-bold'>Friends to keep close in your life</h2>
                
                {/* Removed items-center/justify-center and let text-center handle it */}
                <h2 className='text-slate-400'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the<br />
                    relationships that matter most.
                </h2>
                
                {/* Changed 'href' to 'to' for proper React Router navigation */}
                <Link to={'/'}>
                    <button className='btn btn-success'>+add Friends</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;