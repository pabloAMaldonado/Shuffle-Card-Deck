import React from "react"

type testController = {
    jsRandom: boolean,
    xorshift: boolean,
    well512: boolean
}

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
  

const testChecker = ({ testController }: { testController: testController }) => {
    const {
        jsRandom, xorshift, well512
    } = testController

    if (jsRandom || xorshift || well512) {
        if (jsRandom && xorshift && well512) {
            return true
        }
        return false
    }
    return true
}

const testCheckerCompo = (
    { isTestChanging, value, setUserNumber, setTimer, setTestController }:
     { isTestChanging: boolean,
        value: number | string,
        setTestController: React.Dispatch<React.SetStateAction<TestController>>, setTimer: React.Dispatch<React.SetStateAction<timer>>
        setUserNumber: React.Dispatch<React.SetStateAction<number | string>>
    }
    ) => {
    const handleClicker = (res: boolean) => {
        if (!res) {
            setUserNumber(value)
        } else {
            let timerJsRandom = null
            let timerXorshift = null
            let timerWell512 = null

            setTimer({
                timerJsRandom,
                timerXorshift,
                timerWell512
            })

            setTestController({
                jsRandom: false,
                xorshift: false,
                well512: false
            })
        }
    }
    
    if (isTestChanging) {
        return (
            <div>
                <span>
                    <p>You haven't completed all the tests yet. Are you sure you want to change the number of tests?</p>
                </span>
                <span>
                    <button onClick={() => handleClicker(true)}>Ok</button>
                    <button onClick={() => handleClicker(false)}>Cancel</button>
                </span>
            </div>
        )
    } else null
}

export default { testChecker, testCheckerCompo }