import React, { Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getProductoById } from '../../services/api'

function ProductId() {

    const [productId, setproductId] = useState<any>()

    const {id}=useParams()
    
    const getProduct=async()=>{
        const res=await getProductoById(id)
        setproductId({...res.product})
    }

    useEffect(() => {
      
        getProduct()
    }, [])
    

    return (
        <div>
            <Link to={"/"}>Return</Link>
            {productId?
                <div>
                    <img src={`${productId?.productImgs[0]}`}/>
                    <h1>
                        {productId?.title}
                    </h1>
                    <p>{productId?.description}</p>
                    <p>{productId?.price}</p>
                </div>
            :
                <div>No existe tal producto</div>
            }
            
        </div>
    )
}

export default ProductId