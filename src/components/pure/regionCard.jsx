import React from 'react'

function RegionCard({img,name}) {
  return (
    <div className="col-5 bg-warning overflow-hidden pointer biggerBtn shadownHoverDark">
        <img className="w-100" height="300px" src={img} alt="region.png" />
        <p className="bg-dark regularTextWhite">{name}</p>
    </div>
  )
}

export default RegionCard