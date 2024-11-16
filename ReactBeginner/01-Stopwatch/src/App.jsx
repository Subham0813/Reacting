import start from './assets/start.svg'
import startL from './assets/start-light.svg'
import pause from './assets/pause.svg'
import pauseL from './assets/pause-light.svg'
import reset from './assets/reset.svg'
import resetL from './assets/reset-light.svg'
import sun from './assets/sun.svg'
import moon from './assets/moon.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    let myInterval
    if(running){
      myInterval = setInterval( () => {
        setTime((prevTime) => prevTime + 10)
      }, 10);
    } else {
      clearInterval(myInterval)
    }
  
    return () => {
      clearInterval(myInterval)
    }
  }, [running])

  const hours = `${Math.floor(time / 36000000)}`.padStart(2, '0'); // 1 hour = 3600000 milliseconds
  const minutes = `${Math.floor((time % 3600000) / 60000)}`.padStart(2, '0'); // 1 minute = 60000 milliseconds
  const seconds = `${Math.floor((time % 60000) / 1000)}`.padStart(2, '0'); // 1 second = 1000 milliseconds
  const milliseconds = `${(time % 1000)/10}`.padStart(2, '0'); // Remaining milliseconds
  

  return (
    <>
      <main className={`${dark ? "bg-gray-800 text-white" : 'bg-slate-200'} w-screen h-screen flex flex-col justify-center items-center gap-10`} >
      <h1 className='text-3xl font-semibold m-5 text-center'>Stopwatch</h1>
        <div className="time-container flex flex-nowrap items-center">
          <div className='font-semibold text-7xl p-1'>{hours}</div>
          <div className='font-semibold text-7xl p-1'>: {minutes}</div>
          <div className='font-semibold text-7xl p-1'>: {seconds}</div>
          <div className='font-semibold text-7xl p-1'>. {milliseconds}</div>
        </div>
        <div className="buttons flex gap-6 justify-around">
          {!running ? 
            <button
            className={`border  ${dark ? 'border-cyan-200' : 'border-cyan-950'} rounded-2xl p-5`} 
            onClick={() => {setRunning(true)}}>
              { dark ?  <img width={20} height={20} src= {startL} alt="start" />
              : <img width={20} height={18} src= {start} alt="start" />}
            </button>
          :
            <button
            className={`border  ${dark ? 'border-cyan-200' : 'border-cyan-950'} rounded-2xl p-5`} 
            onClick={() => {setRunning(false)}}>
              { dark ?  <img width={20} height={20} src={pauseL} alt="pause" />
              : <img width={20} height={20} src={pause} alt="pause" />}
            </button>
          }
        <button
        className={`border  ${dark ? 'border-cyan-200' : 'border-cyan-950'} rounded-2xl p-5`} 
        onClick={() => {setTime(0)}}>
            { dark ? <img width={20} height={20} src={resetL} alt="reset" />
            : <img width={20} height={20} src={reset} alt="reset" />}
        </button>
        <button
        className={`border  ${dark ? 'border-cyan-200' : 'border-cyan-950'} rounded-2xl p-5`} 
        onClick={() => {dark ? setDark(false) : setDark(true)}}>
            { dark ? <img width={20} height={20} src={sun} alt="light" />
            : <img width={20} height={20} src={moon} alt="dark"/>}
        </button>
        </div>
      </main>
    </>
  )
}

export default App
