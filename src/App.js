import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Garrafones from './pages/Garrafones/Garrafones';
import Botellas from './pages/Botellas/Botellas';
import Datos from './pages/Datos/Datos'
import SideBar from './components/SideBar/SideBar';
import BottomNav from './components/BottomNav/BottomNav'
import useStyles from './styles'
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
function App() {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      {!isMobile && <SideBar/>}
      <div className={styles.pagesContainer}>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/garrafones"  element={<Garrafones/>}/>
          <Route path="/botellas"  element={<Botellas/>}/>
          <Route path="/datos"  element={<Datos/>}/>
        </Routes>
      </div>
      {isMobile && <BottomNav/>}
    </div>
  );
}

export default App;
