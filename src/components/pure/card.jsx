import React from 'react';
import {useNavigate} from 'react-router-dom';
import weightIcon from "../../images/weight.png";
import heightIcon from "../../images/height.png";
import pokeball from "../../images/pokeball.png";
import ice from "../../images/badges/IceIC.png";
import psychic from "../../images/badges/PsychicIC.png";

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


function Card({name, img, type1, type2, weight, height, ID}) {

    const navigate=useNavigate()

    let badge1
    let divFront
    if(type1==="bug"){
        badge1=BugIC;
        divFront={backgroundColor:"#cee4266c",
                    backgroundImage: "var(--bs-gradient)"}
    }   else if (type1==="dark"){
        badge1=DarkIC;
        divFront={backgroundColor:"#4f3f3d69",
        backgroundImage: "var(--bs-gradient)"}
    }   else if (type1==="dragon"){
        badge1=DragonIC;
        divFront={backgroundColor:"#4f60e270",
        backgroundImage: "var(--bs-gradient)"}
    }   else if (type1==="electric"){
        badge1=ElectricIC;
        divFront={backgroundColor:"#f9bf0070",
        backgroundImage: "var(--bs-gradient)"}
    }   else if (type1==="fairy"){
        badge1=FairyIC;
        divFront={backgroundColor:"#ef71ef6b",
        backgroundImage: "var(--bs-gradient)"}
    }   else if (type1==="fighting"){
        badge1=FightingIC;
        divFront={backgroundColor:"#ff80006e",
        backgroundImage: "var(--bs-gradient)"}
    }   else if (type1==="fire"){
        badge1=FireIC;
        divFront={backgroundColor:"#e723236b",
        backgroundImage: "var(--bs-gradient)"}
    }   else if (type1==="flying"){
        badge1=FlyingIC;
        divFront={backgroundColor:"#82baef73",
        backgroundImage: "var(--bs-gradient)"}
    }   else if (type1==="ghost"){
        badge1=GhostIC;
        divFront={backgroundColor:"#713f716e",
        backgroundImage: "var(--bs-gradient)"}
    }   else if (type1==="grass"){
        badge1=GrassIC;
        divFront={backgroundColor:"#3da22462",
        backgroundImage: "var(--bs-gradient)"}
    }   else if (type1==="ground"){
        badge1=GroundIC;
        divFront={backgroundColor:"#92511b6b",
        backgroundImage: "var(--bs-gradient)"}
    }   else if (type1==="ice"){
        badge1=IceIC;
        divFront={backgroundColor:"#3dd8ff65",
        backgroundImage: "var(--bs-gradient)"}
    }else if (type1==="normal"){
        badge1=NormalIC;
        divFront={backgroundColor:"#a0a2a067",
        backgroundImage: "var(--bs-gradient)"}
    }else if (type1==="poison"){
        badge1=PoisonIC;
        divFront={backgroundColor:"#913fcc69",
        backgroundImage: "var(--bs-gradient)"}
    }else if (type1==="psychic"){
        badge1=PsychicIC;
        divFront={backgroundColor:"#ef3f7a75",
        backgroundImage: "var(--bs-gradient)"}
    }else if (type1==="rock"){
        badge1=RockIC;
        divFront={backgroundColor:"#b0ab8263",
        backgroundImage: "var(--bs-gradient)"}
    }else if (type1==="steel"){
        badge1=SteelIC;
        divFront={backgroundColor:"#60a1b960",
    backgroundImage: "var(--bs-gradient)"}
    }else if (type1==="water"){
        badge1=WaterIC;
        divFront={backgroundColor:"#247fef80",
        backgroundImage: "var(--bs-gradient)"}
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

    const bgStyle={backgroundImage: "var(--bs-gradient)"}
    const bgColor={backgroundColor:"#2E0412"}

    function goTo(name) {
        navigate(`/pokemon/${name}`)
    }


    

  return (
   <div onClick={() => goTo(name)} className=" pokemonCard  my-5 mx-3 rounded-5 bg-warning pointer shadownHover">
        <div className="text-center m-2 rounded-5 overflow-hidden" style={bgColor} id="pokeCard">


            <div className="d-flex flex-row align-items-center justify-content-around py-3 px-2 mb-3 bg-danger "style={bgStyle} >
                 <img src={pokeball} alt="pokeball2" width="29px" className='morebrigness'/>
            </div>

            <div className="mt-3 pt-5  noSaturated" style={divFront}>
                <h1 className='nameTextWhite bg-dark bg-opacity-50 rounded-2 py-2 mb-5'>{name.toUpperCase()}</h1>
                <img  src={img} alt="pokemon" id='pokemon'/>
                
                <div className="d-flex flex-row align-items-center justify-content-center my-2 wrap">
                        <img className="bigger p-1 bg-danger"  src={badge1} alt="badge1" />
                        {type2? <img  className="bigger p-1 bg-danger" src={badge2} alt="badge2" />:<span/>}
                </div>
                <p className="py-4 regularTextWhite">#00{ID}</p>
            </div>

            <div className="w-100 px-4 py-3 bg-danger mt-3"  >
                <div className="row justify-content-center py-1 bg-dark rounded-pill rounded-5 bg-opacity-75 mx-3">
                    <div className="col-5  d-flex flex-row justify-content-center align-items-center gap-2">

                        <img className="invert" src={weightIcon} alt="Weight" height="50px" />
                        <div className="d-flex flex-column justify-content-center align-items-center pt-3">
                             <span className="fw-bold fs-3 text-light"> Weight</span>
                             <p className="fw-light fs-3 text-light">{weight/10} kg</p>
                        </div>

                    </div>
                    <div className="col-5  d-flex flex-row justify-content-center align-items-center gap-2">

                    <img className="invert" src={heightIcon} alt="Height" height="50px" />
                    <div className="d-flex flex-column justify-content-center align-items-center pt-3">
                        <span className="fw-bold fs-3 text-light"> Height</span>
                        <p className="fw-light fs-3 text-light">{height/10} m</p>
                    </div>

                    </div>

                </div>
                
            </div>


        </div>
   </div>
  )
}
/**
    <div className=" pokemonCard bg-warning rounded m-2">
        <div className="rounded p-2 w-30 text-center m-2" style={divBg}>


            <div className="d-flex flex-row gap-3 bg-danger align-items-center justify-content-between px-2 rounded">
              <img src={pokeball} alt="pokeball1" width="29px" className="pokeball "/>
              <h1 className="cardTittle text-light ">{name}</h1>
              <img src={pokeball} alt="pokeball2" width="29px" className="pokeball" />
            </div>


            <img className="mb-2 rounded bg-light " src={img} width="460px" height="460px" alt="pokemon" />
            
            
            
            <div className="detailsCard rounded w-100 px-4 py-2" style={divFront}>
                <div className="d-flex flex-row align-items-center justify-content-center my-2 wrap">
                    <img src={badge1} alt="badge1" />
                    {type2? <img src={badge2} alt="badge2" />:<span/>}
                </div>


                <p className="pt-2 fw-bold" style={textColor}>Category: Comedian</p>
                

                <div className="row">
                    <div className="col-6">
                        <div className="d-flex flex-row gap-2 justify-content-center align-items-center ">
                            <img src={weight} alt="Weight" height="27px" />
                             <span className="fw-bold fs-3" style={textColor}> Height</span>
                        </div>
                        <p className="fw-light fs-3 text-light">  58.2 kg</p>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-row gap-2 justify-content-center align-items-center ">
                            <img src={height} alt="Height" height="27px" />
                             <span className="fw-bold fs-3  "style={textColor}> Height</span>
                        </div>
                        <p className="fw-light fs-3 text-light">  1.5 m</p>
                    </div>
                </div>
                
            </div>


        </div>
   </div>
 */
export default Card

