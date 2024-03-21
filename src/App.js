import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Help from './extras/Help';
import About from './extras/About';
import Contact from './extras/Contact';
import Pnf from './pages/Pnf';


function App() {
  return (
    <div id='a4' className="App">
    


        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/profile/:userName' element={<Profile></Profile>}></Route>
          <Route path='/help' element={<Help></Help>}></Route>
          <Route path='/aboutus' element={<About></About>}></Route>
          <Route path='/contactus' element={<Contact></Contact>}></Route>
          <Route path='/*' element={<Pnf></Pnf>}></Route>

        </Routes>
 

      
    </div>
  );
}

export default App;
