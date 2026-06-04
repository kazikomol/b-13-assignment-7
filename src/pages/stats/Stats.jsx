import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { Call } from '../../context/CallContext';
import { Text } from '../../context/TextContext';
import { Video } from '../../context/VideoContext';

const Stats = () => {
    const {callFriend} = useContext(Call);
    const {textFriend} = useContext(Text);
    const {videoFriend}= useContext(Video);

    const data = [
        {
            name:"call" , value: callFriend.length, fill:"#0088FE"
        },
        {
            name:"text" , value: textFriend.length, fill:"#FF8042"
        },
        {
            name:"Video" , value: videoFriend.length, fill:"green"
        },
    ]
    return (
         <div >
            <h2 className='text-5xl font-bold m-5'>Friednship Analytics</h2>
            <div className='flex justify-center my-10 border border-white'>
            
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend/>
      <Tooltip/>
      
    </PieChart>
         </div>
         </div>
    );
};

export default Stats;