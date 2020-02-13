import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Gauge from './Components/gauge'

const App = () => {
  const svgRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {

        }, [])
  
  return (
    <div className="App">
      <Gauge />
    </div>
  );
}

export default App;
