import { useEffect, useRef } from 'react';
import { useGetInputMessage } from '../../hooks/useGetInputMessage';
import { useListenMessage } from '../../hooks/useListenMessage';
import { Message } from './Message';

export const FrameMessage = () => {
  const {messages, loading} = useGetInputMessage(); // message is an Object
  useListenMessage();
  const lastMessageRef = useRef();

  useEffect(() =>{
    setTimeout(() =>{
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
    },0)
  }, [messages])

  return (
    <div className='font-semibold overflow-auto flex-1 py-2'>
      {!loading && Object.entries(messages).length === 0 && (
        <p className='text-center font-semibold text-xl'>Let's send a message to start the conversation!</p>
      )}

      {!loading && messages.length > 0 &&
        messages.map((mess) =>(
          <div key={mess._id} ref={lastMessageRef}>
            <Message message={mess}/>
          </div>
         )
      )}
        
    </div>
  );
};
