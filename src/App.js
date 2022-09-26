import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Components/UI/Navbar/Navbar';
import About from './pages/About';
import Posts from './pages/Posts';
import './Styles/App.css';
import Error from './pages/Error';
import PostIdPage from './pages/PostIdPage';
import AppRouter from './Components/AppRouter';
import { AuthContext } from './context/context'

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;