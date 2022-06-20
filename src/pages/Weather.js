import React from 'react'
import { useWeatherContext } from '../WeatherComponents/WeatherContext'
import Loading from '../Loading';
import WeatherDisplay from '../WeatherComponents/WeatherDisplay';
import Select from 'react-select';
import { weatherCities } from '../WeatherComponents/weatherData';

const Weather = () => {
    //  add 'weatherCities' to object bellow... because limited API calls for searching

    const {inputChange,weatherData,change,query,loading}=useWeatherContext()
    console.log(weatherData);
  return (
    <div className='weatherContainer'>   
         <Select className='selectWeather' value={query} options={weatherCities.length>0?weatherCities.map(x=>({label:x.name,value:x.id})):[]} onInputChange={inputChange} onChange={change}/> 

        <div  className='weatherContent'>
            {loading && <Loading/>}
            {weatherData.current && <WeatherDisplay/>}
        </div>
    </div>
  )
}

export default Weather

