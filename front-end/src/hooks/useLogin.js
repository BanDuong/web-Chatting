import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (email, password) =>{
        if(!checkLoginInput(email, password)){
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });
            // console.log(res.json());
            // if(!res.ok){
            //     throw new Error('featch data error');
            // }
            
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);

        } catch (e) {
            console.error(e.message);
            toast.error(e.message);
        } finally {
            setLoading(false);
        }
    }

    return {loading, login};
}

function checkLoginInput(email, password){
    if(!email || !password){
        toast.error("Please fill all fields!");
        return false;
    }
    return true;
}
