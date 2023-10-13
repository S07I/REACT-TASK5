import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const handleDateChange = (event) => {
    setBirthDate(event.target.value);
  };

  const calculateAge = () => {
    if (birthDate) {
      const dob = new Date(birthDate);
      const today = new Date();
      const ageInMilliseconds = today - dob;
      const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
      setAge(ageInYears);
    }
  };
  const buttonstyle={
    backgroundColor:'skyblue',
    width:'100px',
    height:'30px',
  }
  const input={
    width:'250px',
    height:'50px'

  }

  return (
    <div>
      <h1>Age Calculator</h1>
      <label>
        <h2>Enter your date of birth</h2>
        <input type="date" style={input } value={birthDate} onChange={handleDateChange} />
      </label>
      <br />
      <br />
      <button onClick={calculateAge} style={buttonstyle}>Calculate Age</button>
      {age !== null && (
        <p>You are {age} years old</p>
      )}
    </div>
  );
};

export default AgeCalculator;
