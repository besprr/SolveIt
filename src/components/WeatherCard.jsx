import React, { useEffect, useState } from 'react'
import { fetchCurrentWeather } from '../api/weather'

const WeatherCard = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchCurrentWeather(city);
        setWeather(data);
      } catch (err) {
        setError('Не удалось загрузить данные о погоде');
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [city]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='flex flex-col gap-5 items-center justify-center border-solid border w-40 mx-auto rounded-2xl'>
      <h2 className='text-'>Погода в {weather.location.name}</h2>
      <p>Температура: {weather.current.temp_c}°C</p>
      <p>Условия: {weather.current.condition.text}</p>
      <img  src={weather.current.condition.icon} alt="Погодные условия" width='50px' />
    </div>
  );
};

export default WeatherCard;