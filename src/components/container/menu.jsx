import React, { useEffect } from 'react';
import RegionCard from '../pure/regionCard';


function Menu({state}) {

    const kanto="https://static.wikia.nocookie.net/espokemon/images/2/2f/Mapa_Kanto_Pok%C3%A9mon_Let%27s_Go.png"
    const johto ="https://static.wikia.nocookie.net/espokemon/images/a/a1/Scan_mapa_Johto_seg%C3%BAn_el_anime.jpg"
    const hoenn="https://static.wikia.nocookie.net/espokemon/images/a/af/Mapa_de_Hoenn_ROZA.png"
    const sinnoh="https://static.wikia.nocookie.net/espokemon/images/b/b2/Sinnoh.jpg"
    const unova="https://static.wikia.nocookie.net/espokemon/images/2/29/Teselia_N2B2.png"
    const kalos="https://static.wikia.nocookie.net/espokemon/images/0/05/Mapa_Kalos.png"
    const alola="https://static.wikia.nocookie.net/espokemon/images/6/6c/Alola.png"
    const galar="https://static.wikia.nocookie.net/espokemon/images/4/41/Galar.png"
    const bgStyle={backgroundImage: "var(--bs-gradient)"}

    

    if(state===true){return(<div hidden></div>)}
    else{
      return (
        <div className={" text-center bg-danger col-xl-6 col-md-4 col-12 pt-5 "} id='menu'> 
            <div className='position-md-fixed col-12' >
                <h1 className="nameTextWhite fw-light bg-dark bg-opacity-50 py-3 mb-5 ">Select a Region:</h1>
                <div className="d-flex flex-row justify-content-center align-items-center flex-wrap px-1 py-5 bg-dark" style={bgStyle}>
                    <RegionCard img={kanto} name="Kanto"/>
                    <RegionCard img={johto} name="Johto"/>
                    <RegionCard img={hoenn} name="Hoenn"/>
                    <RegionCard img={sinnoh} name="Sinnoh"/>
                    <RegionCard img={unova} name="Unova"/>
                    <RegionCard img={kalos} name="Kalos"/>
                    <RegionCard img={alola} name="Alola"/>
                    <RegionCard img={galar} name="Galar"/>
                </div>
                <p className='littleTextWhite pt-3'>It´s a Dedication to World Champion Ash Ketchup.</p>
            </div>
        </div>
      )
    }
}

export default Menu