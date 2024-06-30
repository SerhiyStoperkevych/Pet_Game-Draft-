import React from 'react';

function Pet({ sick }) {
  const buttonStyle = {
    backgroundColor: sick ? 'red' : 'green'
  };

  return (
    <div className="pet-div" id="pet-div">
      <button className="pet" id="pet" style={buttonStyle}>Pet</button>
    </div>
  );
}

export default Pet;
