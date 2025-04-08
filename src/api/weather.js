import axios from 'axios'

const API_KEY = '6974b7d2150e4012a7d171513250804';

export const fetchCurrentWeather = async (city) => {
  try {
		console.log(city)
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`, {
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных о погоде:', error);
    throw error;
  }
};