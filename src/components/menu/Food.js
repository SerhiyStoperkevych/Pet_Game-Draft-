import React from 'react';

function Food({ setMoney, food, setFood, setMood }) {
  const funFood = (amount) => {
    setMoney((prevMoney) => prevMoney - amount);
    setFood((prevFood) => prevFood + (amount / 5)); // Increase food by amount/5
    setMood((prevMood) => prevMood + 10); // Increase mood by 10 when buying food
  };

  return (
    <div>
      <h3>Food Left: {food}</h3>
      <h4>Buy Food:</h4>
      <button onClick={() => funFood(25)}>Light (-$25, +5)</button>
      <button onClick={() => funFood(50)}>Medium (-$50, +10)</button>
      <button onClick={() => funFood(100)}>Heavy (-$100, +20)</button>
    </div>
  );
}

export default Food;
