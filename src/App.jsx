//import area
import './App.css';
import logoCalculator from'./img/Logo.png'
import Button from './components/Button';
import Screen from './components/Screen'
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';
// area of the calculator functionality
function App() {
   
  const [output, setOutput] = useState('');
  const addOutput = val =>{
    setOutput(output + val);
  }
  const resetOutput = reset =>{
    setOutput(reset = '')
  }

  const calDates = () => {
    if (output){
      setOutput(evaluate(output));
    } else{
      setOutput(0)
      alert('no value')

    }
  }
// html visuals area
  return (
    <div className='App'>
      <div className='cal_logoContainer'> 
      <img 
        src={logoCalculator}
        className='cal_logo'
        alt='logo calculator'
        />
      </div>
      <div className='cal_mainCon'>
        <Screen output={output}/>
        <div className='cal_mainRow'>
          <Button addValue={addOutput}>1</Button>
          <Button addValue={addOutput}>2</Button>
          <Button addValue={addOutput}>3</Button>
          <Button addValue={addOutput}>+</Button>
        </div>
        <div className='cal_mainRow'>
          <Button addValue={addOutput}>4</Button>
          <Button addValue={addOutput}>5</Button>
          <Button addValue={addOutput}>6</Button>
          <Button addValue={addOutput}>-</Button>
        </div>
        <div className='cal_mainRow'>
          <Button addValue={addOutput}>7</Button>
          <Button addValue={addOutput}>8</Button>
          <Button addValue={addOutput}>9</Button>
          <Button addValue={addOutput}>*</Button>
        </div>
        <div className='cal_mainRow'>
          <Button addValue={calDates}>=</Button>
          <Button addValue={addOutput}>0</Button>
          <Button addValue={addOutput}>.</Button>
          <Button addValue={addOutput}>/</Button>
        </div>
        <div className='cal_mainRow'>
          <ClearButton screen = {resetOutput}>RESET</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
