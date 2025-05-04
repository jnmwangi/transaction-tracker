import React, { useContext, useState } from 'react'
import { ThemeContext } from '../theme.context'
import { UserContext } from '../user.context';
import { NavLink } from 'react-router-dom';

export const Nav = () => {

    const [theme, setTheme] = useContext(ThemeContext);
    const [user, setUser] = useContext(UserContext);

    function handleSignOut() {
        sessionStorage.removeItem("user");
        setUser(null);
    }

    function handleChange(evt) {
        setTheme(evt.target.value === 'dark' ? 'light' : 'dark')
    }

    return (
        <header className={`bg-${theme === 'light' ? 'info' : 'dark text-light border-bottom border-secondary'} p-2 d-flex justify-content-between align-items-center`}>
            <h1 className='me-auto'>Bank Transactions</h1>

            <ul className="nav">
                <NavLink to="/" className='nav-link'>Home</NavLink>

                {user == null && <>
                    <li className="nav-item">
                        <NavLink to="/signup" className='nav-link'>Sign Up</NavLink>
                        {/* <a className="nav-link active" aria-current="page" href="#">Sign Up</a> */}
                    </li>
                    <li className="nav-item">
                        <NavLink to="/signin" className='nav-link'>Sign In</NavLink>
                        {/* <a className="nav-link" href="#">Sign In</a> */}
                    </li>
                </>}



                {user !== null && <>
                    <li className="nav-item">
                        <NavLink to="/tx" className='nav-link'>Transactions</NavLink>
                        {/* <a className="nav-link" href="#">Transactions</a> */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={handleSignOut}>Sign Out</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/profile"} className={'nav-link'}>{user.name}</NavLink>
                    </li>
                </>}

            </ul>

            <button className="btn" onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>
                <i className={`bi bi-${theme === 'light' ?'moon-stars':'sun'}`}></i>
            </button>

        </header>
    )
}
