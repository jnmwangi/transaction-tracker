import React, { useContext } from 'react'
import { ThemeContext } from '../theme.context'

export const Nav = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    function handleChange(evt) {
        setTheme(evt.target.value === 'dark' ? 'light' : 'dark')
    }
    return (
        <header className='bg-info p-2 d-flex justify-content-between align-items-center'>
            <h1 className='text-center'>Bank Transactions</h1>
            <div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked={theme === 'dark'} value={theme} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="switchCheckChecked">{theme}</label>
                </div>
            </div>
        </header>
    )
}
