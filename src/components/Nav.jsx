import React, { useContext } from 'react'
import { Profile } from './Profile'
import { UserContext } from './user.context'

export const Nav = ({user}) => {

  return (
    <header className='bg-info p-2'>
        <h1 className='text-center'>Bank Transactions</h1>
        <Profile />
    </header>
  )
}
