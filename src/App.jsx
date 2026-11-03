import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [Weight, setWeight] = useState('')
  const [Height, setHeight] = useState('')
  const [bmi, setbmi] = useState('')
  const [message, setmessage] = useState('')

  let cllBmi = (e) => {
    e.preventDefault()

    if (Weight === '' || Height === '') {
      alert("Please enter a valid Weight and Height")
      return
    }

    let weight = Number(Weight)
    let height = Number(Height)

    if (weight <= 0 || height <= 0 || !Number.isFinite(weight) || !Number.isFinite(height)) {
      alert("Please enter valid positive numbers")
      return
    }

    let bmi = weight / ((height / 100) * (height / 100))

    setbmi(bmi.toFixed(1))

    if (bmi < 18.5) {
      setmessage("You are underweight")
    }
    else if (bmi < 25) {
      setmessage("You are healthy weight")
    }
    else if (bmi < 30) {
      setmessage("You are overweight")
    }
    else {
      setmessage("You are obese")
    }
  }

  let reset = () => {
    setWeight('')
    setHeight('')
    setbmi('')
    setmessage('')
  }

  return (
    <div className='container'>

      <h1>BMI Calculator</h1>

      <div className='formClass'>

        <form onSubmit={cllBmi}>

          <label>Weight (kg)</label>
          <input
            type="number"
            value={Weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />

          <label>Height (cm)</label>
          <input
            type="number"
            value={Height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />

          <div>
            <button className='btn' type="submit">
              Calculate
            </button>

            <button className='btn' type="button" onClick={reset}>
              Reset
            </button>
          </div>

          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>

        </form>

      </div>

    </div>
  )
}

export default App