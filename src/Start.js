import React from 'react'
import {Link} from "react-router-dom";

const Start = () => {
  return (
    <div className="startContainer">
        <div style={{backgroundImage:'url(https://static7.depositphotos.com/1202020/689/i/600/depositphotos_6898984-stock-photo-worldwide-news-background.jpg)', backgroundSize:'cover'}} className='setup start-news'><Link to='/news'>Enter News</Link></div>
        <div style={{backgroundImage:'url(https://cdnb.artstation.com/p/assets/images/images/022/323/513/large/mario-aceituno-fondo-pantalla-quiz.jpg?1574978636)', backgroundSize:'cover'}} className='setup setup-quiz'><Link to='/quiz'>Start Quiz</Link></div>
        <div style={{backgroundImage:'url(https://thumbs.dreamstime.com/b/weather-forecast-concept-background-variety-conditions-bright-sun-blue-sky-dark-stormy-sky-lightnings-sunset-49089630.jpg)', backgroundSize:'cover'}} className='setup check-weather'><Link to='/weather'>Check Weather</Link></div>
        <div style={{backgroundImage:'url(https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-creative-football-match-poster-background-template-image_139806.jpg)', backgroundSize:'cover'}} className='setup start-game'><Link to='/game'>Start Game</Link></div>
    </div>
  )
}

export default Start