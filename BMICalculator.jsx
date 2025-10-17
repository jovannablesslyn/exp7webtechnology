import React, { useState } from 'react';  

function BMICalculator() {  
    const [height, setHeight] = useState('');  
    const [weight, setWeight] = useState('');  
    const [bmi, setBMI] = useState(null);  
    const [status, setStatus] = useState('');  
    const [statusColor, setStatusColor] = useState('');  

    const calculateBMI = () => {  
        if (!height || !weight) {  
            alert('Please enter both height and weight.');  
            return;  
        }  

        if (height <= 0 || weight <= 0) {  
            alert('Height and weight must be positive values.');  
            return;  
        }  

        const heightInMeters = height / 100;  
        const bmiValue = weight / (heightInMeters * heightInMeters);  
        setBMI(bmiValue.toFixed(2)); // Round to 2 decimal places  

        let bmiStatus = '';  
        let color = '';  

        if (bmiValue < 18.5) {  
            bmiStatus = 'Underweight';  
            color = 'blue';  
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {  
            bmiStatus = 'Normal weight';  
            color = 'green';  
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {  
            bmiStatus = 'Overweight';  
            color = 'orange';  
        } else {  
            bmiStatus = 'Obese';  
            color = 'red';  
        }  

        setStatus(bmiStatus);  
        setStatusColor(color);  
    };  

    return (  
        <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>  
            <h2>BMI Calculator</h2>  
            <div>  
                <label htmlFor="height">Height (cm):</label>  
                <input  
                    type="number"  
                    id="height"  
                    value={height}  
                    onChange={(e) => setHeight(e.target.value)}  
                    style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}  
                />  
            </div>  
            <div>  
                <label htmlFor="weight">Weight (kg):</label>  
                <input  
                    type="number"  
                    id="weight"  
                    value={weight}  
                    onChange={(e) => setWeight(e.target.value)}  
                    style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}  
                />  
            </div>  
            <button onClick={calculateBMI} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>  
                Calculate BMI  
            </button>  
            {bmi && (  
                <div style={{ marginTop: '20px' }}>  
                    <p>Your BMI: {bmi}</p>  
                    <p>Status: <span style={{ color: statusColor, fontWeight: 'bold' }}>{status}</span></p>  
                </div>  
            )}  
        </div>  
    );  
}  

export default BMICalculator;  



