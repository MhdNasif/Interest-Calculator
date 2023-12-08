import { Stack, TextField, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [validPrinciple, setValidPrinciple] = useState(true)
  const [validRate, setValidRate] = useState(true)
  const [validYear, setValidYear] = useState(true)

  const handelReset=()=>{

  }

  console.log(principle);
  const validateInput = (e) => {
    const { name, value } = e.target
    console.log(`${name} , ${typeof value}`);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
      if (name === 'principle') {
        setPrinciple(value)
        setValidPrinciple(true)
      } else if (name === 'rate') {
        setRate(value)
        setValidRate(true)
      } else {
        setYear(value)
        setValidYear(true)
      }
    } else {
      if (name === 'principle') {
        setPrinciple(value)
        setValidPrinciple(false)
      } else if (name === 'rate') {
        setRate(value)
        setValidRate(false)
      } else {
        setYear(value)
        setValidYear(false)
      }
    }
  }

  const handleCaculate=()=>{
    e.preventDefault()
    if (!principle || !rate || !year) {
      alert("Please fill the form")
    }else{
      setInterest(principle*rate*year/100)
    }
  }

  return (
    <>
      <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div style={{ width: '600px' }} className='bg-light p-5 rounded'>
          <h1 style={{ height: '65px' }}>Simple Interest Calculator</h1>
          <p>Calculate your simple interest easily</p>
          <div style={{ width: '100%' }} className='d-flex justify-content-center align-items-center bg-warning mt-5 text-light shadow rounded flex-column'>
            <h1 style={{ height: '50px' }} > ₹ {interest}</h1>
            <p className='fw-bolder'>Total Simple Interest</p>
          </div>
          <form className='mt-5' onSubmit={handleCaculate()}>
            <div className='mb-3 mt-2'>
              <TextField id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" className='w-100' name='principle' value={principle || ""} onChange={e => validateInput(e)} /></div>
            {!validPrinciple && <div className='mb-3 text-danger'>
              Invalid Principle Amount
            </div>}
            <div className='mb-3'>
              <TextField id="outlined-basic-rate" label="Rate Of Interest (%)" variant="outlined" className='w-100' name='rate' value={rate || ""} onChange={e => validateInput(e)} /></div>
            {!validRate && <div className='mb-3 text-danger'>
              Invalid Rate
            </div>}
            <div className='mb-3'>
              <TextField id="outlined-basic-time" label="Time Period (Year)" variant="outlined" className='w-100'
                name='year' value={year || ""} onChange={e => validateInput(e)} /></div>
            {!validYear && <div className='mb-3 text-danger'>
              Invalid Year
            </div>}

            <Stack direction={'row'} spacing={3}>
              <Button style={{ height: '60px', width: '50%' }} type='submit' variant="contained" disabled={validPrinciple && validRate && validYear ? false : true}>Calculated</Button>
              <Button onClick={handelReset()} style={{ height: '60px', width: '50%' }} variant="outlined">Reset</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App