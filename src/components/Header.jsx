import ThemeToggle from './ThemeToggle'
const Header = () => {
	return (
		<header className='flex justify-between w-full max-w-7xl mx-auto h-20 items-center'>
			<div>Logo</div>
			<ul className='flex gap-30'>
				<li>
					<a href='#'>Главная</a>
				</li>
				<li>
					<a href='#'>О нас</a>
				</li>
				<li>
					<a href='#'>Прайс</a>
				</li>
			</ul>
			<ThemeToggle />
		</header>
	)
}

export default Header
