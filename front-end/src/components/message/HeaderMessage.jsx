import React from 'react';
import { IoMdPersonAdd } from "react-icons/io";
import { MdMoreVert, MdVideoCall, MdWifiCalling3 } from "react-icons/md";

export const HeaderMessage = ({selectedConversation}) => {
  return (
    <div className='header-user flex items-center justify-between font-semibold'>
        <div className='flex items-center'>
            <div className="avatar online m-2 cursor-pointer">
                <div className="w-12 rounded-full">
                    <img src={selectedConversation.profilePic} alt="error" />
                </div>
            </div>

            <div className='cursor-pointer'>
                <p><span className='text-white'>{selectedConversation.fullName}</span></p>
            </div>
        </div>
            
        <div className='flex items-center text-blue-400 m-2 justify-evenly cursor-pointer'>
            <div>
                <IoMdPersonAdd className='size-6 mr-2'></IoMdPersonAdd>
            </div>

            <div>
                <MdWifiCalling3 className='size-6 mr-2'></MdWifiCalling3>
            </div>

            <div>
                <MdVideoCall className='size-6'></MdVideoCall>
            </div>

            <div>
                <MdMoreVert className='size-6'></MdMoreVert>
            </div>
        </div>
    </div>
  )
}
