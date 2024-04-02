import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);


  return (
    <div className="App">
      <header 
        className="App-header" 
        style={{backgroundColor:'#fff'}}
      >
        <h3 data-testid="counter"
            style={{backgroundColor:'#dbdbdb', padding:'5px 10px'}}
        >{count} </h3>
        
        <div>
          <button 
            data-testid='minus-button'
            onClick={()=>setCount((prev)=> prev - 1)}
            disabled={disabled}
          > - 
          </button>
          <button 
            data-testid='plus-button'
            onClick={()=>setCount((prev)=> prev + 1)}
            disabled={disabled}
          >
            + 
          </button>
        </div>
        
        <div>
          <button className='power-btn'
            style={{ backgroundColor:"blue" }}
            data-testid="on/off-button"
            onClick={()=> setDisabled (prev => !prev)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
