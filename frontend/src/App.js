import React from 'react';
import './App.css';
import "./cssCustom.css"
import { Routes} from 'react-router-dom';
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import routes from './routs';
import { useRoutes } from "react-router-dom";

function App() {
  const router = useRoutes(routes)

  return (
    <>
    <SideBar/>
 <div className="main">
 <Header />
 
 {router}
        
</div>

    </>


  );
}

export default App;
