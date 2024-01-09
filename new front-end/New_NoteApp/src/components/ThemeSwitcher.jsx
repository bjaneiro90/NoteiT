import React, { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs'

export const ThemeSwitcher = () => {
const [theme,setTheme] = useState(null)

useEffect(() => {
    if(window.matchMedia("prefer-color-scheme: dark").matches) {
        setTheme('dark')
    }else {
        setTheme('light')
    }
}, [])

useEffect(() => {
    if(theme === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}, [theme])

const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
}

    return (
        <button
        onClick={handleThemeSwitch}
        className=''
        >
            {theme === 'dark' ?<i class="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
        </button>
    )
}

export default ThemeSwitcher