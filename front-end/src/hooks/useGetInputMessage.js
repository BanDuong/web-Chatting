import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useConversation from './zustand/useConversation';

export const useGetInputMessage = () => {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    useEffect(() =>{
        const getMessages = async () =>{
            setLoading(true);
            try{
                const res = await fetch(`/api/message/getMes/${selectedConversation._id}`);
                if(!res.ok){
                    throw new Error('fetch data error');
                }

                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }

                setMessages(data);
            }catch(e){
                toast.error(e.messages);
            }finally{
                setLoading(false);
            }
        };
        
        if(selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);

    return {messages, loading};
}
