import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../hooks/zustand/useConversation";

// export const ConversationOne = ({conversation, lastIndex}) => { // same
export const ConversationOne = ({conversation, lastIndex}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  // console.log(onlineUsers)
  // console.log(conversation._id)
  // console.log(isOnline)
  return (
    <>
      <div className={`gap-2 flex items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-blue-400" : ""}
      `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="error!"/>
          </div>
        </div>

        <div className='user-name flex flex-col'>
          <p><span className='text-white'>{conversation.fullName}</span></p>
        </div>
      </div>

      {!lastIndex && <div className='divider my-0 py-0 h-1'></div>}
    </>
  )
}
