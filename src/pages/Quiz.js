import React from 'react'
import { useQuizContext } from '../QuizComponents/contextQuiz'
import SetupQuiz from '../QuizComponents/SetupQuiz'
import ModalQuiz from '../QuizComponents/ModalQuiz'
import Loading from '../Loading'
const Quiz = () => {
    const {nextQuiz,endQuiz,correct,index,setup,questions,loading,checkAnswer}=useQuizContext()
    if(setup){
        return <SetupQuiz/>
    }
    if(loading){
        return <Loading/>
    }
   if(!questions.length>0){
       return <ModalQuiz/>
   }
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
              while (currentIndex != 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    const {question,correct_answer,incorrect_answers}=questions[index] && questions[index]
    const answers=shuffle([correct_answer,...incorrect_answers])
  return (
    <div className='quizContainer'>
         {endQuiz && <ModalQuiz/>}
        <div className='quiz'>
       
            <h1 dangerouslySetInnerHTML={{ __html: question }} />
            <div className='correct'>{correct}/{questions.length}</div>
            <div className='answers'>
            {answers && answers.map((answer,idx)=>{
               return <button onClick={(e)=>checkAnswer(e,correct_answer)} key={idx} dangerouslySetInnerHTML={{ __html: answer }}/>
            })}</div>
            <button className='nextQuest' onClick={nextQuiz}>Next</button>
        </div>
    </div>
  )
}

export default Quiz