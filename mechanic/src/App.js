import logo from './logo.svg';
import './App.css';
import Mechanic from './compnents/Mechanic';
import Form from './compnents/Form';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/form' element = {<Form/>}>
          
        </Route>
        <Route path = '/mechanic' element = {<Mechanic/>}>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
