import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CardContainer from "../container/cardContainer"
import Pagination from '../pure/pagination'
import searchIcon from "../../images/menu/search.png"
import rotom from "../../images/rotom.png"

function Home({getTypeList,getFirstData,getSecondData,state}) {

  //HOOKS
  const [firstData, setFirstData] = useState([])
  const [SecondData, setSecondData] = useState([])
  const [search, setSearch] = useSearchParams({pokemon:""})
  //PAGINATION HOOKS
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

    //TODO ordenar, paginado,  separar en componentes puros lo que se repite
    //TODO Menú, responsive
    //todo INDENTAR HACER LOS USEEFFECT CON PROMESAS
    // TODO keys repetidos, CONSULTAR XQ PASA ESO CON ARRAYS
    //TODO CARROUSELL
    //todo CORREGIR ANCHO DE LA TARJETAS
    //regiones

  //!PAGINATION
  function nextPage() {
    setOffset(offset+limit)
  }

  function previousPage() {
    setOffset(offset-limit)
  }


  //! GET POKEMON PRIMARY LIST BY TYPES
  function getTypeList(type) {
    fetch(`https://pokeapi.co/api/v2/type/${type}`).
    then(response => response.json()).
    then(json => {console.log(json.pokemon);
      setFirstData(json.pokemon)
    }).
    catch(err => console.log(err))
  }


  //! GET GENERAL POKEMON PRIMARY LIST 
  function getList(limit,offset){
     fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`).
    then(response => response.json()).
    then(json => {setFirstData(json.results);
    console.log(json.results)
    }).
    catch(err => console.log(err))
  } 
  

  //! GET POKEMON SECONDARY LIST BY TYPES
  async function getSecondData() {
    
    setSecondData([]);

    if(firstData[0].hasOwnProperty('url'))
    {
      
      await firstData.map(item => {
        fetch(item.url).then(response => response.json()).
        then((json) => {
          setSecondData(prev => [...prev,json])}).
        catch(err => console.log(err))
      })
      /*let ref= SecondData;
      ref.sort((a,b) => a.id-b.id);
      setSecondData(ref);*/

    }
    else if(firstData[0].hasOwnProperty('pokemon'))
    { setSecondData([])
      await firstData.map(item => {
        fetch(item.pokemon.url).then(response => response.json()).
        then((json) => {
          setSecondData(prev => [...prev,json])}).
        catch(err => console.log(err))
      })
    }
  }


  //! GET SPECIFIC POKEMON by form
  async function getSinglePokemon(event) {
    let lower= search.get('pokemon').toLowerCase()
    event.preventDefault();

    if(lower!==""){
        
        setSecondData([]);
        await fetch(`https://pokeapi.co/api/v2/pokemon/${lower}`).
        then(response => response.json()).
        then(json => {
          console.log(json);
          setSecondData([json])
        }).
        catch(err => console.log(err))
    }else{ alert("Is empty!")}
  }


  //! GET SPECIFIC POKEMON by params
  async function getSinglePokemonURL() {
    let lower= search.get('pokemon').toLowerCase()
 
      setSecondData([]);

      await fetch(`https://pokeapi.co/api/v2/pokemon/${lower}`).
      then(response => response.json()).
      then(json => {
        console.log(json);
        setSecondData([json])
      }).
      catch(err => console.log(err))
    
  }


  //! USE EFFECTS
  useEffect(() => {
  
  if(search.get('pokemon').length>0){
      getSinglePokemonURL();
    }
  }, [])

  useEffect(() => {
    getList(limit,offset);
    console.log(firstData);
    console.log(offset)

  }, [offset])
  

  useEffect(() => {
    getSecondData()
  }, [firstData])



  return (
    <div>
      <img src={rotom} alt="rotom" className='fixed-bottom rotomMove' />
      <div className='homeDashboard text-center py-5 mb-5 d-flex flex-column justify-content-center'>
        <h1 className={state? 'h1MenuHidden':'h1MenuActive'}>Wellcome!</h1>
        <p>RotomDex say hi! what you need?</p>
        <form onSubmit={getSinglePokemon}  className="d-flex justify-content-center align-items-center ">
          <div className="w-50 position-relative">
          <input value={search.get('pokemon')} onChange={e => setSearch({pokemon:e.target.value})} type="text" className="form-control w-100 col-12 p-3 fs-3 rounded" placeholder='Search a Pokemon' ></input>
          <img src={searchIcon} alt="search" className='position-absolute top-50 end-0 translate-middle-y px-2 pointer' onClick={getSinglePokemonURL}/>
          </div>
        </form>
      </div>
      <CardContainer getType={getTypeList} state={state} pokemonList={SecondData}/>

      <Pagination offset={offset} nextPage={nextPage} previousPage={previousPage}/>

    </div>
  )
}

export default Home