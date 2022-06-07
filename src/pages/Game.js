import React, { useEffect, useState } from 'react'
import { GiGoalKeeper } from "react-icons/gi";
const Game = () => {
    const [styles,setStyles]=useState({top:'30px',left:'100px'})
    const [score,setScore]=useState(0)
    const [seconds, setSeconds] = useState(0)
    const [modal,setModal]=useState(false)
    function updateTime() {
        if(score>0){
      if ( seconds === 20) {
        setModal(true)
      }
      else {
          setSeconds(seconds => seconds + 1);
        }
    }
    }



    const goal=(e)=>{
        const width=e.currentTarget.parentNode.getBoundingClientRect().width
        const height=e.currentTarget.parentNode.getBoundingClientRect().height
        const randomX=Math.floor(Math.random()*height)
        const randomY=Math.floor(Math.random()*width)
        const x=randomX+150>height?randomX-150:randomX
        const y=randomY+150>width?randomY-150:randomY
        
        setStyles({
            top:`${x}px`,
            left:`${y}px`
        })
        setScore(pre=>pre+1)
        }

    useEffect(()=>{
        let time =setInterval(()=>{
            updateTime()
        }, 500)
         return ()=>{
          clearInterval(time)
        }
    },[seconds,score])


  return (
    <div className='gameContainer'>
        <div className='score'>
            <h1>Time:{seconds}</h1>
            <h1>Score:{score}</h1>
        </div>
        <div className='gameField'>
            {modal && 
            <div className='modalContainer'>
                <div className='modalContent'>
                    <h1>You scored {score} goals</h1>
                    <button onClick={()=>{setScore(0);setSeconds(0); setModal(false)}}>Try Again</button>
                </div>
            </div>
            }
            <GiGoalKeeper style={styles} onClick={goal} className='goal'/>
        </div>
    </div>
  )
}

export default Game