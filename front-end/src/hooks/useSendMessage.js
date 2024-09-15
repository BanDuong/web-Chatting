import { useState } from 'react';
import toast from 'react-hot-toast';
import useConversation from './zustand/useConversation';

export const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    const sendMessage = async (message) =>{
        setLoading(true);
        try{
            const res = await fetch(`/api/message/send/${selectedConversation._id}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message})
            });

            if(!res.ok){
                throw new Error('featch data error');
            }

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            setMessages([...messages, data]);
        }catch(e){
            console.error(e.message);
            toast.error(e.message);
        }finally{
            setLoading(false);
        }
    }

    return {loading, sendMessage};
}
