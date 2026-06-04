import React from 'react';
import CallFriend from '../../context/CallFriend';
import TextFriend from '../../context/TextFriend';
import VideoFriend from '../../context/VideoFriend';

const AllProviders = ({ children }) => {
  return (
    <CallFriend>
      <TextFriend>
        <VideoFriend>
          {children}
        </VideoFriend>
      </TextFriend>
    </CallFriend>
  );
};

export default AllProviders;