import React, { useContext } from 'react'
import CategoryProduct from '../../components/categoryProduct'
import "./index.scss"
import ProductCard from '../../components/productCard'
import { SearchContext } from '../../context/searchContext'
import { useState } from 'react'
import { FilterContext } from '../../context/filterContext'


function Home() {
   
    const {handleFilter,categories}=useContext(FilterContext)
    const {handleSearch}= useContext(SearchContext)
   const [searchBlock, setSearchBlock] = useState(false)

   function handleBlock() {
    setSearchBlock(!searchBlock)
    console.log(searchBlock);
   }
    return (
        <>
            <div className='cards'><CategoryProduct season={"Spring 2018"} category={"Women"} image={"https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg"}></CategoryProduct>
                <CategoryProduct season={"Spring 2018"} category={"Men"} image={"https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg"}></CategoryProduct>
                <CategoryProduct season={"New Trend"} category={"Accessories"} image={"https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg"}></CategoryProduct></div>

           <div className='products'> <h2>Product Overview</h2>
            <div className='filterPage'>
                <div className='mainFilter'><ul className='page'><li onClick={() => handleFilter("All")}>All Products</li>
                    <li onClick={() => handleFilter("Womens")}>Women</li>
                    <li onClick={() => handleFilter("Mens")}>Men</li>
                    <li onClick={() => handleFilter("Kids")}>Kids</li>
                   </ul>
                    <div className='button'>
                        <div className='filter'><i class="fa-solid fa-filter"></i>Filter</div>
                        <div className='search' onClick={()=>handleBlock()} ><i class="fa-solid fa-magnifying-glass"></i>Search</div>
                    </div></div>
                    <div className= { searchBlock ? `block` :'none'}>
                    <input type="text"  className='input' placeholder='Search...' onChange={(e)=>handleSearch(e)}  />

                    </div>
                    
            </div>
            <ProductCard></ProductCard>
            

            </div>
        </>

    )
}

export default Home