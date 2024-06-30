import React, { useEffect } from 'react';

function State({ hunger, setHealth, sick, setSick }) {
  useEffect(() => {
    const meds = () => {
      if (hunger >= 100) {
        setSick(true);
        setHealth((prevHealth) => prevHealth - 10);
      }
    };

    const interval = setInterval(meds, 60 * 100);

    return () => clearInterval(interval);
  }, [hunger, setHealth, sick, setSick]);

  return (
    <div className="events" id="events">
      <h1>Your Pet is Sick: {sick ? 'Yes' : 'No'}</h1>
    </div>
  );
}

export default State;
