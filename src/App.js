
import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm.js'
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light'); // This state tells us weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => setAlert(null), 1000);

  
  }

  const toggleMode = ()=>{
    if(mode === 'dark')
    {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
    else
    {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">

      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Please enter your text here" showAlert={showAlert}/>} />
      </Routes>
      </div>

    </Router>
    </>

  );
}

export default App;
