import {useState, useEffect} from 'react'
import './stopwatch.css'
function StopWatch() {
  const[time, setTime] = useState(0);
  const[running, setRunning] = useState(false);

  useEffect(()=> {
    let intervalId;
    if(running){
        //setting time from 0 to 1 every 10 ms using js setInterval method 
        intervalId = setInterval(() => setTime(time + 1),10)
    }
    return () => clearInterval(intervalId);
  },[running,time])

//   Hours calculation
    const hours = Math.floor(time/360000)
    // Minutes calculation
    const min = Math.floor((time%360000)/6000)
    // Second calculation
    const sec = Math.floor((time%6000)/100)

    // Millisecond 
    const ms = time%100;

    // Method to start and stop
    const StartStop = () => {
        setRunning(!running)
    }
    // Method to reset timer back to 0
    const reset = () => {
        setTime(0)
    }

    return (
    <div className='container'>
        <p className='time'>
            {hours}:{min.toString().padStart(2,'0')}:
            {sec.toString().padStart(2,'0')}:
            {ms.toString().padStart(2,'0')}
        </p>
        <div className='buttons'>
            <button className='button' onClick={StartStop}>
                {running ? 'Stop': 'Start'}
            </button>
            <button className='button' onClick={reset}> 
                Reset
            </button>
        </div>
    </div>
  )
}

export default StopWatch