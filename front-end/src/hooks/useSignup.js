import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

export const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    
    const signUp = async ({fullName, email, password, confirmPassword, gender}) =>{
        const checkInput = comparePassword({password, confirmPassword});
        if(!checkInput) return;

        setLoading(true);

        try{
            const res = await fetch("/api/auth/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({fullName, email, password, confirmPassword, gender}),
            });
            if(!res.ok){
                throw new Error('featch data error');
            }
            
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            
            // localStorage
            localStorage.setItem("chat-user", JSON.stringify(data));
            // Auth Context
            setAuthUser(data);
        }catch(e){
            console.error(e.message);
            toast.error('Sigup error!');
            // setLoading(false);
        }finally{
            setLoading(false);
        }
    }

    return {loading, signUp};
};

const comparePassword = ({password, confirmPassword}) =>{

    if(password !== confirmPassword){
        toast.error('Passwords do not match');
        return false;
    }

    return true;
}
