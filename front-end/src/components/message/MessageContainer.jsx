import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../hooks/zustand/useConversation';
import { FrameMessage } from './FrameMessage';
import { HeaderMessage } from './HeaderMessage';
import { MessageInput } from './MessageInput';


export const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  // (unmount react) reset state whenever login or refresh page (clear every state)
  // == selectedConversation = null
  useEffect(() =>{
    return setSelectedConversation(null);
  },[setSelectedConversation]);

  return (
    <div className='md:min-w-[750px] flex flex-col'>
      { !selectedConversation ? (<NoChatSelected></NoChatSelected>) : (
        <>
          <HeaderMessage selectedConversation={selectedConversation}></HeaderMessage>
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
  const {authUser} = useAuthContext();

  return(
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <p><span>Xin chao {authUser.fullName}</span></p>
      <img src='hinh-anh-vay-tay-chao-powerpoint-dep_021900843.gif' className='size-66'></img>
    </div>
  );
};
