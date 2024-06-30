import React from 'react';

function Full({ hunger }) {
  return (
    <div className="events" id="events">
      <h1>Pet's Hunger: {hunger}</h1>
      {hunger < -100 && <p>Your pet is dead</p>}
    </div>
  );
}

export default Full;
