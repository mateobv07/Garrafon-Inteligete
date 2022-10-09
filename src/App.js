import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Garrafones from './pages/Garrafones';
import SideBar from './components/SideBar/SideBar';
import useStyles from './styles'

function App() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <SideBar/>
      <div className={styles.pagesContainer}>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/garrafones"  element={<Garrafones/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
