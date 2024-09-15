import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversation] = useState([]);

  useEffect(() =>{
    const getConversations = async () =>{
        setLoading(true);
        
        try{
            const res = await fetch("/api/users/getUserForSidebar");
            if(!res.ok){
                throw new Error('fetch data error');
            }

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            setConversation(data);
        }catch(e){
            console.error(e.message);
            toast.error(e.message);
        }finally{
            setLoading(false);
        }
        
    }
    getConversations();
  }, []);

  return {loading, conversations};
}
