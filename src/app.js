import React, { useEffect, useState } from 'react'
import {Link,Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "./components/page/home";
import OpenCard from "./components/pure/openCard";
import Footer from './components/pure/footer';
//Images
import pokeball from "./images/pokeball.png";
import menu from "./images/menu/menu.png";
import menuOpen from "./images/menu/menuOpen.png";
import gitHub from "./images/menu/github.svg";
import linkedin from "./images/menu/linkedin.svg";

//Style
import  "./style/style.scss";
import Menu from './components/container/menu';


const ash ="https://wallpaperaccess.com/full/2737182.jpg"
const meow="https://wallpaperaccess.com/full/4416450.jpg"
const quintaGen ="https://images.wallpapersden.com/image/download/pokemon-hd-cool-art_bWVqbm2UmZqaraWkpJRoZWZnrWZuZm0.jpg"
const celebi ="https://images6.alphacoders.com/114/1140114.jpg"

//TODO 404 not found y que pasa si no encuentra un pokemon, scrollbar

function App() {

  const [state, setState] = useState(true)

  function appearMenu() {
    if(state===true){setState(false)} else{setState(true)}
  }



  return (
   <BrowserRouter>
    <aside className="bg-danger px-5 py-3 d-flex flex-row align-items-center justify-content-between flex-wrap">
        <Link className='text-light text-decoration-none d-flex flex-row gap-2' to="/">
          <img src={pokeball} className="morebrigness" width="80px" alt='logo'/> 
          <h1 className="appLogo">WIKIDEX</h1> 
        </Link>
        <div className='iconsContainer d-flex flex-row gap-3'>
            <a href="https://www.linkedin.com/in/christopher-acosta-dev26/"><img className="opacity-75 pointer" src={linkedin}  height="45px" alt='linkedin'/></a>
            <a href="https://github.com/Daftpool25"><img className="opacity-75 pointer" src={gitHub}  height="45px" alt='gitHub'/></a>
            <img onClick={appearMenu} src={menu} className="invert pointer"  height="45px" alt='menu'/>
        </div>
    </aside>

    <div className={!state? 'd-flex flex-row flex-wrap':""}>
        <Menu state={state}/>
        <main className={!state? "col-12 col-md-8 col-xl-6":""}>
            <Routes>
              <Route exact path='/' element={<Home state={state}/>}/>
              <Route path='/pokemon/:name' element={<OpenCard/>}/>
              <Route exact path='/pokemon' element={<Home/>}/>
            </Routes>
        </main>
    </div>
      
        
    <Footer/>
    </BrowserRouter>
  
  )
}

export default App