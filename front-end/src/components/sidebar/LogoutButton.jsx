import React from 'react';
import { RiLogoutBoxLine } from "react-icons/ri";

export const LogoutButton = () => {
  return (
    <div className='mt-auto'>
        <div className='pb-1 pl-1 pt-3'>
            <RiLogoutBoxLine className='w-6 h-6 text-white cursor-pointer'></RiLogoutBoxLine>
        </div>
    </div>
  )
}
