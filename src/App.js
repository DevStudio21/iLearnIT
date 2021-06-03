import { Route } from 'wouter';
import './App.css';

import Home from 'Pages/Home';
import NavBar from 'Components/NavBar';

function App() {
  return (
    <>
      <div className='fondo'>
        <NavBar/>
        <Route component={Home} path='/'></Route>
      </div>
    </>
  )
}

export default App;
