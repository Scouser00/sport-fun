import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QuizProvider } from './QuizComponents/contextQuiz';
import { NewsProvider } from './NewsComponents/NewsContext';
import { WeatherProvider } from './WeatherComponents/WeatherContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherProvider>
     <QuizProvider>
       <NewsProvider>
        <App />
      </NewsProvider>
    </QuizProvider>
    </WeatherProvider>
  </React.StrictMode>
);

