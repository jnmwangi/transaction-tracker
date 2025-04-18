import React, { useContext, useState } from 'react'
import { ThemeContext } from '../theme.context'
import { UserContext } from '../user.context';
import { Link } from 'react-router-dom';

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
        <header className='bg-info p-2 d-flex justify-content-between align-items-center'>
            <h1 className='text-center'>Bank Transactions</h1>

            <ul className="nav">
                <Link to="/" className='nav-link'>Home</Link>

                {user == null && <>
                    <li className="nav-item">
                        <Link to="/signup" className='nav-link'>Sign Up</Link>
                        {/* <a className="nav-link active" aria-current="page" href="#">Sign Up</a> */}
                    </li>
                    <li className="nav-item">
                        <Link to="/signin" className='nav-link'>Sign In</Link>
                        {/* <a className="nav-link" href="#">Sign In</a> */}
                    </li>
                </>}



                {user !== null && <>
                    <li className="nav-item">
                        <Link to="/transactions" className='nav-link'>Transactions</Link>
                        {/* <a className="nav-link" href="#">Transactions</a> */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={handleSignOut}>Sign Out</a>
                    </li>
                    <li className="nav-item">
                        {user.name}
                    </li>
                </>}

                <li className="nav-item">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked={theme === 'dark'} value={theme} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="switchCheckChecked">{theme}</label>
                    </div>
                </li>
            </ul>


        </header>
    )
}
