import {useState} from 'react'

export const DarkMode = () => {
    const [ theme, setTheme ] = useState('dark');
    
    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    return [ theme, toggleTheme ];
}
