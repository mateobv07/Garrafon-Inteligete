import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Garrafones from './pages/Garrafones/Garrafones';
import Botellas from './pages/Botellas/Botellas';
import Datos from './pages/Datos/Datos'
import Auth from './pages/Auth/Auth'
import SideBar from './components/SideBar/SideBar';
import BottomNav from './components/BottomNav/BottomNav'
import useStyles from './styles'
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useLocation } from 'react-router-dom';

function App() {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  return (
    <div>
      {(!isMobile && location.pathname !== '/auth') 
      ? <SideBar/> : <></>}
      <div className={location.pathname === '/auth' ? styles.authContainer : styles.pagesContainer}>
        <Routes>
          <Route path="/"  element={localStorage.getItem('token') ? <Home/> : <Navigate replace to="/auth" />}/>
          <Route path="/garrafones" element={localStorage.getItem('token') ? <Garrafones/> : <Navigate replace to="/auth" />}/>
          <Route path="/botellas" element={localStorage.getItem('token') ? <Botellas/> : <Navigate replace to="/auth" />}/>
          <Route path="/datos" element={localStorage.getItem('token') ? <Datos/> : <Navigate replace to="/auth" />}/>
          <Route path="/auth"  element={<Auth/>}/>
        </Routes>
      </div>
      {(isMobile && location.pathname !== '/auth') 
      ? <BottomNav/> : <></>}
    </div>
  );
}

export default App;
