import React, { useContext } from 'react'
import { UserContext } from '../user.context'
import { Navigate, Outlet } from 'react-router-dom';

export const Protected = () => {

    const [user, setUser] = useContext(UserContext);

    return (
        <div>
            {user ? <Outlet /> : <Navigate to={"/signin"} />}
        </div>
    )
}
