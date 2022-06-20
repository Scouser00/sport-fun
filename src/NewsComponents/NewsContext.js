import React, { useState,useContext } from "react";
import axios from 'axios'

const NewsContext=React.createContext()

const NewsProvider=({children})=>{
const [news,setNews]=useState([])
const [loading,setLoading]=useState(false)
const [values,setValues]=useState({query:'nba',country:'us',category:"sports"})
const {query,country,category}=values

const fetchNews=async(url)=>{

    setLoading(true)
    const response=await axios(url).catch((err)=>console.log(err))
    const data=response.data
        if(data.articles){    
            setNews(data.articles)
            setLoading(false)
        } 
    
}
const submitNews=(e)=>{
    e.preventDefault();
    fetchNews(`https://newsapi.org/v2/top-headlines?lang=us&q=${query}&country=${country}&category=${category}&apiKey=0e37967af86c4c1fbfbacd4bc72e4214`)
}

const change=(e)=>{
    const key=e.target.name
    const value=e.target.value
    setValues(pre=>({...pre,[key]:value}))
}
    return (<NewsContext.Provider value={{loading,news,...values,change,submitNews}}>
        {children}
    </NewsContext.Provider>
    )
}

export const useNewsContext=()=>{
    return useContext(NewsContext)
}

export {NewsProvider,NewsContext}