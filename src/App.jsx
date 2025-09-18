import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { CssBaseline } from '@mui/material'
import Login from './pages/Login'
import Register from './pages/Register'
import { useState } from 'react'
import Adopt from './pages/Adopt'
import Home from './pages/Home'
import About from './pages/About'
import Donate from './pages/Donate'
import Volunteer from './pages/Volunteer'
import Bulletin from './pages/Bulletin'
import Contact from './pages/Contact'
import PetProfile from './pages/PetProfile'



function App() {
  const [toggleTheme, setToggleTheme] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  function changeTheme() {
    setOpenSnackbar(false);
    setTimeout(() => {
      setToggleTheme(!toggleTheme);
      setOpenSnackbar(true);
    }, 200);
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  }

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          {/* <Route path='/register' element={<Register theme={toggleTheme} toggleThemeFunc={changeTheme} snackbar={openSnackbar} closeFunc={handleClose} />} /> */}
          {/* <Route path='/login' element={<Login theme={toggleTheme} toggleThemeFunc={changeTheme} snackbar={openSnackbar} closeFunc={handleClose} />} /> */}
          <Route path='/home' element={<Home />} />
          <Route path='/adopt' element={<Adopt />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/volunteer' element={<Volunteer />} />
          <Route path='/about' element={<About />} />
          <Route path='/bulletin' element={<Bulletin />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pets/:id' element={<PetProfile />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
