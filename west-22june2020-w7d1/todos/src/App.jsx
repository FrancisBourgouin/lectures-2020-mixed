import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';


const tasks = [
  { overdue: false, priorityLevel: 0, description: "Graham water the tomato plants" },
  { overdue: true, priorityLevel: 1, description: "Rob look after the grass eating dog" },
  { overdue: false, priorityLevel: 2, description: "Jeremy keep your webcam off because of latency" },
  { overdue: true, priorityLevel: 3, description: "Francis likes fried chicken, needs to order tonight" },
  { overdue: false, priorityLevel: 4, description: "Hanna seems to be standing, should sit later." },
]

function App() {
  // const age, name, level, array 
  return (
    <div className="App">
      <h1>Hello! I AM A TASK LIST MANAGER</h1>
      {/* <RandomComponent {...{age, name, level, array}}/>
      <RandomComponent age={age} name={name} level={level} array={array}/> */}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
