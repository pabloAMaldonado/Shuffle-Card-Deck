
import { useState } from 'react'
import './App.css'

import ErrorCompo from './components/error'
import TimerCompo from './components/timer'

import cardShuffler from './functions/cardShuffler'
import rng from './functions/rng'
import testCheckerF from './functions/testChecker'
import inputValidator from './hook/inputValidator'

type timers = {
  startingTime: number,
  endingTime: number,
  totalTime: number
}

type timer = {
  timerJsRandom: timers | null;
  timerXorshift: timers | null;
  timerWell512: timers | null;
}

type TestController = {
  jsRandom: boolean,
  xorshift: boolean,
  well512: boolean
}

function App() {
  const [userNumber, setUserNumber] = useState<number | string>('')
  const [errorMsg, setErrorMsg] = useState('')
  let timerJsRandom: timers | null = null;
  let timerXorshift: timers | null = null;
  let timerWell512: timers | null = null;

  const [timer, setTimer] = useState<timer>({
    timerJsRandom,
    timerXorshift,
    timerWell512
  })

  const [testController, setTestController] = useState<TestController>({
    jsRandom: false,
    xorshift: false,
    well512: false
  })

  const [isTestChanging, setIsTestChanging] = useState<boolean>(false)

  let deck = Array.from({ length: 52 }, (_, i) => i + 1) // 1 to 52
  

  function numberHandler (e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value
    const numberValue = Number(value)

    if (!testCheckerF.testChecker({ testController })) {
      setIsTestChanging(true)
      return
    } 

    const { setErrorMsg: newErrorMsg, setUserNumber: newUserNumber } = inputValidator({
      value,
      numberValue,
    });

    setErrorMsg(newErrorMsg);
    setUserNumber(newUserNumber);
    
  }

  const rngHandler = (type: string) => {
    if (userNumber === '') {
      setErrorMsg('Input cannot be empty')
      return
    }

    if (typeof userNumber !== 'number' || userNumber < 1 || userNumber > 10000) {
      return
    }

    if (testController.jsRandom && testController.xorshift && testController.well512) {
      setTestController({ jsRandom:false, xorshift: false, well512: false })
      setTimer({ timerJsRandom: null, timerXorshift: null, timerWell512: null })
    }

    switch (type) {
      case 'jsRandom':
        timerJsRandom = cardShuffler(deck, rng.jsRandom, userNumber)

        setTimer((state) => ({ ...state, timerJsRandom }))

        setTestController((state) => ({ ...state, jsRandom: true }))
        console.log(userNumber)

        break
      case 'xorshift':
        timerXorshift = cardShuffler(deck, rng.xorshift, userNumber)

        setTimer((state) => ({ ...state, timerXorshift }))

        setTestController((state) => ({ ...state, xorshift: true }))
        console.log(userNumber)

        break
        case 'well512':
          timerWell512 = cardShuffler(deck, rng.well512ac, userNumber)

          setTimer((state) => ({ ...state, timerWell512 }))

          setTestController((state) => ({ ...state, well512: true }))
          console.log(userNumber)

        break
      default:
        break
    }
  }

  return (
    <div className='app'>
      <div className='container'>
        <p>Shuffle tester</p>
        <div>
          <label htmlFor="userInput">Numbers of repeats</label>
          <input 
            id='userInput'
            value={userNumber.toString()}
            onChange={numberHandler}
          />
        </div>
        
        <div className="buttons">
          <button onClick={ () => rngHandler('jsRandom') }>JS Random</button>
          <button onClick={ () => rngHandler('xorshift') }>Xorshift</button>
          <button onClick={ () => rngHandler('well512') }>WELL512a.c</button>
        </div>
      </div>

      <TimerCompo timer={ timer } />

      { errorMsg !== '' && (
        <ErrorCompo errorMsg={ errorMsg } />
      )}

      <testCheckerF.testCheckerCompo
        isTestChanging={isTestChanging}
        value={userNumber}
        setTestController={setTestController}
        setTimer={setTimer}
        setUserNumber={setUserNumber}
      />
    </div>
  )
}

export default App
