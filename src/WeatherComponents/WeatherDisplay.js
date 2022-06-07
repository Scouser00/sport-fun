import React from 'react'
import { useWeatherContext } from './WeatherContext'
import { weatherData } from './weatherData'
const WeatherDisplay = () => {
    const {hourForecast,openModal,closeModal}=useWeatherContext()
    const days={
        0:'Sun',
        1:'Mon',
        2:'Tue',
        3:'Wed',
        4:'Thu',
        5:'Fri',
        6:'Sat'
    }
  
    const {location,current,forecast}=weatherData && weatherData
    const{name,region,country}=location && location
    const {wind_kph,pressure_mb,precip_mm,wind_dir,temp_c,condition,is_day}=current && current
    const {forecastday}=forecast
    const picture={
        backgroundImage:is_day===0?"url('https://max.nwstatic.co.uk/newsimages2016/Other/fullmoon-fp-crop.jpg?w=1200')":"url('https://media.istockphoto.com/photos/sun-on-blue-sky-picture-id1372419571?b=1&k=20&m=1372419571&s=170667a&w=0&h=4imKusTyijlQOKksfJsDPzAFHddtokz8u0axbbYQZkQ=')",
        backgroundSize:'cover',
    }
   console.log(weatherData.forecast.forecastday[0].hour);
  return (
    <>
    <div className='weatherHeader'><p>{name} Weather Forecast</p><span>{region}, {country}</span></div>
    <div style={picture} className='weatherDispaly'>
        <div className='weatherToday'>
            <div  className='weatherIcon'>
                <img src={condition.icon}/>
                <p>{condition.text}</p>
            </div>
            <div className='weatherInfo'>
                <p>Wind:{wind_kph}kmph</p>
                <p>Precip:{precip_mm}mm</p>
                <p>Pressure:{pressure_mb}mb</p>
                <h2>{temp_c} C</h2>
            </div>
        </div>
        {!hourForecast && <div className='openForecast24' onClick={openModal}>Check Weather For Next 24h</div>}
        {hourForecast && <div onClick={e=>{if(e.target.classList.contains('modalContainer'))closeModal()}}  className='modalContainer'>
            <div className='modalHour'>
            {weatherData.forecast.forecastday[0].hour.map((hourly,i)=>{
                const {condition, time_epoch,temp_c}=hourly
                const hour=new Date(time_epoch*1000).getHours()
                return <div key={i} className='forecastHour'>
                <p>{hour>9?hour:`0${hour}`}</p>
                <img src={condition.icon}/>
                <p>{temp_c} C</p>
            </div>
            })}
            </div>
        </div>}
        <div  className='weatherFuture'>
        {forecastday.map((forecast,i)=>{
            const {date_epoch,day}=forecast
            const whichDay=days[new Date(date_epoch*1000).getDay()]
            return <div key={i} className='forecastDay'>
                <p>{whichDay}</p>
                <img src={day.condition.icon}/>
                <p>{day.maxtemp_c} C</p>
            </div>
})}
        </div>
    </div> </>
  )
}

export default WeatherDisplay