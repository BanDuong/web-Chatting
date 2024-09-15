import { useState } from "react";
import toast from "react-hot-toast";
import { TbUserSearch } from "react-icons/tb";
import { useGetConversation } from "../../hooks/useGetConversation";
import useConversation from "../../hooks/zustand/useConversation";

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversation();

  const handleInputSearch = (e) =>{
    e.preventDefault();
    if(!search) return;

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }else{
      toast.error("No user found");
    }
  }

  return (
    <form className='flex items-center gap-1 w-80 mt-1' onSubmit={handleInputSearch}>
        <input type='text' placeholder='Search...' className='text-purple-500 w-full rounded-full input input-bordered'
        value={search} onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-circle bg-blue-400 text-white'><TbUserSearch></TbUserSearch></button>
    </form>
  )
}
