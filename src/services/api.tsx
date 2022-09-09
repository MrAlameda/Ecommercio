import axios from "axios"
import { ProductCart, PurchInfo, Regist, UserLogin } from "../models/types"
import { userKey } from "../Redux/Slices/userSlice"

// apis
export const baseUrl="https://ecommerce-api-react.herokuapp.com/api/v1/products"

export const RegisterUrle="https://ecommerce-api-react.herokuapp.com/api/v1/users"

export const ExistUser="https://ecommerce-api-react.herokuapp.com/api/v1/users/login"

export const ProductId="https://ecommerce-api-react.herokuapp.com/api/v1/products/"

export const CartUser="https://ecommerce-api-react.herokuapp.com/api/v1/cart"

export const RemovePord="https://ecommerce-api-react.herokuapp.com/api/v1/cart/"

export const PurchasesApi="https://ecommerce-api-react.herokuapp.com/api/v1/purchases"

// Bearer

// lo hago funcion? ya se, pero chance y es finis xD

// calls

// producs

export const getAllProducts=async(a:string)=>{
    const products=await axios.get(a)
    return products.data.data.products
}

export const getProductoById=async(id:string|undefined)=>{
    try{
        const res = await axios.get(`${ProductId}${id}`,Bearer)
        return(res.data.data)
    }catch(err){
        console.log(err)
    }
}


// user

export const registerUser=async(user:Regist)=>{
    const res=await axios.post(RegisterUrle,user)
    return res
}

export const existUser=async(user:UserLogin)=>{
    try{
        
        const res=await axios.post(ExistUser,user)
        return res
    }catch(err){
        alert("algo salio mal")
    }
}


// adProduct

export const AdProduct=async(id:ProductCart)=>{
    try{
        const res=await axios.post(AdToCart,id,Bearer)
        console.log(res)
    }catch(err){
        console.log(err)
    }
}

export const AdToCart="https://ecommerce-api-react.herokuapp.com/api/v1/cart"

const Bearer={
    headers:{
        Authorization:`Bearer ${localStorage.getItem("Token")}`
}}

// removePruduct

export const RemoveProduct=(id:number)=>{
    try{

        const res=axios.delete(`${RemovePord}${id}`,Bearer)
        return res
    }catch{
        console.log("algo salio mal :c")
    }
}

// purchases

export const purchases=(a:PurchInfo)=>{
    axios.post(PurchasesApi,a,Bearer)
        .then((res)=>console.log(res))
        .catch(err=>console.error(err))
    }


// Cart

export const getCartUser=async()=>{
    try{
        const res=await axios.get(CartUser,Bearer)

        return(res.data.data)
    }catch(err){
        console.log(err)
    }
}