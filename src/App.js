import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login page/login.js';
import Home from './components/home page/home.js';
import NavBar from "./components/nav bar/navbar.js"
import Forum from './components/forum page/forum';
import SignUp from './components/sign up page/signup';
import CreatePost from './components/createpost/createpost';



export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/createpost' element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}


