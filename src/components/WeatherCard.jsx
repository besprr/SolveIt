import React, { useState } from 'react'
import { fetchCurrentWeather } from '../api/weather'

const WeatherCard = () => {
	const [weather, setWeather] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [city, setCity] = useState('')

	const getWeather = async cityName => {
		setLoading(true)
		setError(null)
		try {
			const data = await fetchCurrentWeather(cityName)
			setWeather(data)
		} catch (err) {
			setError('Не удалось загрузить данные о погоде')
		} finally {
			setLoading(false)
		}
	}

	const handleInputChange = e => {
		setCity(e.target.value)
	}

	const handleButtonClick = () => {
		if (city.trim() !== '') {
			getWeather(city)
		} else {
			setError('Введите название города')
		}
	}


	return (
		<div className='flex items-center justify-center flex-col gap-y-10 h-screen'>
			<input
				type='text'
				placeholder='Введите город'
				className='border border-solid rounded-2xl p-2'
				value={city}
				onChange={handleInputChange}
			/>
			<button
				className='w-70 bg-gray-200 p-3 rounded-2xl cursor-pointer'
				onClick={handleButtonClick}
			>
				Подтвердить
			</button>
			{loading && <div className='text-3xl'>Загрузка...</div>}
			{error && <div>{error}</div>}
			{weather && (
				<div className='flex flex-col gap-5 items-center justify-center border-solid border w-70 mx-auto rounded-2xl p-5'>
					<h2 className='text-lg'>Погода в {weather.location.name}</h2>
					<p>Температура: {weather.current.temp_c}°C</p>
					<p>Условия: {weather.current.condition.text}</p>
					<img
						src={weather.current.condition.icon}
						alt='Погодные условия'
						width='50px'
					/>
				</div>
			)}
		</div>
	)
}

export default WeatherCard
