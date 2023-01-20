import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login page/login.js';
import Home from './components/home page/home.js';
import NavBar from "./components/nav bar/navbar.js"
import Forum from './components/forum page/forum';
import Dashboard from './components/dashboard/dashboard.js';
import Preferences from './components/preferences/preferences.js';

//https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications#step-1-building-a-login-page

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/preferences' element={<Preferences/>} />
      </Routes>
    </BrowserRouter>
  );
}


