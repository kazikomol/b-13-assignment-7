import React, { use, useContext } from 'react';
import { useParams } from 'react-router';
import UseFriends from '../../hooks/UseFriends';
import { FiArchive, FiPhoneCall } from 'react-icons/fi';
import { LuMessageSquareMore } from 'react-icons/lu';
import { MdOutlineVideocam } from 'react-icons/md';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { Call } from '../../context/CallContext';
import { Text } from '../../context/TextContext';
import { Video } from '../../context/VideoContext';
import { toast } from 'react-toastify';



const StatCard = ({ value, label }) => (
  <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
    <h2 className="text-5xl font-bold text-emerald-900">{value}</h2>
    <p className="mt-3 text-gray-500">{label}</p>
  </div>
);

const FriendsDetails = () => {
    const {id} = useParams();
    console.log(id,"id");
    const {friends,loading} = UseFriends();
    const  expectedFriend = friends.find ((friend) => String(friend.id) === id);


    const {callFriend,setCallFriend} = useContext(Call);
    const {textFriend,setTextFriend} = useContext(Text);
    const {videoFriend,setVideoFriend} = useContext(Video);
   
    

const handleCallFriend = ()=>{
  setCallFriend([...callFriend,expectedFriend]);
  toast(`you have a call with ${expectedFriend.name}`)
};

const handleTextFriend=()=>{
  setTextFriend([...textFriend,expectedFriend]);
  toast(`you have a text with ${expectedFriend.name}`)
};

const handleVideoFriend = () =>{
  setVideoFriend([...videoFriend,expectedFriend]);
  toast(`you have a video with ${expectedFriend.name}`)
}

console.log(callFriend,'callfriend')
console.log(textFriend,"textFriend")
   
     if (loading || !expectedFriend) {
    return <div className="p-5 text-center">Loading friend details...</div>; 
  }

    
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-5">
        {/* Left Side */}
        <div className="lg:col-span-4 space-y-4">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
            <img
              src={expectedFriend.picture}
              alt={friends}
              className="w-20 h-20 rounded-full mx-auto object-cover"
            />

            <h2 className="mt-4 text-3xl font-bold text-gray-800">
              {expectedFriend.name}
            </h2>

            <div className="mt-4 flex justify-center gap-2 flex-wrap">
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">
                {expectedFriend.status}
              </span>

              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                {expectedFriend.tags}
              </span>
            </div>

            <p className="italic text-gray-500 mt-6 text-lg">
              "{expectedFriend.bio}"
            </p>

            <p className="mt-4 text-gray-500">
              Preferred: {expectedFriend.email}
            </p>
          </div>

          {/* Actions */}
          <button className='btn w-100 h-15'>
            <div className='flex flex-row gap-3'>
            <RiNotificationSnoozeLine className='w-5 h-5' />
            <h2>Snooze 2 Weeks</h2>
          </div>
          </button>

          <button className='btn w-100 h-15'>
            <div className='flex flex-row gap-3'>
            <FiArchive className='w-5 h-5' />
            <h2>Archive</h2>
          </div>
          </button>

          <button className='btn w-100 h-15'>
            <div className='flex flex-row gap-3'>
            <RiDeleteBin6Line className='w-5 h-5 text-red-400' />
            <h2 className='text-red-400'>Delete</h2>
          </div>
          </button>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-8 space-y-5">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-5">
            <StatCard
              value={expectedFriend.days_since_contact}
              label="Days Since Contact"
            />

            <StatCard
              value={expectedFriend.goal}
              label="Goal (Days)"
            />

            <StatCard
              value={expectedFriend.next_due_date}
              label="Next Due"
            />
          </div>

          {/* Goal Card */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold text-emerald-900">
                  Relationship Goal
                </h3>

                <p className="mt-4 text-xl text-gray-700">
                  Connect every{" "}
                  <span className="font-bold">
                    {expectedFriend.goal} days
                  </span>
                </p>
              </div>

              <button className="px-5 py-2 border rounded-lg hover:bg-gray-50">
                Edit
              </button>
            </div>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-50 p-6">
            <h3 className="text-2xl font-semibold text-emerald-900 mb-6">
              Quick Check-In
            </h3>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 border-slate-50">
              <button className='btn h-36 border rounded-2xl ' onClick={handleCallFriend}>
                <div className='flex flex-col gap-y-2'>
                  <FiPhoneCall className='w-10 h-10'/>
                <h4 className='text-2xl'>Call</h4>
                </div>
              </button>

             <button className='btn h-36 border rounded-2xl'onClick={handleTextFriend}>
                <div className='flex flex-col gap-y-2'>
                  <LuMessageSquareMore  className='w-10 h-10'/>
                <h4 className='text-2xl'>Text</h4>
                </div>
              </button>

              <button className='btn h-36 border rounded-2xl' onClick={handleVideoFriend}>
                <div className='flex flex-col gap-y-2'>
                  <MdOutlineVideocam className='w-10 h-10'/>
                <h4 className='text-2xl'>Video</h4>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default FriendsDetails;