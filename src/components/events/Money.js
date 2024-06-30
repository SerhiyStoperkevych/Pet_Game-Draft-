import React from 'react';

function Money({ money, setMoney }) {
  const job = () => {
    setMoney((prevMoney) => prevMoney + 100);
  };

  return (
    <>
      <h1>Your money: {money}</h1>
      <div>
        <button onClick={job}>Get Money</button>
      </div>
      {money < -1000 && <p>You have lost</p>}
    </>
  );
}

export default Money;
