import Player from './components/Player.jsx';
import { TimerChalanges } from './components/TimerChalanges.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChalanges title={"easy"} targetTime={1} />
        <TimerChalanges title={"Not Easy"} targetTime={5} />
        <TimerChalanges title={"Gettong Tough"} targetTime={10} />
        <TimerChalanges title={"Pros Only"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
