import React from 'react';
import Banner from '../../components/homepage/Banner';

import Statss from '../../components/homepage/Statss';
import Friends from '../../components/homepage/Friends';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Statss/>
            <Friends/>

        </div>
    );
};

export default HomePage;