import React, { useEffect } from 'react';

function Mood({ mood, setMood, hunger, health }) {
  useEffect(() => {
    if (hunger > 40 || health < 60) {
      setMood((prevMood) => prevMood - 10);
    }
  }, [hunger, health, mood, setMood]);

  return (
    <>
      <h1>Pet's Mood: {mood}</h1>
      {mood < 60 && <p>Your pet is depressed</p>}
    </>
  );
}

export default Mood;
