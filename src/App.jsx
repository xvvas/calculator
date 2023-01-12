import './App.css';
import logoCalculator from'./img/Logo.png'
import Button from './components/Button';
import Screen from './components/Screen'
import ClearButton from './components/ClearButton';
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
        <Screen output={10}/>
        <div className='cal_mainRow'>
          <Button> 1 </Button>
          <Button> 2 </Button>
          <Button> 3 </Button>
          <Button> + </Button>
        </div>
        <div className='cal_mainRow'>
          <Button> 4 </Button>
          <Button> 5 </Button>
          <Button> 6 </Button>
          <Button> - </Button>
        </div>
        <div className='cal_mainRow'>
          <Button> 7 </Button>
          <Button> 8 </Button>
          <Button> 9 </Button>
          <Button> * </Button>
        </div>
        <div className='cal_mainRow'>
          <Button> = </Button>
          <Button> 0 </Button>
          <Button> . </Button>
          <Button> / </Button>
        </div>
        <div className='cal_mainRow'>
          <ClearButton>RESET</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
