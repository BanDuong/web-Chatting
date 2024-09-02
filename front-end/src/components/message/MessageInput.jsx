import React from 'react';
import { BsFillSendFill } from "react-icons/bs";
import { FaFileMedical } from "react-icons/fa6";
import { MdInsertEmoticon, MdOutlineKeyboardVoice } from "react-icons/md";

export const MessageInput = () => {
  return (
    <div className='flex'>
      <div className='message-input-more flex p-1 text-blue-300'>
        <button>
          <FaFileMedical className='size-5'/>
        </button>
        <button>
          <MdOutlineKeyboardVoice className='size-5'/>
        </button>
        <button>
          <MdInsertEmoticon className='size-5'></MdInsertEmoticon>
        </button>
      </div>

      <div className='message-input-send p-1 flex w-full'>
        <form className='items-center w-full relative'>
          <input type='text' placeholder='type....' className='pr-12 text-white font-semibold mr-2 rounded-xl input input-bordered w-full'>
          </input>
          <button className='absolute top-4 end-4'>
            <BsFillSendFill className='size-5 text-blue-400'/>
          </button>
        </form>
      </div>

    </div>
  )
}