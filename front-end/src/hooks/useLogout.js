import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


export const useLogout = () =>{
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () =>{
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if(!res.ok){
                throw new Error('featch data error');
            }
            
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.removeItem("chat-user");
            setAuthUser(null);
        }catch(e){
            console.error(e.message);
            toast.error('Sigup error!');
        }finally{
            setLoading(false);
        }
    };

    return {loading, logout};
};
