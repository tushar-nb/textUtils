import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from './Components/About';
import AlertMsg from './Components/AlertMsg';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React,{useState} from 'react';

function App() {
  const [Mode, setMode] = useState('light');
  const [Alert, setAlert] = useState(null);

  const showMessage=(message)=>{
    setAlert({
      msg: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggelMode=()=>{
    if(Mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
    }
  }
  return (
    
    <> 
      <BrowserRouter>
          <Navbar title="TextUtils" about="About Us" Mode ={Mode} toggelMode={toggelMode} /> 
          <AlertMsg Alert={Alert}/>
    <div className="container">
              {/* <TextForm heading="Enter the text to analize:" Mode= {Mode} showMessage={showMessage}/> */}
        <Routes>  
          <Route exact path='/' element={<TextForm heading="Enter the text to analize:" Mode= {Mode} showMessage={showMessage}/>}/>
          <Route exact path='/TextForm' element={<TextForm heading="Enter the text to analize:" Mode= {Mode} showMessage={showMessage}/>}/>
          <Route exact path='/About' element={<About Mode={Mode}/>}/>
              {/* <About Mode={Mode}/> */}
          {/* </Route> */}
            
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;
