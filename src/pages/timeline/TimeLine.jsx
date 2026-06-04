import React, { useContext } from 'react';
import { Call } from '../../context/CallContext';
import { Text } from '../../context/TextContext';
import { Video } from '../../context/VideoContext';
import call from '../../assets/call.png';
import text from '../../assets/text.png';
import video from '../../assets/video.png';

const TimeLine = () => {
    const {callFriend,setCallFriend} = useContext(Call);
    const {textFriend,setTextFriend} = useContext(Text);
    const {videoFriend,setVideoFriend} = useContext(Video);
    
        return (
            
            <div className='mt-20 gap-10'>
                <h2 className='text-5xl font-bold'>TimeLine</h2>
                {callFriend,textFriend,videoFriend.length === 0?<h2 className=' text-5xl text-slate-400 text-center mb-10'>No interaction found</h2> :
                  <div className='gap-y-10'>
                    <div>
                    {
                    callFriend.map((friend,ind) => {
                        return <div  key={ind} className="flex items-center p-4 px-6 bg-white border border-slate-200 rounded-xl shadow-sm max-w-full font-sans m-3">
    
      <img src={call} alt="" />
      
     
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-normal text-slate-500">
          <span className="text-[#1e3a2f] font-semibold">Call</span> with {friend.name}
        </h3>
        <p className="text-sm text-slate-500">{friend.next_due_date}</p>
      </div>
    </div>
                    })
                }
                </div>
                <div>
                {
                    textFriend.map((friend,ind) => {
                        return <div key={ind} className="flex items-center p-4 px-6 bg-white border border-slate-200 rounded-xl shadow-sm max-w-full font-sans m-3">
     
      <img src={text} alt="" />
      
    
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-normal text-slate-500">
          <span className="text-[#1e3a2f] font-semibold">Text</span> with {friend.name}
        </h3>
        <p className="text-sm text-slate-500">{friend.next_due_date}</p>
      </div>
    </div>
                    })
                }
            </div>
            <div>
                {
                    videoFriend.map((friend,ind) => {
                        return <div key={ind} className="flex items-center p-4 px-6 bg-white border border-slate-200 rounded-xl shadow-sm max-w-full font-sans m-3">
      
      <img src={video} alt="" />
      
      
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-normal text-slate-500">
          <span className="text-[#1e3a2f] font-semibold">Video</span> with {friend.name}
        </h3>
        <p className="text-sm text-slate-500">{friend.next_due_date}</p>
      </div>
    </div>
                    })
                }
            </div>
                </div>
                }
            </div>
            
        )
};

export default TimeLine;