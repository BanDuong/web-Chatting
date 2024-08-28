import React from 'react'

export const ConversationOne = () => {
  return (
    <>
      <div className='gap-2 flex items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer'>
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

        <div className='user-name flex flex-col'>
          <p><span className='text-white'>Nguyen Van JohnWick</span></p>
        </div>
      </div>

      <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}
