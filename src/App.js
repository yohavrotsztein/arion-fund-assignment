import React, { useState } from "react";
// @mui
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
// components
import AppBar from './components/AppBar'
import ImagesGallery from './components/ImagesGallery'
import ScrollToTopFab from "./components/ScrollToTop";
import Header from "./components/Header";
// context
import reloadContext from './context/reloadContext';


const App = () => {
  const theme = createTheme()
  const [reload, setReload] = useState(false);
  return (
    <div>
      <reloadContext.Provider value={{ reload, setReload }}>
        <ThemeProvider theme={theme}>
          <AppBar />
          <Header />
          <ScrollToTopFab />
          <ImagesGallery />
        </ThemeProvider>
      </reloadContext.Provider>
    </div>
  )
}

export default App;