import React, { Suspense } from 'react'
import { useEffect, useState } from "react"
import { baseUrl, getAllProducts } from "../../services/api"
import Header from '../components/Header'
import Product from '../components/Product'

function Products() {

    const [Allproducts, setAllProducts] = useState<any>([])

    const [Category, setCategori]=useState<string>("")

    const filterProducts=()=>{
        const res= Allproducts.filter((res:any)=>res.category.name==Category)
        
        if(res==false){
            getAllProducts(baseUrl).then((res)=>setAllProducts(res))
        }
        setAllProducts(res)
        setCategori("")
        
    }

    useEffect(() => {
        getAllProducts(baseUrl).then((res)=>setAllProducts(res))
    }, [])
  
  
    return (
    <div>
        <Header>
            <div>
            <input
                    className='filterArea'
                    value={Category}
                    onChange={e=>setCategori(e.target.value)} 
                    placeholder="Filter"/>
                    <button 
                        className='btn'
                        onClick={()=>filterProducts()}>Filter</button>
            </div>
        </Header>
        <div className='contentPro'>

            {Allproducts.map((res:any,index:number)=>
                <Product
                id={res.id}
                key={index}
                price={res.price}
                title={res.title}
                img={res.productImgs}
                />
                )}
        </div>
    </div>
  )
}

export default Products