import React, { useContext } from 'react'
import { UserContext } from './user.context'

export const Profile = () => {

  const [user] = useContext(UserContext)
  return (
    <div>{user ? user.name : "Login"}</div>
  )
}
