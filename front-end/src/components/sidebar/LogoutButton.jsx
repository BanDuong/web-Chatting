import React from 'react';
import { RiLogoutBoxLine } from "react-icons/ri";
import { useLogout } from "../../hooks/useLogout.js";

export const LogoutButton = () => {

  const { loading, logout } = useLogout();

  return (
    <div className='mt-auto'>
        <div className='pb-1 pl-1 pt-3'>
          {!loading ? (
            <RiLogoutBoxLine className='w-6 h-6 text-white cursor-pointer' onClick={logout}></RiLogoutBoxLine>
          ) : (
            <span className='loading loading-spinner'></span>
          )}
        </div>
    </div>
  )
}
