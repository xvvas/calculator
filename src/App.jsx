import './App.css';
import logoCalculator from'./img/Logo.png'
import Button from './components/Button';
function App() {
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
        <div className='cal_mainRow'><Button> 1 </Button></div>
        <div className='cal_mainRow'><Button> 2 </Button></div>
        <div className='cal_mainRow'></div>
        <div className='cal_mainRow'></div>
        <div className='cal_mainRow'></div>
      </div>
    </div>
  );
}

export default App;
