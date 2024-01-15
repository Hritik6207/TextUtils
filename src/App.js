import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode,setMode]=useState('light');
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
  return (
  <>
<Navbar title="TextUtils" aboutText="About" mode={mode} togglemode={togglemode}/>
<div className="container my-3">
  <TextForm heading="Enter the text below to analyze"/>
</div>
   </>
  );
}

export default App;
