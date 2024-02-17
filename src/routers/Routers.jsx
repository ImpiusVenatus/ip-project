// src/router/Routers.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../views/Home'
import Blog from '../views/Blog'
import About from '../views/About'
import Team from '../views/Team'
import SignupForm from '../views/Signup';
import LoginForm from '../views/Login';

const Router = () => {
  return (
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/blog' element={<Blog />}/>
        <Route path='/register' element={<SignupForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
  );
};

export default Router;
