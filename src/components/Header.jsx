import ThemeToggle from './ThemeToggle'
const Header = () => {
	return (
		<header className='header container'>
			<h1 class='text-3xl font-bold underline'>Hello world!</h1>
			<ul className='header__list'>
				<li className='header__item'>Главная</li>
				<li className='header__item'>О нас</li>
				<li className='header__item'>Прайс</li>
			</ul>
			<ThemeToggle />
		</header>
	)
}

export default Header
