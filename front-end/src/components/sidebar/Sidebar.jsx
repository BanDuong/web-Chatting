import React from 'react'
import { Conversations } from './Conversations'
import { LogoutButton } from './LogoutButton'
import { SearchInput } from './SearchInput'

export const Sidebar = () => {
  return (
    <div className='flex flex-col border-r-2 border-blue-500 p-1'>
        <SearchInput></SearchInput>
        <div className='divider px-3 my-0'></div> {/* dau gach ngan cach */}
        <Conversations></Conversations>
        <LogoutButton></LogoutButton>
    </div>
  )
}
