import React, { useState, useEffect } from 'react';
import Full from './components/events/Full';
import Health from './components/events/Health';
import State from './components/events/State';
import Pet from './components/Pet';
import Money from './components/events/Money';
import Food from './components/menu/Food';
import Menu from './components/menu/Menu';
import Mood from './components/events/Mood';
import './App.css';

function App() {
  const [hunger, setHunger] = useState(0);
  const [health, setHealth] = useState(100);
  const [money, setMoney] = useState(1000);
  const [food, setFood] = useState(100);
  const [sick, setSick] = useState(false);
  const [mood, setMood] = useState(100);

  useEffect(() => {
    const decreaseHunger = () => {
      setHunger((prevHunger) => prevHunger + 10);
      setFood((prevFood) => prevFood - 10);
      setMoney( (prevMoney) => prevMoney + 1000 )
    };

    const hungerInterval = setInterval(decreaseHunger, 60 * 1000);

    return () => clearInterval(hungerInterval);
  }, []);

  return (
    <>
      <div className="events" id="events">
        <Full hunger={hunger} />
        <Health hunger={hunger} setHealth={setHealth} health={health} mood={mood} />
        <State hunger={hunger} setHealth={setHealth} sick={sick} setSick={setSick} />
        <Mood mood={mood} setMood={setMood} hunger={hunger} health={health} />
        <Money money={money} setMoney={setMoney} />
      </div>
      <div className="pet" id="pet">
        <Pet sick={sick} />
        <Food setMoney={setMoney} food={food} setFood={setFood} setMood={setMood} />
      </div>
      <div className="menu" id="menu">
        <Menu />
      </div>
    </>
  );
}

export default App;
