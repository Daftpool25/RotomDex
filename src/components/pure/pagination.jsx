import React from 'react'

function Pagination({offset,nextPage, previousPage}) {
  return (
    <div className='d-flex flex-row justify-content-center gap-3 wrap py-5 my-5'>
        {offset!==0 && <button className="btn btn-lg fs-1 btn-danger text-light px-5 mb-5" onClick={previousPage}>Prev</button>}
        {offset !==1154 &&<button className="btn btn-lg fs-1 btn-danger text-light px-5 mb-5" onClick={nextPage }>Next</button>}
    </div>
  )
}

export default Pagination