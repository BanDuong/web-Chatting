import React from 'react';
import { TbUserSearch } from "react-icons/tb";

export const SearchInput = () => {
  return (
    <form className='flex items-center gap-1 w-80 mt-1'>
        <input type='text' placeholder='Search...' className='text-purple-500 w-full rounded-full input input-bordered' />
        <button type='submit' className='btn btn-circle bg-blue-400 text-white'><TbUserSearch></TbUserSearch></button>
    </form>
  )
}
