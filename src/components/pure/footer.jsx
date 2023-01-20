import React from 'react';
import pokeball from "../../images/pokeball.png";
import gitHub from "../../images/menu/github.svg";
import linkedin from "../../images/menu/linkedin.svg";
import email from "../../images/menu/mail.png";


function Footer() {
  return (
    <div className='bg-danger d-flex flex-row flex-wrap flex-md-nowrap p-5'>
        <div className="col-12 col-md-6 ">
            <div>
              <p className="nameTextWhite text-warning">Pokedex use:</p>
              <p className="regularTextWhite px-3">RESTful API PokeAPI </p>
              <p className="regularTextWhite px-3">All rights reserved to Pokemon Company. It`s made just whit recreative goals.</p>
            </div>
        </div>

        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-center gap-2 rounded-5 bg-wine p-4">
                <img src={pokeball} className="morebrigness" width="80px" alt='logo'/>
                <p className="regularTextWhite text-warning">App made by Christopher Acosta </p>
                <div className="d-flex flex-row justify-content-around align-items-center gap-3 flex-wrap">
                <img className="invert pointer" src={linkedin}  height="45px" alt='linkedin'/>
                <img className="invert pointer" src={gitHub}  height="45px" alt='linkedin'/>
                <img className="invert pointer" src={email}  height="45px" alt='gitHub'/>
                </div>
        </div>
    </div>
  )
}

export default Footer