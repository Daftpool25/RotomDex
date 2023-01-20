import React, { useEffect, useState } from 'react'
import Card from "../pure/card";
//badges
import BugIC from "../../images/badges/BugIC.png";
import DarkIC from "../../images/badges/DarkIC.png";
import DragonIC from "../../images/badges/DragonIC.png";
import ElectricIC from "../../images/badges/ElectricIC.png";
import FairyIC from "../../images/badges/FairyIC.png";
import FightingIC from "../../images/badges/FightingIC.png";
import FireIC from "../../images/badges/FireIC.png";
import FlyingIC from "../../images/badges/FlyingIC.png";
import GhostIC from "../../images/badges/GhostIC.png";
import GrassIC from "../../images/badges/GrassIC.png";
import GroundIC from "../../images/badges/GroundIC.png";
import IceIC from "../../images/badges/IceIC.png";
import NormalIC from "../../images/badges/NormalIC.png";
import PoisonIC from "../../images/badges/PoisonIC.png";
import PsychicIC from "../../images/badges/PsychicIC.png";
import RockIC from "../../images/badges/RockIC.png";
import SteelIC from "../../images/badges/SteelIC.png";
import WaterIC from "../../images/badges/WaterIC.png";


//TODO tipo, region, y nombre, en el rotom dex cadena evolutiva y formas alternas

function CardContainer({getType, pokemonList,state}) {

  const spinnerStyle={
    width: "10rem", height: "10rem"
  }

  return (
    <div className='d-flex flex-column align-items-center justify-content-center m-5'>
      <div className="row  w-100 align-items-center text-center my-5">
        <h1 className={state? "col-lg-2 col-sm-12 col-sx-12 tittleTextWhite rounded":"col-12 tittleTextWhite pb-5"}>Types:</h1>
        <div className={state? "col-lg-10 col-sm-12 col-sx-12 d-flex flex-row align-items-center justify-content-center  gap-3 flex-wrap":"col-12 d-flex flex-row align-items-center justify-content-center  gap-3 flex-wrap"}>
          <img  className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(7)} src={BugIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(17)} src={DarkIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(16)} src={DragonIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(13)} src={ElectricIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(18)} src={FairyIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(2)} src={FightingIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(10)} src={FireIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(3)} src={FlyingIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(8)} src={GhostIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(12)} src={GrassIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(5)} src={GroundIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(15)} src={IceIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(1)} src={NormalIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(4)} src={PoisonIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(14)}  src={PsychicIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(6)} src={RockIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(9)} src={SteelIC} alt="badge" />
          <img className="biggerBtn rounded p-1 bg-danger" onClick={() => getType(11)} src={WaterIC} alt="badge" />

        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center my-5">
      {pokemonList.length>0?
      pokemonList.map( item => <Card name={item.name} ID={item.id} img={item.sprites.other['official-artwork'].front_default} type1={item.types[0].type.name} type2={item.types[1]? item.types[1].type.name:null} height={item.height} weight={item.weight} key={item.name}/>)
      :
      <div className="spinner-border text-warning" style={spinnerStyle} role="status">
      <span className="visually-hidden">Loading...</span>
      </div> 
      }
      </div>
      
    </div>
  )
}

export default CardContainer