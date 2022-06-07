import React from 'react'
import { useQuizContext } from '../QuizComponents/contextQuiz'

const ModalQuiz = () => {
    const {correct,number,tryAgain}=useQuizContext()
  return (
    <div className='modalContainer'>
        <div className='modalContent'>
            <h1>You got {correct} of {number} question right answered</h1>
            <button onClick={tryAgain}>Try Again</button>
        </div>
    </div>
  )
}

export default ModalQuiz