import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login page/login';
import Home from './components/home page/home';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
  );
}


