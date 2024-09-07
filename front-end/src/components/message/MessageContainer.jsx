import React from 'react';
import { FrameMessage } from './FrameMessage';
import { HeaderMessage } from './HeaderMessage';
import { MessageInput } from './MessageInput';


export const MessageContainer = () => {
  const noChattingWithSomeOne = true;

  return (
    <div className='md:min-w-[750px] flex flex-col'>
      { noChattingWithSomeOne ? (<NoChatSelected></NoChatSelected>) : (
        <>
          <HeaderMessage></HeaderMessage>
          <div className='divider my-0 py-0 h-1'></div>
          <FrameMessage></FrameMessage>
          <div className='divider my-0 py-0 h-1 mt-auto'></div>
          <MessageInput></MessageInput>
        </>
      )}
    </div>
  );
};

const NoChatSelected = () =>{
  return(
    <div className='flex items-center justify-center w-full h-full'>
      <img src='hinh-anh-vay-tay-chao-powerpoint-dep_021900843.gif' className='size-66'></img>
    </div>
  );
};
