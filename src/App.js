import React, { createContext, useState} from "react";
import './styles/App.css'
import MyHeader from "./components/UI/header/header";
import MyFooter from "./components/UI/footer/footer";
import OrientationToggler from "./components/orientation-toggler";
import MyMenu from "./components/menu";
import LR1 from "./components/LR1";
import {Routes, Route} from 'react-router-dom';
import LR3 from "./components/LR3";

export const ThemeContext = createContext(null);

function App() {

  const items =[{value:'LR1-2', href:'/lr1'}, {value:'LR3', href:'/lr3'}]
  const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
  const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
  const defaultTheme = isDarkTheme ? 'dark' : 'light'
  const [theme, setTheme] = useState(defaultTheme)

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  function mobile(){
    if(isMobile){
      return(
      <OrientationToggler>
        Переверни экран
      </OrientationToggler>)
    }
    else{
      return;
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        {mobile()}
        <MyHeader>
          Местоположение по IP
        </MyHeader>
        <MyMenu items={items}></MyMenu>
        <Routes>
          <Route path='/lr1' element={<LR1/>} />
          <Route path='/lr3' element={<LR3/>} />
        </Routes>
        <MyFooter style={{textAlign: 'center'}}>
          Разработал Ермолович С.Ю.
        </MyFooter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
