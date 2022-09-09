
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ProductCart } from '../../models/types'
import { oneMore } from '../../Redux/Slices/userSlice'
import { AdProduct } from '../../services/api'

function Product({id,key,price,title,img}:any) {

    const [prod, setprod] = useState<ProductCart>(
      {
      id:id,
      quantity:1
      }
    )

    return (
    <div key={key} className="proCard">
        <img src={img[0]}/>
        <h3>{title}</h3>
        <p>${price}</p>
        <Link to={`${id}`}>Show more</Link>
        <button onClick={()=>{AdProduct(prod)}}>Add Cart</button>
    </div>
  )
}

export default Product