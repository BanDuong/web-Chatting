import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../hooks/zustand/useConversation';

export const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const sendFromMe = message.senderId === authUser.id;
  const chatClassName = sendFromMe ? 'chat-end' : 'chat-start';
  const profilePic = sendFromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = sendFromMe ? 'bg-gray-600' : 'bg-slate-400';
  const name = sendFromMe ? authUser.fullName : selectedConversation?.fullName;
  console.log(message)
  return (
    <div className={`chat ${chatClassName} gap-1 mx-2`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
                    alt="error"
                    src={profilePic} />
            </div>
        </div>
        <div className="chat-header">
            {name}
        </div>
        <div className={`message ${bubbleBgColor} chat-bubble text-white max-w-80`}>
          {message.message}
        </div>
        <div className={`chat-footer text-xs opacity-50`}> {message.createdAt.split("T")[1].substring(0,5)}</div>
    </div>
  )
}
