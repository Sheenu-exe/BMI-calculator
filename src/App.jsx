import { useState } from 'react';
import './App.css';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height from cm to meters

    if (!isNaN(weightInKg) && !isNaN(heightInM) && heightInM > 0) {
      const bmiValue = weightInKg / (heightInM * heightInM);
      setBMI(bmiValue.toFixed(2));
    } else {
      setBMI(null);
    }
  };

  return (
    <div className='container'><div className="App">
      <div className='part1'>
      <h1 className="heading">BMI Calculator</h1>
      <label>
        Weight (kg):
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <br />
      <label>
        Height (cm):
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      </div>
      <br />
      <div className='part2'>
    {bmi !== null && (
      <div>
      <h2><span>Your BMI</span><br/>{bmi}</h2>
      <p className='verdict'>
        You are
        {bmi < 18.5
          ? ' underweight!'
          : bmi < 24.9
            ? ' normal weight.'
            : bmi < 29.9
              ? ' overweight!'
              : ' obese!'}
      </p>
    </div>
      )}
    </div>
    </div>
    
      </div>
  );
};


export default App
