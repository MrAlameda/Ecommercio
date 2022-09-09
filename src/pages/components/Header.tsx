import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../../models/routes'
import { reset } from '../../Redux/Slices/userSlice'
 
interface Props{
  children:JSX.Element[] | JSX.Element | null
}
const Header=({children}:Props) =>{
  
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  return (
    <div className='header'>
      <h1>Ecommer</h1>
      
      {localStorage.getItem("Token")?
      <div className='services'>
        {children?children:null}
        <button className='btn' onClick={()=>navigate(`/${PrivateRoutes.HOME}/${PrivateRoutes.CART}`)}>Cart</button>
        <button className='btn' onClick={()=>navigate(`/${PublicRoutes.PRODUCTS}`)}>Return</button>
        <button className='btn' onClick={()=>{dispatch(reset()),navigate(`/products`)}}>Logout</button>
      </div>
        :
        <div className='services'>
          {children?children:null}
          <button className='btn' onClick={()=>navigate(`/${PublicRoutes.LOGIN}`)}>Login</button>
        </div>
        }
    </div>
  )
}

export default Header