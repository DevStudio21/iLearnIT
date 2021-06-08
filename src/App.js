import { Route } from 'wouter';
import './App.css';

import Home from 'Pages/Home';
import Login from 'Pages/Login';
import Dashboard from 'Pages/Dashboard';
import Lesson from 'Pages/Lesson';

import NavBar from 'Components/NavBar';

function App() {
  return (
    <>
      <div className='fondo h-screen'>
        <NavBar/>
        <Route component={Home} path='/'></Route>
        <Route component={Login} path='/login'></Route>
        <Route component={Dashboard} path='/dashboard'></Route>
        <Route component={Lesson} path='/lesson'></Route>
      </div>
    </>
  )
}

export default App;
