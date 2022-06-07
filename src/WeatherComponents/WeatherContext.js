import React,{useContext, useEffect, useState} from 'react'
import { weatherData } from './weatherData'

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
        const response=await fetch(url)
        const data=await response.json()
        try{
        setWeatherData(data)
        setLoading(false)
    }catch(err){console.error(err)}
}
const fetchCities=async(url)=>{
    const response=await fetch(url)
    const data=await response.json()
    try{
        setWeatherCities(data)
        setLoading(false)
    }catch(err){console.error(err)}
}
const openModal=()=>{
    setHourForecast(true)
}
const closeModal=()=>{
    setHourForecast(false)
}
    const inputChange=(e)=>{
        setQuery(e)
        console.log(e);
    }
    console.log(selected);
    const change=(e)=>{
        setSelected(e.label)
    }
    useEffect(()=>{
        fetchData(`http://api.weatherapi.com/v1/forecast.json?key=4e68fc2b74db4359bbc165739220206&q=${selected}&days=5&aqi=no&alerts=no`)
    },[selected])
    //useEffect(()=>{
    //    fetchCities(`http://api.weatherapi.com/v1/search.json?key=4e68fc2b74db4359bbc165739220206&q=${query}`)
    //    },[query])
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