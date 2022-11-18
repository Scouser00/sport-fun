import axios from 'axios'
import React,{useContext, useEffect, useState} from 'react'
// import { weatherData } from './weatherData'

const WeatherContext=React.createContext()

const WeatherProvider = ({children}) => {
    const [query,setQuery]=useState('')
    const [selected,setSelected]=useState()
    const [weatherData,setWeatherData]=useState([])
    const [loading,setLoading]=useState(false)
    const [weatherCities,setWeatherCities]=useState([])
    const [hourForecast,setHourForecast]=useState(false)
    
    const fetchData=async (url)=>{
        setLoading(true)
        const response=await axios(url).catch((err)=>console.log(err))
        if(response){
            const data=response.data
            setWeatherData(data)
            setLoading(false)
        }
    }
    
    const fetchCities=async(url)=>{
        const response=await axios(url).catch((err)=>console.log(err))
        if(response){
            const data=response.data
            setWeatherCities(data)
            setLoading(false)
        }
        else{
            setLoading(false)
        }
    }
    
    const openModal=()=>{
        setHourForecast(true)
    }

    const closeModal=()=>{
        setHourForecast(false)
    }

    const inputChange=(e)=>{
        setQuery(e)
    }

    const change=(e)=>{
        setSelected(e.label)
    }

    useEffect(()=>{
        fetchData(`https://api.weatherapi.com/v1/forecast.json?key=${procces.env.WEATHER_APP_API_KEY}&q=${selected}&days=5&aqi=no&alerts=no`)
    },[selected])
    
    useEffect(()=>{
        fetchCities(`https://api.weatherapi.com/v1/search.json?key=${procces.env.WEATHER_APP_API_KEY}&q=${query}`)
        },[query])

  return (
    <WeatherContext.Provider value={{hourForecast,openModal,closeModal,selected,inputChange,weatherCities,loading,query,weatherData,setQuery,change}}>
        {children}
    </WeatherContext.Provider>
  )
}
export const useWeatherContext=()=>{
    return useContext(WeatherContext)
}

export {WeatherProvider,WeatherContext}