import React from 'react'
import "./index.scss"

function CategoryProduct({ season, category, image }) {
  return (

    <>
      <div className='card'>
        <div className='cardText'><div className='mainText'><h3>{category}</h3>
          <div className='season'>{season}</div></div>
          <div className='shopNow'>Shop Now</div>
        </div>
        <div className='cardImage'><img src={image} /></div>
        <div className='overlay'></div>
      </div>
    </>
  )
}

export default CategoryProduct