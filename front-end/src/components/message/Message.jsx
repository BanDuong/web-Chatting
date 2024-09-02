import React from 'react'

export const Message = () => {
  return (
    <div className="chat chat-end mr-2">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50"> 12:45</time>
        </div>
        <div className="message chat-bubble text-white max-w-80 ">Xin chao toiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii co the lam wen voi ban duoc khong! Rat vui khi biet ban quan tam den toi</div>
        {/* <div className="chat-footer opacity-50">Delivered</div> */}
    </div>
  )
}
