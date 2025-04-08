import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<button onClick={toggleTheme} className='theme-btn'>
			{theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
		</button>
	)
}

export default ThemeToggle
