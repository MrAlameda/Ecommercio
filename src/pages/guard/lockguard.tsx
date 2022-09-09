import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { PublicRoutes } from "../../models/routes"
import { AppStore } from "../../Redux/store"

const lockguard=()=> {
    const user=useSelector((stare:AppStore)=>stare.user)
    return user? <Outlet/>:<Navigate replace to={PublicRoutes.PRODUCTS}/>
}

export default lockguard
