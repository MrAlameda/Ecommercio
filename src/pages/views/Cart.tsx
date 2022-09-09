import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCartUser, purchases, RemoveProduct } from '../../services/api'
import Header from '../components/Header'
import Product from '../components/Product'

function Cart() {

const [information, setinformation] = useState({
	"street": "Green St. 1456",
    "colony": "Southwest",
    "zipCode": 12345,
    "city": "USA",
    "references": "Some references"
})

	const [cart, setCart] = useState<any>([])

	const [total,settotal]=useState([])

	const [algopaso, setalgopaso] = useState(true)

	const getCart=async()=>{
		await getCartUser().then(res=>{setCart(res.cart.products),settotal(res.cart.products.map((res:any)=>res.price))}).catch(res=>console.log("algo salio mal"))
		
	}

	const Total=(b:any)=>{
		if(total){
			const i = b.map((res:string[])=>Number(res))
			const tot=i.reduce((af:number,bf:number)=>af+bf,0)
			return tot
		}
	}

	useEffect(() => {
		getCart()
	}, [algopaso])
	// me sale error al hacer el check :c
	// lo mismo :c
	// como si no existiera el user :C
	// pero si me da el token :C
	return (
		<div>
			<Header><></></Header>
			{cart.lenght>0?
				<div>
					{cart?.map((res:any,index:number)=>
                        <div key={index} className="cartCard">
                            <h1>{res.title}</h1>
                            <p>${res.price}</p>
                            <button onClick={()=>{RemoveProduct(res.id),setalgopaso(!algopaso)}}>Delete</button>
                        </div>
                    )}
				</div>
			:
				<div>
					<p>Vacio</p>
				</div>
			}
			<div>
				<div>
					{
						Total(total)
					}
				</div>
				<div>
					<button onClick={()=>{purchases(information),setCart([]),settotal([])}}>Buy</button>
				</div>
			</div>
		</div>
	)
}
// no se escuhca :c
// ese es no?
// oks
export default Cart