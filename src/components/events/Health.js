import React, { useEffect } from 'react';

function Health({ hunger, setHealth, health, mood }) {
  useEffect(() => {
    const timer = () => {
      setHealth((prevHealth) => prevHealth - (10 / mood));
    };

    if (hunger >= 100) {
      const interval = setInterval(timer, 60 * 100);

      return () => clearInterval(interval);
    }
  }, [hunger, setHealth, mood]);

  return (
    <div className="events" id="events">
      <h1>Pet's Health: {health}</h1>
    </div>
  );
}

export default Health;
