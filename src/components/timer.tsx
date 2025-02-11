
type timers = {
    timerJsRandom: timer | null;
    timerXorshift: timer | null;
    timerWell512: timer | null;
  }
type timer = {
    startingTime: number,
    endingTime: number,
    totalTime: number
  }
  
const TimerCompo = ({ timer }: {timer: timers}) => {
    const {
        timerJsRandom, timerXorshift, timerWell512
    } = timer
    return (
        <div id="timerCompo">
            <span className="jsRandom">
                <p>Js Random</p>
                <span>time started: {timerJsRandom && (<p>{ timerJsRandom.startingTime } ms</p>)}</span>
                <span>time ended: {timerJsRandom && (<p>{ timerJsRandom.endingTime } ms</p>)}</span>
                <span>total time: {timerJsRandom && (<p>{ timerJsRandom.totalTime } ms</p>)}</span>
            </span>

            <span className="xorshift">
            <p>Xorshift</p>
                <span>time started: {timerXorshift && (<p>{ timerXorshift.startingTime } ms</p>)}</span>
                <span>time ended: {timerXorshift && (<p>{ timerXorshift.endingTime } ms</p>)}</span>
                <span>total time: {timerXorshift && (<p>{ timerXorshift.totalTime } ms</p>)}</span>
            </span>

            <span className="well512">
            <p>Well512a</p>
                <span>time started: {timerWell512 && (<p>{ timerWell512.startingTime } ms</p>)}</span>
                <span>time ended: {timerWell512 && (<p>{ timerWell512.endingTime } ms</p>)}</span>
                <span>total time: {timerWell512 && (<p>{ timerWell512.totalTime } ms</p>)}</span>
            </span>
        </div>
    )
}

export default TimerCompo
