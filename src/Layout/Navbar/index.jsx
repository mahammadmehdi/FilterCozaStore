import React, { useContext } from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'
import { SearchContext } from '../../context/searchContext'

function Navbar() {
    const {handleSearch}= useContext(SearchContext)
    return (
        <div id='navigation'>
            <div className='navbar'>

                <div className='leftNavbar'>
                    <NavLink to={"/"}><div className='headPage'><span className='Coza'>Coza</span>Store</div></NavLink>
                    <div className='pages'><ul className='page'>
                        <NavLink to={"/"}><li>Home</li></NavLink>
                        <NavLink><li>Shop</li></NavLink>
                        <NavLink><li>Blog</li></NavLink>
                        <NavLink><li>About</li></NavLink>
                        <NavLink><li>Contact</li></NavLink>
                    </ul></div>
                </div>
                <div className='rightNavbar'>
                <div className='search'><input className='input' type="text" onChange={(e)=>handleSearch(e)} placeholder='search products...' /> <i class="fa-solid fa-magnifying-glass"></i></div>
               <NavLink to={"/basket"}> <i class="fa-solid fa-cart-shopping"></i></NavLink>
                <NavLink to={"/wishlist"}><i class="fa-regular fa-heart"></i></NavLink>
                </div>

            </div>
<div className='mainHead'>
    <div className='category'>Women Collection 2018</div>
    <h1 className='title'>NEW SEASON</h1>
    <button className='btn'>SHOP NOW</button>
</div>
<div className='rightSlider'><i class="fa-solid fa-caret-right"></i></div>
<div className='leftSlider'><i class="fa-solid fa-caret-left"></i></div>

        </div>
    )
}

export default Navbar