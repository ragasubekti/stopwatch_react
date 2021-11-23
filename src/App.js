import React, {useState, useRef} from 'react'

const App = () => {
  const [ticker, setTicker] = useState(0)
  const [isPaused, setIsPaused] = useState(true)
  const [lapTimes, setLapTimes] = useState([])
  const tickerRef = useRef(null)



  const startTicker = () => {
    setIsPaused(false)
    tickerRef.current = setInterval(() => {
      setTicker((ticker) => ticker +1)
    }, 10)
  }

  const stopTicker = () => {
    setIsPaused(true)

    if(isPaused) {
      clearInterval(tickerRef.current)
      setTicker(0)
    } else {
      clearInterval(tickerRef.current)
    }
  }

  const onLapTimesPressed = () => {
    const _current = lapTimes.concat(ticker)
    setLapTimes(_current)
    console.log(_current)
  }

  const _renderReadableTime = () => {
    const _ms = (ticker % 100) // later
    const _s = `${(ticker % 6000)}`.slice(-2) //
    
    const _minutes = (ticker/6000) 
    const _mText = `${(_minutes % 60)}`

    return (
      <>
      {/* <span id="h">{ticker/100}</span> */}
      {/* <span id="m">{ticker/100}</span> */}
      <span id="s">{_s}</span>:
      {/* <span id="ms">{_ms}</span> */}
      </>
    )
  }
  

  return (
    <>
      <div>{_renderReadableTime()}</div>
      <button onClick={startTicker}>Start</button>
      <button onClick={stopTicker}>{`${isPaused ? `Reset` : `Stop`}`}</button>
      <button onClick={onLapTimesPressed}>Lap</button>
      <div>
        {lapTimes.map((item) => (
          <span>{item}</span>
        ))}
      </div>
    </>
  )
}

export default App