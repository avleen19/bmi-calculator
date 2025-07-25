import React, { useState } from 'react';
 import './App.css'; 

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);

  const calculateBMI = () => {
    if (height === '' || weight === '') {
      alert('Please enter both height and weight');
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);

      if (bmiValue < 18.5) {
      setCategory('Underweight');
      setShowConfetti(false);
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory('Normal');
      setShowConfetti(true);
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory('Overweight');
      setShowConfetti(false);
    } else {
      setCategory('Obese');
      setShowConfetti(false);
    }
  };

  return (
    <div className="bmi-container">
      <h1>Calculate your BMI here</h1>
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>You fall Under {category} category</p>
        </div>
      )}
       {showConfetti && (
        <div className="confetti-pop">
          🎉 Congratulations! 🎉
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
