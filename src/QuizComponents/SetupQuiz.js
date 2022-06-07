import React from 'react'
import { useQuizContext } from '../QuizComponents/contextQuiz'

const SetupQuiz = () => {
  const {number,difficulty,changeQuizValues,submitQuiz,category}=useQuizContext()
  return (
    <div className='quizContainer'>
      <div className='quiz'>
        <h1>Quiz</h1>
        <form onSubmit={submitQuiz}>
          <label >Number Of Questions:</label>
          <input type='number' min='1' max='30' name='number' value={number} onChange={changeQuizValues}/>

          <label >Difficulty:</label>
          <select name='difficulty' value={difficulty} onChange={changeQuizValues}>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>

          <label >Category:</label>
          <select name='category' value={category} onChange={changeQuizValues}>
            <option value='Sports'>Sports</option>
            <option value='Geography'>Geography</option>
            <option value="Science and Nature">Science and Nature</option>
            <option value="Science: Computers">Science: Computers</option>
            <option value="Science: Mathematics">Science: Mathematics</option>
            <option value="Mythology">Mythology</option>
            <option value="History">History</option>
            <option value="Celebrities">Celebrities</option>
            <option value="Entertainment: Comics">Entertainment: Comics</option>
            <option value={`Entertainment: Japanese Anime & Manga`}>Entertainment: Japanese Anime and Manga</option>
          </select>
      
          <button type='submit'>Start</button>
        </form>
      </div>
    </div>
  )
}

export default SetupQuiz