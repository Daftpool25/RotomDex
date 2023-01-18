import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import rotom from "../../images/rotomDex.png";

import weight from "../../images/weight.png";
import height from "../../images/height.png";
import arrow from "../../images/arrow.png";

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



function OpenCard() {
  

  //!descartables
  const evo2= "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a4/latest/20190408204738/Lairon.png/200px-Lairon.png";
  const evo1="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/30/latest/20190408204335/Aron.png/200px-Aron.png";
  const evo3="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/1e/latest/20200720151004/Aggron.png/200px-Aggron.png"

  //!STYLES
  const progress ={width: "75%"}
  const gradient={backgroundImage: "var(--bs-gradient)"}
  const spinnerStyle={
    width: "10rem", height: "10rem"
  }

  //!GET DATA
  const routeParams=useParams();
  const [pokemonDetails, setPokemonDetails] = useState(false)

  async function getAllData(name) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).
    then(response => response.json()).
    then(json => {
      console.log(json);
      setPokemonDetails(json)
    }).
    catch(err => console.log(err))
  }

  useEffect(() => {
    getAllData(routeParams.name);

  }, [])

  //!BADGE LOGICAL
  let type2="nah"
  let type1="nah"
  if(pokemonDetails!==false){
    if(pokemonDetails.types[0].type.name){
      type1=pokemonDetails.types[0].type.name
    }
    else if(pokemonDetails.types[1].type.name){
      type2=pokemonDetails.types[1].type.name
    }
  } 

  //!BADGE1
  let badge1
  if(type1==="bug"){
      badge1=BugIC;
  }   else if (type1==="dark"){
      badge1=DarkIC;
  }   else if (type1==="dragon"){
      badge1=DragonIC;
  }   else if (type1==="electric"){
      badge1=ElectricIC;
  }   else if (type1==="fairy"){
      badge1=FairyIC;
  }   else if (type1==="fighting"){
      badge1=FightingIC;
  }   else if (type1==="fire"){
      badge1=FireIC;
  }   else if (type1==="flying"){
      badge1=FlyingIC;
  }   else if (type1==="ghost"){
      badge1=GhostIC;
  }   else if (type1==="grass"){
      badge1=GrassIC;
  }   else if (type1==="ground"){
      badge1=GroundIC;
  }   else if (type1==="ice"){
      badge1=IceIC;
  }else if (type1==="normal"){
      badge1=NormalIC;
  }else if (type1==="poison"){
      badge1=PoisonIC;
  }else if (type1==="psychic"){
      badge1=PsychicIC;
  }else if (type1==="rock"){
      badge1=RockIC;
  }else if (type1==="steel"){
      badge1=SteelIC;
  }else if (type1==="water"){
      badge1=WaterIC;
  }


  let badge2
  if(type2==="bug"){
      badge2=BugIC
  }   else if (type2==="dark"){
      badge2=DarkIC
  }   else if (type2==="dragon"){
      badge2=DragonIC
  }   else if (type2==="electric"){
      badge2=ElectricIC
  }   else if (type2==="fairy"){
      badge2=FairyIC
  }   else if (type2==="fighting"){
      badge2=FightingIC
  }   else if (type2==="fire"){
      badge2=FireIC
  }   else if (type2==="flying"){
      badge2=FlyingIC
  }   else if (type2==="ghost"){
      badge2=GhostIC
  }   else if (type2==="grass"){
      badge2=GrassIC
  }   else if (type2==="ground"){
      badge2=GroundIC
  }   else if (type2==="ice"){
      badge2=IceIC
  }else if (type2==="normal"){
      badge2=NormalIC
  }else if (type2==="poison"){
      badge2=PoisonIC
  }else if (type2==="psychic"){
      badge2=PsychicIC
  }else if (type2==="rock"){
      badge2=RockIC
  }else if (type2==="steel"){
      badge2=SteelIC
  }else if (type2==="water"){
      badge2=WaterIC
  }
  



  return (

    <div className="bg-info d-flex flex-column p-5">
        <div className="rounded-5 bg-warning p-3">
          {pokemonDetails===false?
          <div className="spinner-border" style={spinnerStyle} role="status">
             <span className="visually-hidden">Loading...</span>
          </div>  
          :
          <div className="rotomDexContainer d-flex flex-column align-items-center rounded-5 bg-danger p-5">
            <img className='col-lg-7 col-sm-4  col-md-7' src={rotom} alt="rotom" />
          <div className='bg-white rounded-5 mx-5 mt-5 h-100 w-100 ' style={gradient}>
              

              <div className='bg-info rounded-5 h-100 overflow-hidden bg-opacity-75 text-center py-3' style={gradient}>
                  <h1 className='col-12 tittleTextWhite text-white bg-dark bg-opacity-75'>{pokemonDetails.name.toUpperCase()}</h1>
                  

                  <div className="d-flex flex-row flex-wrap">
                      <div className="col-md-6 col-lg-6 col-sm-12">
                          <img src={pokemonDetails.sprites.other['official-artwork'].front_default} className="my-3 bigger" alt="poke" width="200px"/>
                          
                          <p className='regularTextWhite text-dark'>Ability: {pokemonDetails.abilities[0].ability.name}</p>
                          

                          <div className="d-flex flex-row align-items-center justify-content-center my-2 wrap">
                            <img className="bigger p-1 bg-danger"  src={badge1} alt="badge1" />
                             {type2!=="nah" && <img  className="bigger p-1 bg-danger" src={badge2} alt="badge2" />}
                          </div>
                      </div>




                      <div className="col-md-6 col-lg-6 col-sm-12 bigger p-2">

                            <div className='d-flex flex-column rounded bg-dark bg-opacity-75 py-3 gap-1'>
                                  <div className='d-flex flex-row flex-wrap align-items-center mx-2'>
                                  <span className="littleTextWhite fs-4 fw-bold col-sm-12">HP: {pokemonDetails.stats[0].base_stat}</span>
                                  <progress value={pokemonDetails.stats[0].base_stat} max="200" className="col-sm-12"/>
                                  </div>

                                  <div className='d-flex flex-row align-items-center flex-wrap mx-2'>
                                  <span className="littleTextWhite fs-4 fw-bold col-sm-12">ATTACK: {pokemonDetails.stats[1].base_stat}</span>
                                  <progress value={pokemonDetails.stats[1].base_stat} max="200" className="col-sm-12"/>
                                  </div>


                                  <div className='d-flex flex-row align-items-center flex-wrap mx-2'>
                                  <span className="littleTextWhite fs-4 fw-bold col-sm-12">SPECIAL ATTACK: {pokemonDetails.stats[2].base_stat}</span>
                                  <progress value={pokemonDetails.stats[2].base_stat} max="200" className="col-sm-12"/>
                                  </div>


                                  <div className='d-flex flex-row align-items-center flex-wrap mx-2'>
                                  <span className="littleTextWhite fs-4 fw-bold col-sm-12">DEFENSE: {pokemonDetails.stats[3].base_stat}</span>
                                  <progress value={pokemonDetails.stats[3].base_stat} max="200" className="col-sm-12"/>
                                  </div>


                                  <div className='d-flex flex-row align-items-center flex-wrap mx-2'>
                                  <span className="littleTextWhite fs-4 fw-bold col-sm-12">SPECIAL DEFENSE: {pokemonDetails.stats[4].base_stat} </span>
                                  <progress value={pokemonDetails.stats[4].base_stat} max="200" className="col-sm-12"/>
                                  </div>


                                  <div className='d-flex flex-row align-items-center flex-wrap mx-2'>
                                  <span className="littleTextWhite fs-4 fw-bold col-sm-12">SPEED: {pokemonDetails.stats[5].base_stat}</span>
                                  <progress value={pokemonDetails.stats[5].base_stat} max="200" className="col-sm-12"/>
                                  </div>

                             </div>

                        </div>

                      
                  


                  </div>
              </div>


          </div>
          </div>
       



          }
        </div>
    </div>
  )
}

export default OpenCard