import React from 'react';
import { useGetConversation } from '../../hooks/useGetConversation';
import { ConversationOne } from './ConversationOne';


export const Conversations = () => {
  const {loading, conversations} = useGetConversation();
  
  return (
    <div className='flex flex-col py-2 overflow-auto'>

        {conversations.map((conversation, idx) =>(
          <ConversationOne
            key = {conversation._id}
            conversation = {conversation}
            lastIndex = {idx === conversations.length -1}
          ></ConversationOne>
        ))}

        {loading ? (<span className='loading loading-spinner mx-auto'></span>) : null}
    </div>
  )
}
