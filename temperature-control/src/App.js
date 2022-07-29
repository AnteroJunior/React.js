import { useState } from "react";
import "./App.css";

const styles = {
  backgroundColor: 'blue'
}

function App() {

  const [temperature, setTemperature] = useState(20);
  const [colorTemperature, setColor] = useState('hot');

  const increaseTemperature = () => {

    let newTemperatureValue = temperature + 1;

    if(newTemperatureValue >= 15){
      setColor('hot');
    }

    setTemperature(newTemperatureValue);

  }

  const decreaseTemperature = () => {

    let newTemperatureValue = temperature - 1;

    if(newTemperatureValue < 15){
      setColor('cold')
    }

    setTemperature(newTemperatureValue);

  }
  
  return (
    
    <div className="externDiv">

      <div className={`temperature ${colorTemperature}`}>

        <p>{temperature}ºC</p>

      </div>

      <div className="controls">

        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>

      </div>

    </div>    

  );

}

export default App;