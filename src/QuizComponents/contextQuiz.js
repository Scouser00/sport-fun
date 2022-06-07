import React, { useState,useContext, useEffect } from "react";

const QuizContext=React.createContext()

const categories={
    "General Knowledge":9,
    "Entertainment: Video Games":15,
    "Science & Nature":17,
    "Science: Computers":18,
    "Science: Mathematics":19,
    "Mythology":20,
    "Sports":21,
    "Geography":22,
    "History":23,
    "Celebrities":26,
    "Entertainment: Comics":29,
    "Entertainment: Japanese Anime & Manga":31}

const QuizProvider=({children})=>{
    const [questions,setQuestions]=useState([])
    const [setup,setSetup]=useState(true)
    const [loading,setLoading]=useState(false)
    const [values,setValues]=useState({number:5,difficulty:'easy',category:'Sports'})
    const [correct,setCorrect]=useState(0)
    const [index,setIndex]=useState(0)
    const [endQuiz,setEndQuiz]=useState(true)

    const tryAgain=()=>{
        setCorrect(0)
        setIndex(0)
        setSetup(true)
    }
    const fetchQuestions=async()=>{
        setEndQuiz(false)
        setLoading(true)
        setSetup(false)
        const response=await fetch(`https://opentdb.com/api.php?amount=${values.number}&category=${categories[values.category]}&difficulty=${values.difficulty}&type=multiple`)
        const data=await response.json()
        if(data.results){
            setQuestions(data.results)
            setLoading(false)
            setSetup(false)
        }
        else{
            setSetup(true)
        }
    }
   
    const changeQuizValues=(e)=>{
        if(e.target.name==='number'){
            setValues(pre=>({...pre,number:e.target.value}))
        }
        if(e.target.name==='difficulty'){
            setValues(pre=>({...pre,difficulty:e.target.value}))
        }
        if(e.target.name==='category'){
            setValues(pre=>({...pre,category:e.target.value}))
        }
    }
    const submitQuiz=(e)=>{
        e.preventDefault()
        fetchQuestions() 
       }
      
    const checkAnswer=(e,correctAnswer)=>{
        if(e.target.innerHTML===correctAnswer){
            setCorrect(pre=>pre+1)
            if(index<values.number-1){
                setIndex(pre=>pre+1)
            }
            else{setEndQuiz(true)
            }
        }
        else{
            if(index<values.number-1){
                setIndex(pre=>pre+1)
            }
            else{setEndQuiz(true)
            }
        }
       }
       const nextQuiz=()=>{
        if(index<values.number-1){
            setIndex(pre=>pre+1)
        }
        else{setEndQuiz(true)
        }
       }
    return (<QuizContext.Provider value={{nextQuiz,tryAgain,endQuiz,correct,index,setIndex,checkAnswer,loading,questions,setup,submitQuiz,setSetup,...values,changeQuizValues}}>
        {children}
    </QuizContext.Provider>
    )
}

export const useQuizContext=()=>{
    return useContext(QuizContext)
}

export {QuizProvider,QuizContext}